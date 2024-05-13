"use client"

import {Star} from "lucide-react";
import CountUp from "react-countup";

const Stats = () => {
    return (
        <div className="z-10 mt-12 stats shadow bg-neutral-900">
            <div className="flex flex-col stat justify-center items-center w-[30dvh]">
                <div className="stat-title text-gray-400">Products Sold</div>
                <div className="stat-value text-gray-200">
                    <CountUp end={14.3} decimals={1} decimal="." suffix="K+" />
                </div>
            </div>

            <div className="flex flex-col stat justify-center items-center w-[30dvh]">
                <div className="stat-title text-gray-400">Customers</div>
                <div className="stat-value text-gray-200">
                    <CountUp end={745} suffix="+" />
                </div>
            </div>

            <div className="flex flex-col stat justify-center items-center w-[30dvh]">
                <div className="stat-title text-gray-400">Reviews</div>
                <div className="stat-value flex gap-2.5">
                    <Star className="my-auto text-amber-400 fill-amber-400" />
                    <span className="text-gray-200">
                        <CountUp end={5} />
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Stats
