import Link from "next/link";
import Image from "next/image";
import HeartImage from "./../public/img/heart.png";

const Home = () => {
  return (
    <div className="text-center px-4 sm:px0">
      <div className="absolute w-full h-screen top-0 left-0 flex justify-center items-center">
        <Image src={HeartImage} width={750} className="h-fit -mt-20" alt="kira-heart" />
      </div>

      <div className="relative text-3xl sm:text-7xl sm:mt-24 text-glow">
        <h1>The Legend of Kira The Saviour</h1>
      </div>

      <div className="relative text-xl sm:text-4xl mt-10 text-glow">
        <p>Criminals worldwide</p>
        <p>because <span>Kira</span> is among us again.</p>
        <p>They are the one who will tolerate no wickedness.</p>
        <p>Our messenger from hell.</p>
        <p>Only those who believe in his existence and return.</p>
      </div>

      <div className="relative text-xl sm:text-4xl mt-10 text-glow">
        <p>MAY ENTER</p>
        <p>THIS SITE</p>
      </div>
      
      <div className="relative text-xl sm:text-4xl mt-16 text-gray-500 animate-fade cursor-pointer w-fit mx-auto sm:mb-20 md:mb-20">
        <Link href={'/write'} className="block w-fit">continue</Link>
      </div>
    </div>
  )
}

export default Home