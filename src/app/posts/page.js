import { db } from "@/utils/dbConnection";
import Link from "next/link";
import Animation from "@/components/Animation";

export const metadata = {
  title: "Ice Cream Scoop Blog",
  description:
    "Dive into the delicious world of Ice Cream Scoop with our blog! Discover the latest flavor innovations, seasonal recipes, and behind-the-scenes stories from our ice cream artisans. Whether you're looking for tips on making the perfect sundae or insights into the ice cream industry, our posts are packed with inspiration and sweet treats. Join the conversation and satisfy your cravings!",
};

export default async function Posts({ searchParams }) {
  let posts = [];
  // const sortParam = searchParams?.sort || "newest";
  const sortOrder = searchParams?.sort === "oldest" ? "ASC" : "DESC";

  try {
    const result = await db.query(
      `SELECT * FROM posts ORDER BY created_at ${sortOrder}`
    );
    console.log(result);
    posts = result.rows;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* <h1 className="text-4xl text-center font-bold mb-4"></h1> */}
      <Animation>
        <h1 className="text-4xl text-custom-pink text-center font-bold mb-8">
          Ice-Creams Posts
        </h1>
      </Animation>
      <div className="mb-6">
        <label
          htmlFor="sortOrder"
          className="text-lg mr-4 font-medium text-pink-600"
        >
          Sort by:
        </label>
        <Link
          href="/posts/?sort=newest"
          className={`p-2 border border-pink-300 text-pink-500 rounded-md mr-2 ${
            searchParams === "newest" ? "bg-pink-200" : ``
          }`}
        >
          Newest
        </Link>
        <Link
          href="/posts/?sort=oldest"
          className={`p-2 border border-pink-300 text-pink-500 rounded-md mr-2 ${
            searchParams === "oldest" ? "bg-pink-400" : ``
          }`}
        >
          Oldest
        </Link>
      </div>
      <main className="max-w-3xl bg-custom-white rounded-custom shadow-custom p-6">
        {posts.length === 0 ? (
          <p className="text-gray-600 text-center">No posts yet</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md rounded-md p-4 mb-6"
            >
              <Link
                href={`/posts/${post.id}`}
                className="text-2xl text-custom-pink font-bold mb-2 block"
              >
                {post.title}
              </Link>
              <p className="text-gray-600 mb-4">{post.content}</p>
              <small className="text-pink-400">
                Posted on: {new Date(post.created_at).toLocaleDateString()}
              </small>
            </div>
          ))
        )}
      </main>
      <footer className="mt-8 text-center">
        <Link href="/" className="font-bold text-custom-pink hover:text-white">
          Return to Home
        </Link>
      </footer>
    </main>
  );
}
