"use client"

import React from "react";

import { AnimatePresence, motion } from "framer-motion";

const RevealCard = ({
                        title,
                        description,
                        icon,
                        children,
                    }: {
    title: string;
    description?: string,
    icon: React.ReactNode;
    children?: React.ReactNode;
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border group/canvas-card flex items-center justify-center border-white/[0.2] mx-auto p-4 relative max-w-sm w-full h-[30rem]"
        >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 text-gray-50" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-gray-50" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 text-gray-50" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-gray-50" />

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-20">
                <div
                    className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
                    {icon}
                </div>
                <div className="justify-center text-center">
                    <h2 className="text-gray-100 text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 font-bold group-hover/canvas-card:text-gray-50 group-hover/canvas-card:-translate-y-2 transition duration-200">
                        {title}
                    </h2>
                    <p className="text-gray-400 text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 group-hover/canvas-card:text-gray-50 group-hover/canvas-card:-translate-y-2 transition duration-200">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export const Icon = ({className, ...rest}: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={className}
            {...rest}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"/>
        </svg>
    );
};

export default RevealCard