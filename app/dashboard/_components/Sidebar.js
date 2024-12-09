// import Image from 'next/image';
import React from 'react';
import { Button } from '../../..//components/ui/button';
import { BookAIcon, Layout, Phone, Shield, UsersRoundIcon } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className='h-screen text-gray-400 p-7'>
        {/* <Image src={'/logo.svg'} alt='logo' width={170} height={120} /> */}
        <div className='flex gap-3 items-center'>
        <div className='bg-gray-200 w-[45px] h-[45px] p-2 flex justify-center items-center rounded-full '>
        <UsersRoundIcon className='h-12 w-12 text-black' />
        </div>
        <div>
        <h1 className='text-white'>Anubhooti Pandey</h1>
        <p className='text-sm'>Frontend Developer</p>
        </div>
        </div>

        <div className='mt-10 text-sm'>
            <Button className='w-full text-black hover:bg-yellow-300 bg-yellow-200'>Download Resume</Button>

            <div className='flex gap-2 items-center p-3 mt-4 hover:bg-slate-900 rounded-lg cursor-pointer'>
                <Layout />
                <h2>About</h2>
            </div>
            <div className='flex gap-2 items-center p-3 mt-1 hover:bg-slate-900 rounded-lg cursor-pointer'>
                <BookAIcon />
                <h2>Education</h2>
            </div>
            <div className='flex gap-2 items-center p-3 mt-1 hover:bg-slate-900 rounded-lg cursor-pointer'>
                <Layout />
                <h2>Skills</h2>
            </div>
            <div className='flex gap-2 items-center p-3 mt-1 hover:bg-slate-900 rounded-lg cursor-pointer'>
                <Layout />
                <h2>Projects</h2>
            </div>
            <div className='flex gap-2 items-center p-3 mt-1 hover:bg-slate-900 rounded-lg cursor-pointer'>
                <Layout />
                <h2>Work Experience</h2>
            </div>
            <div className='flex gap-2 items-center p-3 mt-1 hover:bg-slate-900 rounded-lg cursor-pointer'>
                <Shield />
                <h2>Certifications</h2>
            </div>
            <div className='flex gap-2 items-center p-3 mt-1 hover:bg-slate-900 rounded-lg cursor-pointer'>
                <Phone />
                <h2>Contact</h2>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;