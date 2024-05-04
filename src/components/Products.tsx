"use client"

import {ProductCards} from "@/components/ui/card-hover-effect";

const Products = () => {
    const projects = [
        {
            title: "Klar Lite — Day",
            description: "A 24 hour subscription to our Rainbow Six Siege ESP cheat.",
            slug: "/r6-lite-day",
            image: "https://imagedelivery.net/A5gbiev6F8AaBvp6M146Kw/176b5aa4-59c7-4840-2a30-f533cf31d300/w=500",
        },
        {
            title: "Klar Lite — Week",
            description: "A 7 day subscription to our Rainbow Six Siege ESP cheat.",
            slug: "/r6-lite-week",
            image: "https://imagedelivery.net/A5gbiev6F8AaBvp6M146Kw/176b5aa4-59c7-4840-2a30-f533cf31d300/w=500",
        },
        {
            title: "Klar Lite — Month",
            description: "A 30 day subscription to our Rainbow Six Siege ESP cheat.",
            slug: "/r6-lite-month",
            image: "https://imagedelivery.net/A5gbiev6F8AaBvp6M146Kw/176b5aa4-59c7-4840-2a30-f533cf31d300/w=500",
        },
        {
            title: "Klar Full — Day",
            description: "A 24 hour subscription to our Rainbow Six Siege rage cheat.",
            slug: "/r6-full-day",
            image: "https://imagedelivery.net/A5gbiev6F8AaBvp6M146Kw/c7671f87-e1c2-42a3-5eed-031bc312cf00/w=500",
        },
        {
            title: "Klar Full — Week",
            description: "A 7 day subscription to our Rainbow Six Siege rage cheat.",
            slug: "/r6-full-week",
            image: "https://imagedelivery.net/A5gbiev6F8AaBvp6M146Kw/c7671f87-e1c2-42a3-5eed-031bc312cf00/w=500",
        },
        {
            title: "Klar Full — Month",
            description: "A 30 day subscription to our Rainbow Six Siege rage cheat.",
            slug: "/r6-full-month",
            image: "https://imagedelivery.net/A5gbiev6F8AaBvp6M146Kw/c7671f87-e1c2-42a3-5eed-031bc312cf00/w=500",
        },
        {
            title: "Vall Full — Day",
            description: "A 24 hour subscription to our Valorant cheat.",
            slug: "/val-full-day",
            image: "https://imagedelivery.net/A5gbiev6F8AaBvp6M146Kw/a67fa279-6f64-4b1a-cd94-b983d1aac300/w=500",
        },
        {
            title: "Vall Full — Week",
            description: "A 7 day subscription to our Valorant cheat.",
            slug: "/val-full-week",
            image: "https://imagedelivery.net/A5gbiev6F8AaBvp6M146Kw/a67fa279-6f64-4b1a-cd94-b983d1aac300/w=500",
        },
        {
            title: "Vall Full — Month",
            description: "A 30 day subscription to our Valorant cheat.",
            slug: "/val-full-month",
            image: "https://imagedelivery.net/A5gbiev6F8AaBvp6M146Kw/a67fa279-6f64-4b1a-cd94-b983d1aac300/w=500",
        },
    ];

    return (
        <div className="my-16" id="products">
            <h3 className="text-4xl md:text-6xl font-bold text-gray-100 text-center font-poppins">Products</h3>
            <div className="mx-auto max-w-6xl px-8">
                <ProductCards items={projects}/>
            </div>
        </div>
    )
}

export default Products