"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import {TypewriterEffectSmooth} from "@/components/ui/typewriter-effect";
import Stats from "@/components/Stats";

const Hero = () => {
    const words = [
        {
            text: "Chairstore",
            className: "text-blue-500 dark:text-blue-500"
        },
        {
            text: "has",
        },
        {
            text: "your",
        },
        {
            text: "back!",
        },
    ];

    return (
        <header className="h-screen w-full relative flex flex-col items-center justify-center antialiased">
            <div className="mx-auto p-4">
                <h1 className="relative z-10 text-5xl md:text-6xl xl:text-8xl text-white text-center font-poppins font-bold">
                    ChairStore
                </h1>
                <p></p>
                <p className="text-gray-300 max-w-2xl mx-auto my-2 text-sm md:text-base text-center relative z-10">
                    Welcome to ChairStore, dedicated resellers that are devoted to our
                    customer&apos;s satisfaction. We provide the best cheats on the market
                    to give you an edge against your opponents and make your games easier
                    to win.
                </p>
                <div className="flex justify-center items-center">
                    <TypewriterEffectSmooth words={words} className="text-blue-500" />
                </div>
                <div className="flex justify-center items-center">
                    <Stats />
                </div>
            </div>
            <BackgroundBeams />
        </header>
    );
}

export default Hero
