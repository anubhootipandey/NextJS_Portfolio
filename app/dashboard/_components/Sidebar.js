// import Image from 'next/image';
import React from "react";
import { Button } from "../../..//components/ui/button";
import {
  GraduationCap,
  FileText,
  Users,
  Briefcase,
  Code,
  Info,
  Phone,
  User,
  Clipboard,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="h-screen text-gray-400 p-7">
      <div className="flex gap-3 items-center">
        <div className="bg-gray-200 w-[45px] h-[45px] p-1 flex justify-center items-center rounded-full ">
          <Image src="/images/pic.png" alt='logo' width={170} height={120} />
        </div>
        <div>
          <h1 className="text-white">Anubhooti Pandey</h1>
          <p className="text-sm">Frontend Developer</p>
        </div>
      </div>

      <div className="mt-10 text-sm">
        <Button className="w-full text-black hover:bg-yellow-300 bg-yellow-200">
          <Clipboard />
          Download Resume
        </Button>

        <Link href="/dashboard/about" passHref>
          <div className="flex gap-2 items-center p-3 mt-4 hover:bg-slate-900 rounded-lg cursor-pointer">
            <Info />
            <h2>About</h2>
          </div>
        </Link>
        <Link href="/dashboard/education" passHref>
          <div className="flex gap-2 items-center p-3 mt-1 hover:bg-slate-900 rounded-lg cursor-pointer">
            <GraduationCap />
            <h2>Education</h2>
          </div>
        </Link>
        <Link href="/dashboard/skills" passHref>
          <div className="flex gap-2 items-center p-3 mt-1 hover:bg-slate-900 rounded-lg cursor-pointer">
            <Users />
            <h2>Skills</h2>
          </div>
        </Link>
        <Link href="/dashboard/projects" passHref>
          <div className="flex gap-2 items-center p-3 mt-1 hover:bg-slate-900 rounded-lg cursor-pointer">
            <Code />
            <h2>Projects</h2>
          </div>
        </Link>
        <Link href="/dashboard/work-experience" passHref>
        <div className="flex gap-2 items-center p-3 mt-1 hover:bg-slate-900 rounded-lg cursor-pointer">
          <Briefcase />
          <h2>Work Experience</h2>
        </div>
        </Link>
        <Link href="/dashboard/certifications" passHref>
        <div className="flex gap-2 items-center p-3 mt-1 hover:bg-slate-900 rounded-lg cursor-pointer">
          <FileText />
          <h2>Certifications</h2>
        </div>
        </Link>
        <Link href="/dashboard/contact" passHref>
        <div className="flex gap-2 items-center p-3 mt-1 hover:bg-slate-900 rounded-lg cursor-pointer">
          <Phone />
          <h2>Contact</h2>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
