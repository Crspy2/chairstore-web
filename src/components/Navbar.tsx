"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const path  = usePathname();

    return (
        <nav className={`dark bg-neutral-900/20 border-b-white/10 rounded-full fixed z-[9999] w-full mt-2 sm:px-4 py-2.5 top-0 left-0 backdrop-filter backdrop-blur-md border-b`}>
            <div className="flex flex-wrap items-center justify-between px-8">
                <div className="flex items-center">
                    <Link href="/#" className="flex items-center">
                        <Image src="/chairstore.png" alt="" width={2000} height={2000} className="w-12 h-12 rounded-md"/>
                    </Link>
                </div>
                <div  className="hidden sm:flex gap-4">
                    <div className="hidden sm:flex light gap-4">
                        <Link
                            href="/"
                            className={`flex my-auto gap-2 text-zinc-700 dark:text-white ${path == "/" && "font-bold"}`}
                        >
                            <h4 className="my-auto text-sm">Home</h4>
                        </Link>
                        <Link
                            href="/#products"
                            className="flex my-auto gap-2 text-zinc-700 dark:text-white"
                        >
                            <h4 className="my-auto text-sm">Cheats</h4>
                        </Link>
                        <Link
                            href={"/status"}
                            className={`flex my-auto gap-2 text-zinc-700 dark:text-white ${path == "/status" && "font-bold"}`}
                        >
                            <h4 className="my-auto text-sm">Status</h4>
                        </Link>
                        <Link
                            className="flex my-auto gap-2 text-zinc-700 dark:text-white"
                            href="https://discord.gg/chairstore"
                            rel="nofollow"
                            target="_blank"
                        >
                            <h4 className="my-auto text-sm">Discord</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar