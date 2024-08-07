"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col items-center">
      <ContainerScroll
        titleComponent={
          <>
           <div className=" text-center px-4 pb-7">
         

        <h1  className="text-5xl sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-[#FFB727] to-[#FFB727] py-8">
          Welcome to ChainTickets
        </h1>
        <p className="text-xl sm:text-3xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-[#F4F3F3] to-[#ffffff] py-4">
          A cutting-edge ticketing system, where blockchain technology meets event ticketing for unparalleled security and transparency.
        </p>

        <button className=" max-w-fit text-sm font-semibold bg-[#FFB727] relative  text-[#080B2C]  px-8 py-3 my-1 rounded-xl  cursor-not-allowed">
          <span>Coming soon</span>
        </button>
      </div>
          </>
        }
      >

        
        <Image
          src={`/img/main.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={true}
        />
      </ContainerScroll>

  
    </div>
  );
}
