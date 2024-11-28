"use client"
import React, { useState } from 'react'
import Header from './header'
import Image from 'next/image'
import Trailers from './trailers'
import { Button } from './ui/button'

const Hero = () => {
    const [activeInput, setActiveInput] = useState<boolean>(false);
  return (
    <div className='hero'>
        <Header />
        <div className='flex lg:flex-row flex-col w-full min-h-screen items-center justify-between md:px-24 px-16'>
            {/* Left */}
            <div className='lg:w-1/2 w-full flex flex-col gap-6 mt-20 lg:mt-0'>
                <h2 className='lg:text-7xl text-3xl font-semibold lg:text-left text-center lg:block hidden'>Engaging <br /> Videos in just <br/><span className='text-blue-500'>one button click</span></h2>
                <h2 className='lg:hidden block text-4xl font-medium text-center mt-4 mb-1'>Engaging Videos in just <span className='text-blue-500'>one button click</span></h2>
                <p className='text-xl text-slate-600'>Turn any topic into a high quality video, optimized for social media engagement. Creating viral videos has never been easier.</p>
                <div
                    className={`rounded-full pl-3 pr-1 flex items-center justify-between bg-white shadow-lg py-3 w-full border border-slate-300 lg:w-4/5 transition-all duration-500 ease-in-out mt-4 ${
                        activeInput ? "shadow-lg shadow-gray-200 border-blue-500" : ""
                    }`}
                    >
                    <input
                        type="text"
                        placeholder="Enter your email address..."
                        onFocus={() => setActiveInput(true)}
                        onBlur={() => setActiveInput(false)}
                        className="outline-none h-[40px] bg-transparent w-9/12 placeholder:font-normal placeholder:text-xl px-4"
                    />
                    <Button className="rounded-full text-xl font-montserrat bg-blue-500 hover:bg-blue-500/80 !py-4" size={"lg"}>Join Waitlist</Button>
                </div>

                <p className='text-lg text-slate-600'>for an <span className='font-medium'>exlusive early access</span> and discounts.</p>
                <div className='bg-powder'></div>
            </div>
            {/* Right */}
            <div className='flex items-center justify-center py-8 lg:w-1/2 w-full hero-right'>
                <Image src={"/phone.png"} alt='Phone' className='lg:w-1/2 w-2/5' width={300} height={200}/>
            </div>
        </div>
        <Trailers />
    </div>
  )
}

export default Hero;
