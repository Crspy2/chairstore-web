import { createContext } from 'react';

export const NavbarContext = createContext({ isHidden: false, hideNavbar: (value: boolean) => {} }); // Default values
