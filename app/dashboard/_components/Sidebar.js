import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../../..//components/ui/button";
import {
  GraduationCap,
  FileText,
  Users,
  Briefcase,
  Code,
  Info,
  Phone,
  Clipboard,
  Menu,
  X
} from "lucide-react";
import { SiGnusocial } from "react-icons/si";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="md:hidden flex items-center p-4">
        <button onClick={toggleSidebar} className="text-gray-400 focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`fixed md:relative top-0 left-0 w-64 bg-black h-full z-50 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {isOpen && (
          <button
            onClick={toggleSidebar}
            className="absolute -right-10 top-5 bg-gray-800 p-2 rounded-full text-white focus:outline-none"
          >
            <X size={28} />
          </button>
        )}
        <div className="h-screen text-gray-400 p-7">
          <div className="flex gap-3 items-center">
            <div className="bg-gray-200 w-[45px] h-[45px] p-1 flex justify-center items-center rounded-full ">
              <Image
                src="/images/pic.jpg"
                className="rounded-full"
                alt="logo"
                width={170}
                height={120}
              />
            </div>
            <div>
              <h1 className="text-white">Anubhooti Pandey</h1>
              <p className="text-sm">Frontend Developer</p>
            </div>
          </div>

          <div className="mt-10 text-sm">
            <Link href="/dashboard/resume" passHref>
              <Button className="w-full text-black hover:bg-yellow-300 bg-yellow-200">
                <Clipboard /> Download Resume
              </Button>
            </Link>
            <Link href="/dashboard/about" passHref>
              <div className="flex gap-2 items-center p-3 mt-4 hover:bg-slate-900 rounded-lg cursor-pointer">
                <Info /> <h2>About</h2>
              </div>
            </Link>
            <Link href="/dashboard/education" passHref>
              <div className="flex gap-2 items-center p-3 mt-1 hover:bg-slate-900 rounded-lg cursor-pointer">
                <GraduationCap /> <h2>Education</h2>
              </div>
            </Link>
            <Link href="/dashboard/skills" passHref>
              <div className="flex gap-2 items-center p-3 mt-1 hover:bg-slate-900 rounded-lg cursor-pointer">
                <Users /> <h2>Skills</h2>
              </div>
            </Link>
            <Link href="/dashboard/projects" passHref>
              <div className="flex gap-2 items-center p-3 mt-1 hover:bg-slate-900 rounded-lg cursor-pointer">
                <Code /> <h2>Projects</h2>
              </div>
            </Link>
            <Link href="/dashboard/work-experience" passHref>
              <div className="flex gap-2 items-center p-3 mt-1 hover:bg-slate-900 rounded-lg cursor-pointer">
                <Briefcase /> <h2>Work Experience</h2>
              </div>
            </Link>
            <Link href="/dashboard/certifications" passHref>
              <div className="flex gap-2 items-center p-3 mt-1 hover:bg-slate-900 rounded-lg cursor-pointer">
                <FileText /> <h2>Certifications & Achievements</h2>
              </div>
            </Link>
            <Link href="/dashboard/contact" passHref>
              <div className="flex gap-2 items-center p-3 mt-1 hover:bg-slate-900 rounded-lg cursor-pointer">
                <Phone /> <h2>Contact</h2>
              </div>
            </Link>
            <Link href="/dashboard/socials" passHref>
              <div className="flex gap-2 items-center p-3 mt-1 hover:bg-slate-900 rounded-lg cursor-pointer">
                <SiGnusocial /> <h2>Socials</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
