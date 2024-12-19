"use client"

import React from "react";
import {
  Github,
  Linkedin,
  Globe,
  Terminal,
} from "lucide-react";
import { SiHackerrank, SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const SocialGlobe = () => {

  return (
    <div 
    style={{
        backgroundImage: `url('/images/pic)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    className="h-screen flex text-white items-center justify-center ">
        <div className="mt-10">
          <div className="grid grid-cols-3 border-2 border-white p-8 rounded-lg gap-10">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <Github className="h-[100px] w-[100px]" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-[70px] w-[70px]" />
            </a>
            <a href="https://yourblog.com" target="_blank" rel="noopener noreferrer">
              <Globe className="h-[70px] w-[70px]" />
            </a>
            <a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer">
              <SiHackerrank className="h-[70px] w-[70px]" />
            </a>
            <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
              <SiLeetcode className="h-[70px] w-[70px]" />
            </a>
            <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer">
              <SiGeeksforgeeks className="h-[70px] w-[70px]" />
            </a>
            <a href="https://www.codingninjas.com/" target="_blank" rel="noopener noreferrer">
              <Terminal className="h-[70px] w-[70px]" />
            </a>
          </div>
        </div>
    </div>
  );
};

export default SocialGlobe;
