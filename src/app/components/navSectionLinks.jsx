import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { FaMeh } from "react-icons/fa";
import { TiInfoLarge } from "react-icons/ti";
import { MdRoute } from "react-icons/md";
import { FaBriefcase } from "react-icons/fa6";
import { useNavContext } from './navProvider';

function NavSectionLinks() {
    const { activeSection } = useNavContext();

    const position = {
        home: "link-1",
        about: "link-2",
        journey: "link-3",
        projects: "link-4"
    }

    const scrollTo = (section, e) => {
        e.preventDefault();
        document.getElementById(section)?.scrollIntoView();
        history.replaceState(null, "", `#${section}`);
    }

    return (
        <>
            <div className='absolute inset-0 flex max-md:flex-col justify-center pointer-events-none'>
                <div className={`size-[35px] bg-base-300 rounded-lg transition-transform ${position[activeSection]}`}></div>
            </div>
            <a
                className="p-2 bg-base-100 rounded-lg border border-base-300 hover:border-base-content/30 hover:bg-base-200 hover:cursor-pointer group active:scale-90 transition-[background-color,border-color,scale] duration-200"
                href="#home"
                onClick={(e) => scrollTo("home", e)}
                data-tooltip-id="my-tooltip" data-tooltip-content="Home"
            >
                <GoHomeFill className={`relative text-[17px] text-base-content mx-auto group-hover:text-success transition-colors ${activeSection === "home" && "text-success"}`} />
            </a>

            <a className="p-2 bg-base-100 rounded-lg border border-base-300 hover:border-base-content/30 hover:bg-base-200 hover:cursor-pointer group active:scale-90 transition-[background-color,border-color,scale] duration-200"
                href="#about"
                onClick={(e) => scrollTo("about", e)}
                data-tooltip-id="my-tooltip" data-tooltip-content="About Me"
            >
                <TiInfoLarge className={`relative text-base-content mx-auto scale-150 group-hover:text-success transition-colors ${activeSection === "about" && "text-success"}`} />
            </a>

            <a className="p-2 bg-base-100 rounded-lg border border-base-300 hover:border-base-content/30 hover:bg-base-200 hover:cursor-pointer group active:scale-90 transition-[background-color,border-color,scale] duration-200"
                href="#journey"
                onClick={(e) => scrollTo("journey", e)}
                data-tooltip-id="my-tooltip" data-tooltip-content="My Journey"
            >
                <MdRoute className={`relative text-[15px] text-base-content scale-125 mx-auto group-hover:text-success transition-colors ${activeSection === "journey" && "text-success"}`} />
            </a>

            <a className="p-2 bg-base-100 rounded-lg border border-base-300 hover:border-base-content/30 hover:bg-base-200 hover:cursor-pointer group active:scale-90 transition-[background-color,border-color,scale] duration-200"
                href="#projects"
                onClick={(e) => scrollTo("projects", e)}
                data-tooltip-id="my-tooltip" data-tooltip-content="My Projects"
            >
                <FaBriefcase className={`relative text-[15px] text-base-content mx-auto group-hover:text-success transition-colors ${activeSection === "projects" && "text-success"}`} />
            </a>
        </>
    )
}

export default NavSectionLinks