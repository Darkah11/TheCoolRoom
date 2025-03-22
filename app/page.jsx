import Image from "next/image";
import localFont from "next/font/local";
import bg from "../public/ice.jpg";
import Link from "next/link";

const myFont = localFont({ src: "../public/fonts/Icekingdom.ttf" });
export default function Home() {
  return (
    <>
      <nav className=" absolute top-0 left-0 w-full z-50 px-5 py-3 flex justify-between items-center">
        <img src="/frost.png" alt="" className=" w-10" />
        <div className=" flex items-center gap-x-3">
          <Link href={"/"}>
            <button className=" w-[40px] h-[40px] p-[10px] rounded-full bg-white border border-gray-400">
              <img src="/xtwitter.svg" alt="" />
            </button>
          </Link>
          <Link href={"/"}>
            <button className=" w-[40px] h-[40px] p-[10px] rounded-full bg-white border border-gray-400">
              <img src="/tel.svg" alt="" />
            </button>
          </Link>
        </div>
      </nav>
      <section className=" flex justify-center items-center h-screen">
        <div className=" w-full h-screen absolute top-0 left-0">
          {/* <div className=" absolute bg-black w-full h-full opacity-45"/> */}
          <img
            src="/tcr-bg.jpg"
            alt=""
            className=" w-full h-screen object-cover"
          />
        </div>
        <h1
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
          }}
          className={` ${myFont.className} head text-7xl text-center relative`}
        >
          The Cool Room
        </h1>
      </section>
      <section className=" px-5 py-16">
        <div>
          <img src="/tcr.jpg" alt="" className=" rounded-md" />
        </div>
        <div className=" text-center mt-5">
          <h2 className={` ${myFont.className} text-deepBlue text-5xl `}>
            About $COOL
          </h2>
          <p className=" text-bgBlue mt-3 text-l">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            est laboriosam expedita, commodi consequuntur vero, doloribus sequi
            assumenda maiores magni quisquam, iusto hic? Fugit at excepturi
            libero vitae, provident pariatur rem neque dolores, consequatur
            beatae, eius iusto omnis. Iusto aliquam libero doloremque quidem
            nostrum at reiciendis rem excepturi, quibusdam officia.
          </p>
          <Link href={"/"} className="">
            <button className=" bg-lightBlue w-[140px] py-2 rounded-md  mt-5 text-white font-medium">
              Buy Now
            </button>
          </Link>
        </div>
      </section>
      <footer className=" bg-bgBlue py-20">
        <div className=" flex flex-col justify-center items-center text-white">
          <img src="/frost-white.png" alt="" className=" w-28" />
          <div className=" flex items-center gap-x-3 mt-5">
            <Link href={"/"}>
              <button className=" w-[40px] h-[40px] p-[10px] rounded-full bg-white border border-gray-400">
                <img src="/xtwitter.svg" alt="" />
              </button>
            </Link>
            <Link href={"/"}>
              <button className=" w-[40px] h-[40px] p-[10px] rounded-full bg-white border border-gray-400">
                <img src="/tel.svg" alt="" />
              </button>
            </Link>
          </div>
          <p className=" text-center text-sm mt-16">
            &copy; 2025 THE COOL ROOM. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
