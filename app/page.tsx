"use client";

import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Page() {
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)

    return () => clearTimeout(timer);
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth"});
  };


  return (
    <div className="">
      {/* Nav bar */}
      <div className="bg-gradient-to-b from-[#ec5c2c] to-[#ff9414] min-w-full flex flex-row gap-10 justify-center sticky top-0 text-white font-bold">
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("trailer")}>Trailer</button>
        <button onClick={() => scrollToSection("cast")}>Cast</button>
        <button onClick={() => scrollToSection("theater")}>Theater</button>
        <h1>Test</h1>
        <h2>Test</h2>
      </div>
    
      {/* Banner */}
      <div id="home" className="min-h-[100vh] bg-[#e8dccc] flex flex-col justify-center items-center">
        <h1 className='font-bold text-9xl pt-4'>Single8</h1>
        <Image
          src="/single8-logo.png"
          className=""
          alt="single8 logo"
          width={475}
          height={475}
        />
        <h2 className='font-bold'>Yu Uemura, Akari Takaishi, Nozomi Fukuzawa (WATWING), Ryuta Kuwayama (WATWING), TakujiKawakubo , Ryuuki Kitaoka, Yusuke Sato (lol), Narimi Arimori</h2>
        <h2 className='font-bold'>Director and scriptwriter: Kazuya Konaka</h2>
      </div>

      {/* Trailer */}
      <div id="trailer" className='min-h-[100vh] bg-[#ff9414]'>
        <h1 className="text-white text-6xl font-bold text-center pt-4">Trailer</h1>
        <div className="flex flex-col justify-center items-center pt-6">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/lkAU8t3r1NA?si=j3cD_it15-WPh-Ia" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
      </div>

      {/* Cast */}
      <div id="cast" className='min-h-screen bg-[#080404]'>
        <h1 className='text-[#ec5c2c] text-6xl font-bold text-center pt-4'>Cast</h1>
      </div>
    </div>
  );
}
