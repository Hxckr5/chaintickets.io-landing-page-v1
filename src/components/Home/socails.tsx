import React from "react";
import { motion, useInView } from "framer-motion";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


export function Socails() {
 
  return (
    <div className="pt-4 flex flex-col justify-center items-center">
      <h1 className="text-4xl sm:text-6xl font-bold text-[#FFB727] py-6 ">
        Our socails
      </h1>

<div className="grid items-center grid-cols-4 gap-8 text-[#F4F3F3] p-4 ">
<BsTwitterX size={50} className=" cursor-pointer hover:text-[#a6a6a6] " />
<BsInstagram size={50} className=" cursor-pointer hover:text-[#a6a6a6]" />
<FaTelegram size={50} className=" cursor-pointer hover:text-[#a6a6a6]" />
<FaGithub size={50} className=" cursor-pointer hover:text-[#a6a6a6]" />


</div>
   
    </div>
  );
}
