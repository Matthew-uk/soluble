"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
    console.log("Scroll Position:", window.scrollY); // Logs current scroll position
  };

  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup to avoid memory leaks
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`w-full h-[80px] px-12 flex flex-row items-center justify-between transition-all ease-in-out duration-100 ${scrollPosition > 10 ? "fixed-nav" : "absolute"}`}>
      <Image
        src={"/logo.svg"}
        alt="Soulte"
        width={32}
        height={32}
        className="w-[100px] h-[40px]"
      />
      <div className={`flex flex-row gap-6 ${scrollPosition > 10 && "font-medium"}`}>
        <p className="hover:text-blue-300 cursor-pointer duration-150 ease-in-out transition-all text-lg font-montserrat">How it works</p>
        <p className="hover:text-blue-300 cursor-pointer duration-150 ease-in-out transition-all text-lg font-montserrat">FAQs</p>
      </div>
      {/* <p>Scroll Position: {scrollPosition}px</p> Show current scroll position */}
    </header>
  );
};

export default Header;
