"use client"

import ColorButtons from './colorButtons'
import { GoHomeFill } from "react-icons/go";
import { FaMeh } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { SiStackoverflow } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import Link from 'next/link';
import ProfleSection from './profleSection';
import GoogleMap from './googleMap';

function Navbar() {

  const stopScrollPropagation = (event) => event.stopPropagation();

  return (
    <>
      <div className='bg-base-200 grid max-md:grid-flow-col justify-between sticky top-0 z-40 max-md:w-[100vmin] md:h-[100vmin] mx-auto max-md:p-1 shadow-sm max-md:rounded-b-sm overflow-hidden'>

        <div className='text-base-100 flex flex-col gap-2 max-md:order-2'>

          <div className="drawer drawer-end">

            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button">
                <p className='bg-base-content text-center px-4 py-2 md:py-3 font-bold font-sans cursor-pointer select-none max-md:rounded-sm'>Y</p>
              </label>
            </div>

            <div
              className="drawer-side "
              onWheel={stopScrollPropagation}
              onTouchMove={stopScrollPropagation}
            >

              <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

              <ul className="menu bg-base-200 text-base-content max-sm:max-w-64 max-w-80 p-3">
                {/* Sidebar content here */}
                <ProfleSection />
                <GoogleMap />
                <ColorButtons />
              </ul>

            </div>

          </div>

        </div>

        <div className='flex md:flex-col items-center justify-center gap-2 px-1 max-md:order-1'>

          <Link className="p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:cursor-pointer hover:shadow-sm shadow-base-content/30 group transition-all active:scale-90" href="#home">
            <GoHomeFill className='text-[17px] text-base-content mx-auto group-hover:text-success' />
          </Link>

          <Link className="p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:cursor-pointer hover:shadow-sm shadow-base-content/30 group transition-all active:scale-90" href="#about">
            <FaMeh className=' text-base-content mx-auto group-hover:text-success' />
          </Link>

          <Link className="p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:cursor-pointer hover:shadow-sm shadow-base-content/30 group transition-all active:scale-90" href="/">
            <FaBriefcase className='text-[15px] text-base-content mx-auto group-hover:text-success' />
          </Link>

        </div>

        <div className='flex md:flex-col items-center justify-end gap-2 px-1'>

          <Link className="p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:cursor-pointer hover:shadow-sm shadow-base-content/30 group transition-all active:scale-90"
            href="https://www.linkedin.com/in/mohammadyasin74630"
            target='_blank'>
            <FaLinkedinIn className='text-base-content mx-auto group-hover:text-info ' />
          </Link>

          <Link className="max-sm:hidden p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:cursor-pointer hover:shadow-sm shadow-base-content/30 group transition-all active:scale-90"
            href="mailto:mohammadyasin74630@gmail.com">
            <SiGmail className=' text-base-content mx-auto group-hover:text-error ' />
          </Link>

          <Link className="max-md:hidden p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:cursor-pointer hover:shadow-sm shadow-base-content/30 group transition-all active:scale-90"
            href="https://github.com/mes-shahadat"
            target='_blank'>
            <VscGithub className=' text-base-content mx-auto group-hover:text-secondary' />
          </Link>

          <Link className="max-md:hidden p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:cursor-pointer hover:shadow-sm shadow-base-content/30 group transition-all active:scale-90"
            href="https://stackoverflow.com/users/13922407/mes-shahdat"
            target='_blank' >
            <SiStackoverflow className=' text-base-content mx-auto group-hover:text-warning ' />
          </Link>

        </div>
      </div>
    </>
  )
}

export default Navbar