import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Facebook, Instagram, Twitter, Twitch } from "lucide-react"

const Footer = () => {
  return (
    <div className='min-h-[60vh] bg-gray-800 relative md:px-24 px-16 border border-y-[#f2f6fb] border-x-transparent'>
        <div className='style-customShapeDivider-ey9uI'>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="style_shapeFill__IxDmE"></path></svg>
        </div>
        <div className='w-full mt-28 text-white flex flex-col gap-6'>
            <Image src={"/footer-logo.svg"} alt='' width={150} height={150}/>
            <h2>Soutle is a software product by <Link href={"/"}>Aptiw Inc.</Link></h2>
            <div className='flex flex-row gap-8 my-4'>
                <Facebook className='border rounded-full border-white p-2 cursor-pointer' size={35}/>
                <Twitter className='border rounded-full border-white p-2 cursor-pointer' size={35} />
                <Instagram className='border rounded-full border-white p-2 cursor-pointer' size={35} />
                <Twitch className='border rounded-full border-white p-2 cursor-pointer' size={35} />
            </div>
            <div className='grid lg:grid-cols-7 md:grid-cols-4 grid-cols-3 gap-8'>
                <p>How it works</p>
                <p>FAQs</p>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Disclaimer</p>
                <p>Samples</p>
                <p>Join the Waitlist</p>
            </div>
            <div className='h-[1px] w-full bg-white'></div>
            <p>
                &copy; 2024 Aptiw, Inc
            </p>
        </div>
    </div>
  )
}

export default Footer
