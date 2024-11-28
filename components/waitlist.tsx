"use client";
import React, { useState } from 'react'
import { Button } from './ui/button';

const Waitlist = () => {
    const [activeInput, setActiveInput] = useState<boolean>(false);
  return (
    <div className='min-h-[60vh] flex flex-col items-center justify-center'>
        <h2 className='font-montserrat text-center text-2xl md:text-3xl font-semibold'>Join the Waitlist Now for an Exclusive <br/>Early Access!</h2>
        <div
            className={`rounded-full pl-3 pr-1 flex items-center justify-between bg-white shadow-lg py-3 w-3/4 border border-slate-300 lg:w-7/12 transition-all duration-200 ease-in-out mt-6 ${
                activeInput ? "shadow-lg shadow-gray-200 border-blue-500" : ""
            }`}
            >
            <input
                type="text"
                placeholder="Enter your email address..."
                onFocus={() => setActiveInput(true)}
                onBlur={() => setActiveInput(false)}
                className="outline-none h-[40px] bg-transparent w-9/12 placeholder:font-normal md:placeholder:text-xl placeholder:text-lg px-4"
            />
            <Button className="rounded-full text-lg md:text-2xl font-montserrat bg-blue-500 hover:bg-blue-500/80 !py-4 tracking-tight" size={"xl"}>Join Waitlist</Button>
        </div>
    </div>
  )
}

export default Waitlist
