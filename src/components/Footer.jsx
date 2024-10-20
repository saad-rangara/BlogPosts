import Link from "next/link"

export default function Footer(){
    return(
        <footer className="bg-cover bg-bottom p-3 text-center"
                style={{ backgroundImage: `url('/icecreambanner1.jpg')`, backgroundPosition: 'bottom'}}>
            <div  className="bg-white bg-opacity-50 rounded-md mx-auto p-1 inline-block">
                <p className="text-pink-600 mb-4">Made with ❤️ and 🍦 by The Ice Cream Enthusiasts: <b>SAAD RANGARA</b></p>
                    <div className="flex justify-center gap-6 mb-4">
                    <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500  hover:text-pink-700 text-lg">Instagram</Link>
                    <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500  hover:text-pink-700 text-lg">Facebook</Link>
                    <Link href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="text-pink-500  hover:text-pink-700 text-lg">Twitter</Link>
                </div>
            <p className="text-pink-600 mb-4">&copy; 2024 The Ice Cream Enthusiasts: <b>SAAD RANGARA</b></p>
            </div>
        </footer>
    )
}