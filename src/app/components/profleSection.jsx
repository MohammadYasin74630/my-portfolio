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
import ContactModal from "./contactModal";
import ResumeModal from "./resumeModal";

function ProfleSection() {

  const viewResume = () => {
    Reoverlay.showModal(ResumeModal)
  }

  const sendMail = () => {
    Reoverlay.showModal(ContactModal)
  }

  return (
    <div>
      <Image className="rounded-sm h-48 object-cover object-top" src={img3} alt="developer's image" />
      <p className="font-bold text-xs text-center mt-3">FULLSTACK DEVELOPER</p>
      <h3 className="text-xl font-dela text-center mt-2 mb-3">Mohammad Yasin</h3>

      <div className="flex gap-1 justify-evenly">

        <Link className="p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:cursor-pointer hover:shadow-sm shadow-base-content/30 group transition-all active:scale-90" href="https://www.facebook.com/mohammad.sahadat.587/" target='_blank'>
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

      <div className="font-medium font-sans flex justify-between my-4">
        <button className="cursor-pointer transition-colors active:text-info" onClick={viewResume}>View CV</button>
        <button className="cursor-pointer transition-colors active:text-info" onClick={sendMail}>Contact Me</button>
      </div>
    </div>
  )
}

export default ProfleSection