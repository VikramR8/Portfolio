import VR from "../assets/VR.png"
import React from "react"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => 
{
  return (
    <nav className="mb-100 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center ">
        <img src={VR} alt="logo" className="h-32 w-32"/>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <div className="hover:text-cyan-500"><a href="https://github.com/VikramR8" target="blank"><FaGithub /></a></div>
       <div className="hover:text-cyan-500"><a href="https://www.linkedin.com/in/vikramaditya-reshmi-b9867a2b8/" target="blank"><FaLinkedin/></a></div>
       <div className="hover:text-cyan-500"><a href="https://x.com/vikky8_tweets" target="blank"><FaSquareXTwitter/></a></div>
       <div className="hover:text-cyan-500"><a href="https://www.instagram.com/vikky._.8/" target="blank"><FaInstagram/></a></div>
      </div>
    </nav>
  );
}

export default Navbar;
