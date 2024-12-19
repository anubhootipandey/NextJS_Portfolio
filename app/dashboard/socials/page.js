"use client"

import React from "react";
import {
  Github,
  Linkedin,
  Globe,
  Terminal,
} from "lucide-react";
import { SiHackerrank, SiLeetcode } from "react-icons/si";

const SocialGlobe = () => {

  return (
    <div
    className="h-screen flex text-white items-center justify-center ">
          <div className="grid grid-cols-3 p-8 gap-10">
            <a href="https://github.com/anubhootipandey/" className="bg-gray-900 p-8 rounded-full" target="_blank" rel="noopener noreferrer">
              <Github className="h-[70px] w-[70px]" />
            </a>
            <a href="https://www.linkedin.com/in/anubhooti-pandey-418063228/" className="bg-gray-900 p-8 rounded-full" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-[70px] w-[70px]" />
            </a>
            <a href="https://medium.com/@anubhootipandey/" className="bg-gray-900 p-8 rounded-full" target="_blank" rel="noopener noreferrer">
              <Globe className="h-[70px] w-[70px]" />
            </a>
            <a href="https://www.hackerrank.com/profile/anubhootipandey1/" className="bg-gray-900 p-8 rounded-full" target="_blank" rel="noopener noreferrer">
              <SiHackerrank className="h-[70px] w-[70px]" />
            </a>
            <a href="https://leetcode.com/u/ap-05//" className="bg-gray-900 p-8 rounded-full" target="_blank" rel="noopener noreferrer">
              <SiLeetcode className="h-[70px] w-[70px]" />
            </a>
            <a href="https://www.naukri.com/code360/profile/d9f25dc0-b782-4269-ac04-946b3d1f860f/" className="bg-gray-900 p-8 rounded-full" target="_blank" rel="noopener noreferrer">
              <Terminal className="h-[70px] w-[70px]" />
            </a>
          </div>
    </div>
  );
};

export default SocialGlobe;
