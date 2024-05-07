"use client"

import { useState, PropsWithChildren } from "react";
import { NavbarContext } from "@/lib/context";

const Provider = ({children}: PropsWithChildren) => {
    const [isHidden, setIsHidden] = useState(false);

    const hideNavbar = (value: boolean) => {
        setIsHidden(value);
    };

    return (
        <NavbarContext.Provider value={{ isHidden, hideNavbar }}>
            {children}
        </NavbarContext.Provider>
    );
}

export default Provider