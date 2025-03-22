"use client";
import Image from "next/image";
import localFont from "next/font/local";
import bg from "../public/ice.jpg";
import Link from "next/link";
import SnowStorm from "react-snowstorm";

const myFont = localFont({ src: "../public/fonts/Icekingdom.ttf" });
export default function Home() {
  return (
    <>
      <nav className=" absolute top-0 left-0 w-full z-50 px-5 md:px-12 lg:px-24 py-3 flex justify-between items-center">
        <img src="/frost.png" alt="" className=" w-16" />
        <div className=" flex items-center gap-x-3">
          <Link href={"http://x.com/coolisthecoin"}>
            <button className=" w-[50px] h-[50px] p-[10px] hover:bg-lightBlue rounded-full bg-white border border-gray-400">
              <img src="/xtwitter.svg" alt="" />
            </button>
          </Link>
        </div>
      </nav>
      <section className=" relative flex justify-center items-center h-screen md:h-fit ">
        <SnowStorm  excludeMobile={false} />
        <div className=" w-full h-full absolute top-0 left-0">
          {/* <div className=" absolute bg-black w-full h-full opacity-45"/> */}
          <img
            src="/tcr-bg.jpg"
            alt=""
            className=" w-full h-screen md:h-full object-cover"
          />
        </div>
        <div className=" md:py-80">
        <h1
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
          }}
          className={` ${myFont.className} head text-7xl md:text-8xl lg:text-9xl text-center relative `}
        >
          The Cool Room
        </h1>
        </div>
      </section>
      <section className=" px-5 py-16  md:px-12 lg:px-24">
        <div className=" md:flex md:justify-between md:items-center md:gap-x-5 lg:justify-center lg:gap-x-24">
        <div className=" md:max-w-[40%]">
          <img src="/tcr.jpg" alt="" className=" rounded-md max-w-[380px] md:max-w-full  mx-auto md:mx-0" />
        </div>
        <div className=" text-center md:text-left mt-5">
          <h2 className={` ${myFont.className} text-deepBlue text-5xl `}>
            About $COOL
          </h2>
          <p className=" text-bgBlue mt-3 max-w-[400px] mx-auto">
            The coolest community coin in history. If someone is $cool, send
            them $cool using BankrBot. If you're cool, hold $cool. It's that
            easy. The $cool token is too cool for Telegram. To join the private
            group chat on X, send a message to @boredelonmusk
          </p>
          <div className=" flex items-center gap-x-3 justify-center md:justify-start">
            <Link href={"https://app.uniswap.org/explore/tokens/base/0x3080ce06eee2869e1b0287ad0de73f9421f977a3"} className="">
              <button className=" border border-lightBlue hover:bg-transparent hover:text-lightBlue bg-lightBlue w-[140px] py-2 rounded-md  mt-5 text-white font-medium">
                Buy Now
              </button>
            </Link>
            <Link href={"http://x.com/coolisthecoin"} className="">
              <button className=" border border-deepBlue hover:bg-transparent hover:text-deepBlue bg-deepBlue w-[140px] py-2 rounded-md  mt-5 text-white font-medium">
                Join X
              </button>
            </Link>
          </div>
        </div>
        </div>
      </section>
      <footer className=" bg-bgBlue py-20">
        <div className=" flex flex-col justify-center items-center text-white">
          <img src="/frost-white.png" alt="" className=" w-28" />
          <div className=" flex items-center gap-x-3 mt-5">
            <Link href={"http://x.com/coolisthecoin"}>
              <button className=" w-[40px] h-[40px] p-[10px] hover:bg-lightBlue rounded-full bg-white border border-gray-400">
                <img src="/xtwitter.svg" alt="" />
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
