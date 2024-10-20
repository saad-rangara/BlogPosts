import Image from "next/image";
import Link from "next/link";
import Animation from "@/components/Animation";

export const metadata = {
  title: "About Ice Creams Scoop",
  description:
    "Discover the sweet story behind Ice Cream Scoop, your ultimate destination for delicious ice cream flavors and delightful treats. Learn about our passion for quality ingredients, our commitment to sustainability, and our mission to create memorable experiences for ice cream lovers of all ages. Join us on a journey of flavor and fun!",
};

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <header className="text-center mb-8">
        <Animation>
          <h1 className="text-4xl text-custom-pink font-bold mb-4">
            About The Ice Cream Scoop
          </h1>
        </Animation>
        <Image
          src="/fallon.jpg"
          alt="Ice Cream Blog Banner"
          width={600}
          height={300}
          className="rounded-md"
        />
      </header>
      <main className="max-w-3xl bg-custom-white rounded-custom shadow-custom p-6">
        <h2 className="text-2xl text-custom-pink font-semibold mb-4">
          Our Passion for Ice Cream
        </h2>
        <p className="text-gray-700 mb-4">
          Welcome to The Ice Cream Scoop, where we celebrate all things ice
          cream! Our love for this delicious treat inspired us to create a space
          where ice cream enthusiasts can come together to share recipes,
          explore unique flavors, and discover tips for making the perfect
          scoop.
        </p>
        <p className="text-gray-700 mb-4">
          Whether you&apos;re a fan of classic vanilla&lsquo adventurous with
          flavors like lavender and honey&lsquo or passionate about homemade ice
          cream, this blog is for you. Join us as we dive into the world of
          frozen delights, share our favorite recipes, and explore the
          fascinating history behind this beloved dessert.
        </p>
        <p className="text-gray-700 mb-4">
          We believe that ice cream is more than just a treat; it&apos;s a way
          to create memories with friends and family, celebrate special moments,
          and enjoy the simple pleasures of life. We hope to inspire you to
          scoop up some joy and indulge in your favorite flavors!
        </p>
      </main>
      <footer className="mt-8 text-center">
        <Link href="/" className="text-custom-pink font-bold">
          Return to Home
        </Link>
      </footer>
    </main>
  );
}
