"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IoHomeSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IoHomeSharp size={20} className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <FaUserAlt className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <FaMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="  ">
      <FloatingNav navItems={navItems} />
      {/* <DummyContent /> */}
    </div>
  );
}

