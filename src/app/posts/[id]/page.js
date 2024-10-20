import { db } from "@/utils/dbConnection";
import Link from "next/link";
import Animation from "@/components/Animation";

export const metadata = (post) => ({
  title: `${post.title} - Ice Cream Scoop`,
  description: `Explore the delightful details of "${post.title}" at Ice Cream Scoop! Discover the ingredients, flavor notes, and inspiration behind this delicious creation. Join us in celebrating the joy of ice cream with every scoop!`,
});

export default async function IdPost({ params, searchParams }) {
  const { id } = params;
  let post;
  let commentsArray = [];

  try {
    const result = await db.query("SELECT * FROM posts WHERE id = $1", [id]);
    post = result.rows[0];

    if (!post) {
      return <p>Post not found.</p>;
    }

    if (post.comments) {
      try {
        commentsArray = JSON.parse(post.comments);
      } catch (error) {
        console.error("Error parsing comments:", error);
        commentsArray = [];
      }
    }

    if (searchParams && searchParams.action === "add-comment") {
      const commentContent = searchParams.comment || "";
      const email = searchParams.email || "";

      if (commentContent.trim() && email) {
        // Check if user exists by email
        const userResult = await db.query(
          "SELECT id FROM users WHERE email = $1",
          [email]
        );
        let user = userResult.rows[0];

        if (!user) {
          const insertUserResult = await db.query(
            "INSERT INTO users (email) VALUES ($1) RETURNING id",
            [email]
          );
          user = insertUserResult.rows[0];
        }

        const userId = user.id;

        commentsArray.push({
          content: commentContent,
          user_id: userId,
          created_at: new Date().toISOString(),
        });

        await db.query("UPDATE posts SET comments = $1 WHERE id = $2", [
          JSON.stringify(commentsArray),
          id,
        ]);
      }
    }

    if (searchParams && searchParams.action === "delete-comment") {
      const commentIndex = parseInt(searchParams.commentIndex);
      if (!isNaN(commentIndex)) {
        commentsArray.splice(commentIndex, 1);

        await db.query("UPDATE posts SET comments = $1 WHERE id = $2", [
          JSON.stringify(commentsArray),
          id,
        ]);
      }
    }

    const updatedResult = await db.query("SELECT * FROM posts WHERE id = $1", [
      id,
    ]);
    post = updatedResult.rows[0];

    if (post.comments) {
      try {
        commentsArray = JSON.parse(post.comments) || [];
      } catch (error) {
        console.error("Error re-parsing comments:", error);
        commentsArray = [];
      }
    }
  } catch (error) {
    console.error("Error fetching post or comments:", error);
    return <p>Error fetching post or comments.</p>;
  }

  const userIds = commentsArray.map((comment) => comment.user_id);
  const usersResult = await db.query(
    "SELECT id, email FROM users WHERE id = ANY($1)",
    [userIds]
  );
  const users = Object.fromEntries(
    usersResult.rows.map((user) => [user.id, user.email])
  );

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <Animation>
        {/* <header className="text-center mb-8"> */}
        <h1 className="text-4xl text-custom-pink font-bold mb-4">
          {post.title}
        </h1>
      </Animation>
      {/* </header> */}

      <main className="max-w-3xl bg-custom-white rounded-custom shadow-custom p-6">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-md mb-4"
        />
        <p className="text-gray-700">{post.content}</p>{" "}
        <section className="mt-8 bg-gray-50 p-4 rounded-custom shadow-custom">
          <h2 className="text-2xl text-custom-pink font-bold mb-4">Comments</h2>
          {commentsArray.length > 0 ? (
            <ul className="space-y-4">
              {commentsArray.map((comment, index) => (
                <li
                  key={index}
                  className="bg-white p-4 rounded-custom shadow-custom"
                >
                  <p>
                    <strong>{users[comment.user_id] || "Unknown User"}</strong>:{" "}
                    {comment.content}
                  </p>{" "}
                  <form action={`/posts/${id}`} method="get">
                    <input type="hidden" name="action" value="delete-comment" />
                    <input type="hidden" name="commentIndex" value={index} />
                    <button type="submit" className="text-red-500 text-sm mt-2">
                      Delete
                    </button>
                  </form>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}

          <form
            action={`/posts/${id}`}
            method="get"
            className="mt-4 bg-gray-50 p-4 rounded-custom shadow-custom"
          >
            <textarea
              className="w-full p-2 text-gray-600 border border-pink-300 rounded-custom mb-2"
              name="comment"
              placeholder="Add your comment"
            />
            <input
              type="email"
              className="w-full p-2 text-gray-600 border border-pink-300 rounded-custom mb-2"
              name="email"
              placeholder="Your email"
              required
            />
            <input type="hidden" name="action" value="add-comment" />
            <button
              type="submit"
              className="bg-custom-pink text-white px-4 py-2 rounded-custom"
            >
              Add Comment
            </button>
          </form>
        </section>
      </main>

      <footer className="mt-8 text-center">
        <Link href="/posts" className="text-custom-pink font-bold">
          Back to Posts
        </Link>
      </footer>
    </main>
  );
}
