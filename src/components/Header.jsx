import Link from "next/link"
import Image from "next/image"
import icecreambanner from  '@/../public/icecreambanner.png'

export default function Header(){
    return(
        <header className="bg-cover bg-center p-6 text-center border-b-2 border-pink-300"
                style={{ backgroundImage: `url('/icecreambanner.png')`}}
                >
            <div  className="bg-white bg-opacity-50 rounded-md mx-auto p-4 inline-block text-pink-700">
                <div className="relative justify-center items-center gap-4">
                    {/* <Image src={icecreambanner} alt="icecreambanner" className="w-fit h-10"/> */}
                    <h1 className="text-4xl font-bold">The Ice Cream Scoop</h1>
                </div>
            </div>
            <nav className="flex justify-center items-center gap-4 mt-10 ml-8">
                <Link href="/" className="text-lg font-bold text-pink-500  hover:text-pink-700">Home</Link>
                {/* <Link href="/flavours" className="text-lg font-bold text-pink-400  hover:text-pink-600">Flavours</Link> */}
                <Link href="/posts" className="text-lg font-bold text-pink-500  hover:text-pink-700">Post</Link>
                <Link href="/about" className="text-lg font-bold text-pink-500  hover:text-pink-700">About</Link>
                <Link href="/newposts" className="text-lg font-bold text-pink-500  hover:text-pink-700">Add-New</Link>
            </nav>
        </header>
    )
}