import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import {TypewriterEffectSmooth} from "@/components/ui/typewriter-effect";
import Stats from "@/components/Stats";
import {client} from "../../sanity/lib/client";

type HeaderData = {
    description: string,
    productssold: number,
    customers: number
}

const Hero = async () => {
    const words = [
        {
            text: "ChairStore",
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

    const data: HeaderData = (await client.fetch('*[_type == "header"]'))[0]

    return (
        <header className="h-screen w-full relative flex flex-col items-center justify-center antialiased">
            <div className="mx-auto p-4">
                <h1 className="relative z-10 text-5xl md:text-6xl xl:text-8xl text-white text-center font-poppins font-bold">
                    ChairStore
                </h1>
                <p></p>
                <p className="text-gray-300 max-w-2xl mx-auto my-2 text-sm md:text-base text-center relative z-10">
                    {data.description}
                </p>
                <div className="flex justify-center items-center">
                    <TypewriterEffectSmooth words={words} />
                </div>
                <div className="flex justify-center">
                    <Stats data={data} />
                </div>
            </div>
            <BackgroundBeams />
        </header>
    );
}

export default Hero
