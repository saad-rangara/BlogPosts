// import Image from "next/image";
import "@fontsource/pacifico";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <section className="text-center mb-10">
        <h2 className="text-2xl font-bold text-custom-pink">
          Welcome to The Ice Cream Scoop
        </h2>
        <p className="text-lg text-gray-600 mb-5">
          Your go-to blog for everything ice-cream! Discover new flavors,
          recipes, and tips for your next ice cream adventure!
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-custom-white rounded-custom shadow-custom p-5">
          <Image
            src="/joes.jpg"
            alt="Post 1: The History of Ice Cream"
            width={300}
            height={400}
            className="w-full h-65 object-cover rounded-t-lg"
          />
          <h3 className="text-lg text-custom-pink font-bold mt-2">
            The History of Ice Cream
          </h3>
          <br />
          <p className="text-sm text-gray-600">
            Explore the fascinating journey of ice cream from ancient times to
            modern delights. Until 1800, ice cream remained a rare and exotic
            dessert enjoyed mostly by the elite. Around 1800, insulated ice
            houses were invented. Wide availability of ice cream in the late
            19th century led to new creations. In the 1940s through the ‘70s,
            ice cream production was relatively constant in the United States.
          </p>
          <br />
          <p className="text-sm text-gray-600">
            Legend has all sorts of fanciful stories about Marco Polo bringing
            ice cream from China and Catherine de’ Medici introducing it to
            France and King Charles I having his own personal ice cream maker;
            all wonderful stories, but sadly there is not a scrap of historic
            evidence to back up any of these legends. Marco Polo didn’t
            introduce either ice cream or pasta to Europe and worse still, he
            probably never even went to China. Most of these myths seem to have
            been introduced by the Victorians. The earliest evidence of anything
            approaching ice cream being made was in China in the Tang period
            (A.D. 618-907). Buffalo, cows’ and goats’ milk was heated and
            allowed to ferment. This ‘yoghurt’ was then mixed with flour for
            thickening, camphor (yes camphor!) for flavour and ‘refrigerated’
            before being served. King Tang of Shang had a staff of 2,271 people
            which included 94 ice-men.
          </p>
          {/* <Link
            href="/posts/${post.id}"
            className="text-pink-400 font-bold mt-2 inline-block"
          >
            Read More
          </Link> */}
        </div>

        {/* <div className="bg-white p-4 rounded-lg shadow-lg">
          <Image
            src="/post2.jpg"
            alt="Post 2: 10 Unique Ice Cream Flavors to Try"
            width={400}
            height={240}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <h3 className="text-xl text-pink-700 font-semibold mt-2">
            10 Unique Ice Cream Flavors to Try
          </h3>
          <p className="text-gray-600">
            From lavender to chili, discover ten unique flavors that will excite
            your taste buds!
          </p>
          <Link
            href="/posts/unique-ice-cream-flavors"
            className="text-pink-400 font-bold mt-2 inline-block"
          >
            Read More
          </Link>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg">
          <Image
            src="/post3.jpg"
            alt="Post 3: Homemade Ice Cream Recipes"
            width={400}
            height={240}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <h3 className="text-xl text-pink-700 font-semibold mt-2">
            Homemade Ice Cream Recipes
          </h3>
          <p className="text-gray-600">
            Learn how to make delicious homemade ice cream with these easy
            recipes!
          </p>
          <Link
            href="/posts/homemade-ice-cream-recipes"
            className="text-pink-400 font-bold mt-2 inline-block"
          >
            Read More
          </Link>
        </div> */}
      </section>
    </main>
  );
}
