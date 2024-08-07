import React from "react";
import { motion, useInView } from "framer-motion";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


export function Footer() {
 
  return (
    <footer className="footer footer-center  text-base-content p-4 pt-10">
    <aside>
      <p>Copyright © {new Date().getFullYear()} - All right ChainLabs</p>
    </aside>
  </footer>
   
  );
}
