import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {ReactNode, useState} from "react";
import Image from "next/image";

export const ProductCards = ({
                                items,
                                className,
                            }: {
    items: {
        title: string;
        description: string;
        slug: string;
        image: string;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-2 md:grid-cols-3 py-10 px-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <Link
                    href={`https://chairstore.vip/product${item?.slug}`}
                    key={item?.slug}
                    className="relative group block p-2 h-[90%] w-[90%]"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full aspect-square bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{opacity: 0}}
                                animate={{
                                    opacity: 1,
                                    transition: {duration: 0.15},
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: {duration: 0.15, delay: 0.2},
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card image={item.image}>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export const Card = ({
                        image,
                        className,
                        children,
                     }: {
    image: string;
    className?: string;
    children: ReactNode;
}) => {
    return (
        <section
            className={cn(
                "group rounded-2xl w-[90%] h-[90%] aspect-square overflow-hidden border border-transparent dark:border-white/[0.2] relative z-20",
                className
            )}
        >
            <Image src={image} alt="Product Image" width={256} height={256} className="absolute object-cover w-full h-full group-hover:opacity-50 bg-neutral-950" />
            <div className="relative z-50 opacity-0 group-hover:opacity-100 duration-500">
                <div className="p-4">
                    {children}
                </div>
            </div>
        </section>
    );
};
export const CardTitle = ({
                              className,
                              children,
                          }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
                                    className,
                                    children,
                                }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-zinc-300 tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};
