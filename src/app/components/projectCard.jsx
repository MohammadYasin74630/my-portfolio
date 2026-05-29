import React from 'react'
import * as motion from "motion/react-client"
import Image from "next/image"
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import { MdInfoOutline } from "react-icons/md";
import { TiStarOutline } from "react-icons/ti";
import { IoCodeWorking } from "react-icons/io5";
import { LuFlag } from "react-icons/lu";
import Link from "next/link"

function ProjectCard({ cardScale, projectInfo }) {
    return (
        <>
            <motion.div className="sticky will-change-transform" style={{ scale: cardScale, top: projectInfo.top }}>

                <div className=" w-11/12 lg:w-8/12 xl:w-6/12 mx-auto bg-base-100 text-base-content p-4 rounded-t-xl flex gap-2 items-center justify-between border border-base-100 ">

                    <div className='flex items-center gap-2'>
                        <Image className='bg-success size-12 rounded-lg object-contain' src={projectInfo.logo} alt={projectInfo.logoAlt} />
                        <div className='max-[425px]:hidden'>
                            <h3 className="text-lg font-semibold">{projectInfo.heading}</h3>
                            <p className='text-sm font-medium text-gray-500 -mt-1'>{projectInfo.shortDescription}</p>
                        </div>
                    </div>

                    <div className="flex gap-2 items-center w-min self-center ">
                        <div className='flex flex-col items-center gap-1'>
                            <button className="text-xl text-base-content cursor-pointer p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:shadow-sm shadow-base-content/30 active:scale-90 transition-colors transition-shadow transition-transform" onClick={projectInfo.pdfFn}>
                                <IoDocumentTextOutline />
                            </button>
                            <small className='text-[9px]'>Docs</small>
                        </div>

                        <div className='flex flex-col items-center gap-1'>
                            <Link className="inline-block text-xl text-base-content cursor-pointer p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:shadow-sm shadow-base-content/30 active:scale-90 transition-colors transition-shadow transition-transform" href={projectInfo.github}>
                                <FiGithub />
                            </Link>
                            <small className='text-[9px]'>Code</small>
                        </div>


                        <div className='flex flex-col items-center gap-1'>
                            <div className="relative inline-block outline outline-base-300 rounded-lg p-px overflow-hidden hover:bg-base-200 hover:shadow-sm shadow-base-content/30 active:scale-90 transition-colors transition-shadow transition-transform ">
                                <div className="border-animate absolute inset-0 scale-200"></div>

                                <Link
                                    href={projectInfo.siteLink}
                                    target="_blank"
                                    className="relative inline-flex items-center justify-center text-xl cursor-pointer p-2 bg-base-100 rounded-lg"
                                >
                                    <BiLinkExternal />
                                </Link>
                            </div>
                            <small className='text-[9px]'>Live Site</small>
                        </div>

                    </div>

                </div>

                <div className="w-11/12 lg:w-8/12 xl:w-6/12 mx-auto bg-primary-content rounded-b-xl shadow-sm relative">
                    <Image className="w-full min-h-64 object-cover rounded-b-xl" src={projectInfo.screenshot} alt={projectInfo.alt} />

                    <div className="absolute top-0 w-full h-full flex items-center justify-center bg-base-content/30 rounded-b-xl">

                        <div className="max-w-[555px] h-[300px] max-sm:hidden">
                            <div className="tabs tabs-box p-3">
                                <label className="tab gap-1">
                                    <input type="radio" name={`my_tabs_${projectInfo.id}`} defaultChecked />
                                    <MdInfoOutline className='-mt-1' size={18} />
                                    Overview
                                </label>
                                <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3" dangerouslySetInnerHTML={{ __html: projectInfo.overview }}></div>

                                <label className="tab gap-1">
                                    <input type="radio" name={`my_tabs_${projectInfo.id}`} />
                                    <TiStarOutline className='-mt-1' size={20} />
                                    Key Features
                                </label>
                                <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                    {
                                        projectInfo.features.map((str, idx) => <div key={idx} className='flex gap-2'>
                                            <p>{idx + 1}.</p>
                                            <p>{str}</p>
                                        </div>)
                                    }
                                </div>

                                <label className="tab gap-1">
                                    <input type="radio" name={`my_tabs_${projectInfo.id}`} />
                                    <IoCodeWorking className='-mt-0.5' size={20} />
                                    Tech Stack
                                </label>
                                <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                    <div className="flex gap-2 flex-wrap">
                                        {
                                            projectInfo.requirements.map((logo, idx) => {
                                                if (logo.show) return (
                                                    <a
                                                        key={idx}
                                                        href={logo.link}
                                                        target="_blank"
                                                    >
                                                        <Image
                                                            className="rounded-full object-cover"
                                                            src={logo.path}
                                                            alt={logo.alt}
                                                            width="32" height="32"
                                                            data-tooltip-id="my-tooltip" data-tooltip-content={logo.title}
                                                        />
                                                    </a>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <label className="tab gap-1">
                                    <input type="radio" name={`my_tabs_${projectInfo.id}`} />
                                    <LuFlag size={18} />
                                    Challenges
                                </label>
                                <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                    <ul className="list-disc list-inside">
                                        {
                                            projectInfo.challenges.map((str, idx) => <div className='flex gap-2' key={idx} dangerouslySetInnerHTML={{ __html: `<p>•</p> <p>${str}</p>` }}></div>)
                                        }
                                    </ul>
                                </div>
                            </div>

                        </div>

                        <p className="sm:hidden bg-base-100 text-base-content p-2 rounded-sm text-center opacity-80">
                            {projectInfo.mobileDescription}
                        </p>

                    </div>

                </div>

            </motion.div>
        </>
    )
}

export default ProjectCard