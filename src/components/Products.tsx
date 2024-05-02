"use client"

import {HoverEffect} from "@/components/ui/card-hover-effect";

const Products = () => {
    const projects = [
        {
            title: "Klar Lite — Day",
            description:
                "A technology company that builds economic infrastructure for the internet.",
            slug: "/r6-lite-day",
            image: "https://imagedelivery.net/A5gbiev6F8AaBvp6M146Kw/176b5aa4-59c7-4840-2a30-f533cf31d300/w=500",
        },
        {
            title: "Klar Lite — Week",
            description:
                "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
            slug: "/r6-lite-week",
            image: "https://imagedelivery.net/A5gbiev6F8AaBvp6M146Kw/176b5aa4-59c7-4840-2a30-f533cf31d300/w=500",
        },
        {
            title: "Klar Lite — Month",
            description:
                "A multinational technology company that specializes in Internet-related services and products.",
            slug: "/r6-lite-month",
            image: "https://imagedelivery.net/A5gbiev6F8AaBvp6M146Kw/176b5aa4-59c7-4840-2a30-f533cf31d300/w=500",
        },
        {
            title: "Klar Full — Day",
            description:
                "A technology company that builds economic infrastructure for the internet.",
            slug: "/r6-full-day",
            image: "https://imagedelivery.net/A5gbiev6F8AaBvp6M146Kw/c7671f87-e1c2-42a3-5eed-031bc312cf00/w=500",
        },
        {
            title: "Klar Full — Week",
            description:
                "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
            slug: "/r6-full-week",
            image: "https://imagedelivery.net/A5gbiev6F8AaBvp6M146Kw/c7671f87-e1c2-42a3-5eed-031bc312cf00/w=500",
        },
        {
            title: "Klar Full — Month",
            description:
                "A multinational technology company that specializes in Internet-related services and products.",
            slug: "/r6-full-month",
            image: "https://imagedelivery.net/A5gbiev6F8AaBvp6M146Kw/c7671f87-e1c2-42a3-5eed-031bc312cf00/w=500",
        },
        {
            title: "Vall Full — Day",
            description:
                "A technology company that builds economic infrastructure for the internet.",
            slug: "/val-full-day",
            image: "https://imagedelivery.net/A5gbiev6F8AaBvp6M146Kw/a67fa279-6f64-4b1a-cd94-b983d1aac300/w=500",
        },
        {
            title: "Vall Full — Week",
            description:
                "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
            slug: "/val-full-week",
            image: "https://imagedelivery.net/A5gbiev6F8AaBvp6M146Kw/a67fa279-6f64-4b1a-cd94-b983d1aac300/w=500",
        },
        {
            title: "Vall Full — Month",
            description:
                "A multinational technology company that specializes in Internet-related services and products.",
            slug: "/val-full-month",
            image: "https://imagedelivery.net/A5gbiev6F8AaBvp6M146Kw/a67fa279-6f64-4b1a-cd94-b983d1aac300/w=500",
        },
    ];

    return (
        <div className="bg-neutral-950 dark">
            <div className="max-w-6xl mx-auto px-8">
                <HoverEffect items={projects}/>
            </div>
        </div>
    )
}

export default Products