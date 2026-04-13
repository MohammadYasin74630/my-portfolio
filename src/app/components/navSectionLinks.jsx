import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { FaMeh } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import Link from 'next/link';
import { useNavContext } from './navProvider';

function NavSectionLinks() {
    const { activeSection } = useNavContext();

    const position = {
        home: "link-1",
        about: "link-2",
        projects: "link-3"
    }

    return (
        <>
            <div className='absolute inset-0 flex max-md:flex-col justify-center pointer-events-none'>
                <div className={`size-[35px] bg-base-300 rounded-lg transition-transform ${position[activeSection]}`}></div>
            </div>
            <Link className="p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:cursor-pointer hover:shadow-sm shadow-base-content/30 group transition-all active:scale-90" href="#home">
                <GoHomeFill className={`relative text-[17px] text-base-content mx-auto group-hover:text-success transition-colors ${activeSection === "home" && "text-success"}`} />
            </Link>

            <Link className="p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:cursor-pointer hover:shadow-sm shadow-base-content/30 group transition-all active:scale-90" href="#about">
                <FaMeh className={`relative text-base-content mx-auto group-hover:text-success transition-colors ${activeSection === "about" && "text-success"}`} />
            </Link>

            <Link className="p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:cursor-pointer hover:shadow-sm shadow-base-content/30 group transition-all active:scale-90" href="#projects">
                <FaBriefcase className={`relative text-[15px] text-base-content mx-auto group-hover:text-success transition-colors ${activeSection === "projects" && "text-success"}`} />
            </Link>
        </>
    )
}

export default NavSectionLinks