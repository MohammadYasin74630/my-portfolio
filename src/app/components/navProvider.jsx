"use client"
import React, { createContext, useContext, useState } from 'react'

const NavContext = createContext();

export default function NavProvider({ children }) {
    const [activeSection, setActiveSection] = useState("home");

    const data = {
        activeSection,
        setActiveSection
    }

    return (
        <NavContext value={data}>
            {children}
        </NavContext>
    )
}

export const useNavContext = () => useContext(NavContext);