// src/app/newposts/page.js

import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";
import Animation from "@/components/Animation";

export default function NewPost() {
  async function handleSubmit(formValues) {
    "use server";

    const formData = {
      title: formValues.get("title"),
      image: formValues.get("image"),
      content: formValues.get("content"),
      email: formValues.get("email"),
    };
    console.log("Form Data:", formData);

    try {
      const userCheck = await db.query(`SELECT * FROM users WHERE email = $1`, [
        formData.email,
      ]);

      let userId;

      if (userCheck.rowCount === 0) {
        // throw new Error("User email not found");
        const newUser = await db.query(
          `INSERT INTO users (name, email) VALUES ($1, $2)  RETURNING id`,
          ["Anonymous", formData.email]
        );
        userId = newUser.rows[0].id;
        console.log("New ser Created:", userId);
      } else {
        userId = userCheck.rows[0].id;
        console.log("Existing User Found:", userId);
      }

      // const imageFile = formData.image;
      // const imagePath = `/images/${imagefile.name}`;

      await db.query(
        `INSERT INTO posts (title, content, user_id, image) VALUES ($1, $2, $3, $4)`,
        [formData.title, formData.content, userId, formData.image]
      );

      revalidatePath("/posts");
      redirect("/posts");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <Animation>
        <h1 className="text-4xl text-custom-pink font-bold mb-4">
          Add New Post
        </h1>
      </Animation>
      <main className="max-w-xl bg-custom-white rounded-custom shadow-custom p-6">
        <h2 className="text-2xl text-gray-600 font-semibold mb-4">
          We'd love if you create a post!
        </h2>
        <form action={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="title"
              className="block text-lg text-custom-pink font-medium mb-1"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Add your preffered title"
              required
              className="w-full p-2 border border-pink-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-pink-800"
            />
          </div>
          <div>
            <label
              htmlFor="title"
              className="block text-lg text-custom-pink font-medium mb-1"
            >
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              placeholder="Add image using URL"
              // required
              className="w-full p-2 border border-pink-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-pink-800"
            />
          </div>
          <div>
            <label
              htmlFor="content"
              className="block text-lg text-custom-pink font-medium mb-1"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              placeholder="Brief description of your post or receipes"
              required
              className="w-full p-2 border border-pink-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-pink-800"
              rows="5"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-lg text-custom-pink font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
              required
              className="w-full p-2 border border-pink-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-pink-800"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 text-white font-bold py-2 rounded-custom"
          >
            Create Post
          </button>
        </form>
      </main>
      <p className="mt-8 text-center">
        <Link href="/" className="text-custom-pink font-bold">
          Return to Home
        </Link>
      </p>
    </main>
  );
}
