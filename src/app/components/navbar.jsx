"use client"

import ColorButtons from './colorButtons'
import { FaArrowDownLong } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { SiStackoverflow } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import Link from 'next/link';
import ProfleSection from './profleSection';
import GoogleMap from './googleMap';
import NavSectionLinks from './navSectionLinks';

const GmailIcon = (props) => (
  <svg
    width="800px"
    height="800px"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z"
      fill="white"
    />
    <path
      d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z"
      fill="#EA4335"
    />
    <path
      d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z"
      fill="#FBBC05"
    />
    <path
      d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z"
      fill="#34A853"
    />
    <path
      d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z"
      fill="#C5221F"
    />
    <path
      d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z"
      fill="#C5221F"
    />
    <path
      d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z"
      fill="#C5221F"
    />
    <path
      d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z"
      fill="#4285F4"
    />
  </svg>
)


function Navbar() {

  const stopScrollPropagation = (event) => event.stopPropagation();

  return (
    <>
      <div className='bg-base-200 grid max-md:grid-flow-col justify-between sticky top-0 z-40 max-md:w-[100vmin] md:h-[100vmin] mx-auto max-md:p-1 shadow-sm max-md:rounded-b-sm overflow-hidden'>

        <div className='text-base-100 flex flex-col gap-2 max-md:order-2'>

          <div className="drawer drawer-end">

            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            {/* top */}
            <div className="drawer-content">
              <label htmlFor="my-drawer-4" className="drawer-button">
                <p className='bg-base-content text-center px-4 py-2 md:py-3 font-bold font-sans cursor-pointer select-none max-md:rounded-sm'>Y</p>
              </label>
            </div>

            <div
              className="drawer-side z-50 will-change-transform custom-scrollbar"
              onWheel={stopScrollPropagation}
              onTouchMove={stopScrollPropagation}
            >

              <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay cursor-cross"></label>

              {/* drawer */}
              <ul className="menu flex-nowrap bg-base-200 text-base-content max-sm:max-w-64 max-w-80 p-3 min-h-full">
                {/* Sidebar content here */}
                <ProfleSection />
                <GoogleMap />
                <ColorButtons />
              </ul>

            </div>

          </div>

        </div>

        {/* middle */}
        <div className='flex items-center justify-center max-md:order-1 '>

          <div className='relative flex md:flex-col items-center justify-center gap-2 px-1'>
            <NavSectionLinks />
          </div>

        </div>

        {/* bottom */}
        <div className='flex md:flex-col items-center justify-end gap-2 px-1 md:pb-2'>

          <FaArrowDownLong className='text-error scale-125 animate-[bounce_0.8s_infinite] max-md:hidden' />

          <Link className="p-2 bg-base-100 rounded-lg border border-base-300 hover:border-base-content/30 hover:bg-[#0073b2] hover:cursor-pointer group transition-colors transition-transform active:scale-90"
            href="https://www.linkedin.com/in/mohammadyasin74630"
            target='_blank'>
            <FaLinkedinIn className='text-base-content mx-auto group-hover:text-white ' />
          </Link>

          <Link className="max-sm:hidden p-2 bg-base-100 rounded-lg border border-base-300 hover:border-base-content/30 hover:bg-white hover:cursor-pointer group transition-colors transition-transform active:scale-90"
            href="mailto:md.yasin.dev1@gmail.com">
            <div className='relative'>
              <SiGmail className=' mx-auto ' />
              <GmailIcon className="size-6 absolute top-[-3px] left-[-3px]  bg-white -z-10 group-hover:z-0" />
            </div>
          </Link>

          <Link className="max-md:hidden p-2 bg-base-100 rounded-lg border border-base-300 hover:border-base-content/30 hover:bg-black hover:cursor-pointer group transition-colors transition-transform active:scale-90"
            href="https://github.com/MohammadYasin74630"
            target='_blank'>
            <VscGithub className=' text-base-content mx-auto group-hover:text-white' />
          </Link>

          <Link className="max-md:hidden p-2 bg-base-100 rounded-lg border border-base-300 hover:border-base-content/30 hover:bg-[#ff5e00] hover:cursor-pointer group transition-colors transition-transform active:scale-90"
            href="https://stackoverflow.com/users/13922407"
            target='_blank' >
            <SiStackoverflow className=' text-base-content mx-auto group-hover:text-black ' />
          </Link>

        </div>

      </div>
    </>
  )
}

export default Navbar