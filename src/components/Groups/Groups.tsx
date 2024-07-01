"use client"

import Script from "next/script";
import Image from "next/image";
import {GroupInfo} from "@/lib/groups";
import {Card, CardContent} from "@/components/ui/card";

// const Groups = () => {
const Groups = ({ groups }: { groups: GroupInfo[]}) => {
    return (
        <div className="my-16" id="products">
            <h3 className="text-4xl md:text-6xl font-bold text-gray-100 text-center font-poppins">Products</h3>
            
            <div
                className="grid grid-cols-3 md:grid-cols-4 gap-y-10 py-10 px-10 max-w-7xl mx-auto"
            >
                <Script src="https://cdn.sellix.io/static/js/embed.js" strategy="beforeInteractive"/>
                <link href="https://cdn.sellix.io/static/css/embed.css" rel="stylesheet"/>

                {groups.map((item) => (
                    <button 
                        data-sellix-group={item.uniqid}
                        type="submit"
                        className="flex flex-col w-5/6 border border-slate-200/70 rounded-lg opacity-80 hover:opacity-100 transition duration-300 ease-in-out overflow-hidden"
                    >
                        <div>
                            <Image className="rounded-t-lg scale-110 object-fill" src={`https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/${item.cloudflare_image_id}/shopitem`} alt="image" width={1024} height={1024} />
                        </div>
                        <div className="flex flex-col gap-1.5 w-full bg-[#161618] text-left pl-2.5 py-4 rounded-b-lg">
                            <h4 className="text-white font-semibold"> 
                            {item.title}
                            </h4>
                            <p className="text-slate-200 text-sm">
                                From ${item.products_bound[0].price_display} - ${item.products_bound[item.products_bound.length - 1].price_display}
                            </p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Groups