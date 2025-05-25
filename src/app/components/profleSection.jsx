"use client"

import Image from "next/image"
import img3 from "../assets/IMG_3.jpg"
import Link from "next/link"
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Reoverlay } from 'reoverlay';
import ResumeModal from "./resumeModal";

function ProfleSection() {

  const viewResume = () => {
    Reoverlay.showModal(ResumeModal, { file: "/Mohammad-Yasin-FullStack-Dev-Resume.pdf" })
  }

  return (
    <div>
      <h3 className="text-xl font-dela text-center mb-3">Mohammad Yasin</h3>
      <div className="relative">
        <Image className="rounded-sm h-48 object-cover object-top" src={img3} alt="developer's image" />
        <div className="absolute top-0 bg-base-100/50 rounded-sm w-full h-full flex items-center justify-center backdrop-blur-sm">
          <Image className="object-cover" src='/logo1.ico' width="32" height="32" alt="logo icon" />
        </div>

        <button className="absolute bottom-2 left-1/2 -translate-x-1/2 shadow cursor-pointer transition-[scale] active:scale-90 bg-base-100 px-2 py-0.5 rounded-sm" onClick={viewResume}>View CV</button>
      </div>

      <div className="flex gap-1 justify-evenly my-4">

        <Link className="p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:cursor-pointer hover:shadow-sm shadow-base-content/30 group transition-all active:scale-90" href="https://www.facebook.com/mohammad.sahadat.587" target='_blank'>
          <FaFacebookF className='text-[20px] text-base-content mx-auto group-hover:text-info' />
        </Link>
        <Link className="p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:cursor-pointer hover:shadow-sm shadow-base-content/30 group transition-all active:scale-90" href="https://wa.me/+8801845737600" target='_blank'>
          <IoLogoWhatsapp className='text-[20px] text-base-content mx-auto group-hover:text-success' />
        </Link>
        <Link className="p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:cursor-pointer hover:shadow-sm shadow-base-content/30 group transition-all active:scale-90" href="https://x.com/md_yasin_74630" target='_blank'>
          <BsTwitterX className='text-[20px] text-base-content mx-auto group-hover:text-secondary' />
        </Link>
        <Link className="p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:cursor-pointer hover:shadow-sm shadow-base-content/30 group transition-all active:scale-90" href="https://t.me/mohammad_yasin74630" target='_blank'>
          <FaTelegramPlane className='text-[20px] text-base-content mx-auto group-hover:text-info' />
        </Link>
        <Link className="p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:cursor-pointer hover:shadow-sm shadow-base-content/30 group transition-all active:scale-90" href="http://discord.com/users/1256469260545560591" target='_blank'>
          <FaDiscord className='text-[20px] text-base-content mx-auto group-hover:text-primary' />
        </Link>

      </div>

    </div>
  )
}

export default ProfleSection