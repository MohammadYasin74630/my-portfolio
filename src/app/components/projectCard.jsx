import React from 'react'
import * as motion from "motion/react-client"
import Image from "next/image"
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link"

function ProjectCard({ cardScale, projectInfo }) {
    return (
        <>
            <motion.div className="sticky will-change-transform" style={{ scale: cardScale, top: projectInfo.top }}>

                <div className=" w-11/12 lg:w-8/12 xl:w-6/12 mx-auto bg-base-100 text-base-content p-4 rounded-t-sm flex max-[425px]:flex-col gap-2 items-center justify-between border border-base-300 ">

                    <h3 className="text-xl">{projectInfo.heading}</h3>
                    <div className="flex gap-2 items-center w-min ">
                        <button className="text-xl text-base-content cursor-pointer p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:shadow-sm shadow-base-content/30 active:scale-90 transition-colors transition-shadow transition-transform" onClick={projectInfo.pdfFn} title="View requirements">
                            <IoDocumentTextOutline />
                        </button>

                        <Link className="inline-block text-xl text-base-content cursor-pointer p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:shadow-sm shadow-base-content/30 active:scale-90 transition-colors transition-shadow transition-transform" href={projectInfo.github} title="View codes">
                            <FiGithub />
                        </Link>

                        <div className="relative inline-block outline outline-base-300 rounded-lg p-px overflow-hidden hover:bg-base-200 hover:shadow-sm shadow-base-content/30 active:scale-90 transition-colors transition-shadow transition-transform ">
                            <div className="border-animate absolute inset-0 scale-200"></div>

                            <Link
                                href={projectInfo.siteLink}
                                target="_blank"
                                title="Live demo"
                                className="relative inline-flex items-center justify-center text-xl cursor-pointer p-2 bg-base-100 rounded-lg"
                            >
                                <BiLinkExternal />
                            </Link>
                        </div>
                    </div>

                </div>

                <div className="w-11/12 lg:w-8/12 xl:w-6/12 mx-auto bg-primary-content shadow-sm relative">
                    <Image className="w-full min-h-64 object-cover rounded-b-sm" src={projectInfo.screenshot} alt={projectInfo.alt} />

                    <div className="absolute top-0 w-full h-full flex items-center justify-center bg-base-content/30 rounded-b-sm">

                        <div className="max-w-md h-[300px] max-sm:hidden">

                            <div className="tabs tabs-box p-3">
                                <input type="radio" name={`my_tabs_${projectInfo.id}`} className="tab" aria-label="Overview" defaultChecked />
                                <div
                                    className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3"
                                    dangerouslySetInnerHTML={{ __html: projectInfo.overview }}
                                >
                                </div>

                                <input type="radio" name={`my_tabs_${projectInfo.id}`} className="tab" aria-label="Key Features" />
                                <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                    <ul className="list-decimal list-inside">
                                        {
                                            projectInfo.features.map((str, idx) => <li key={idx}>{str}</li>)
                                        }
                                    </ul>
                                </div>

                                <input type="radio" name={`my_tabs_${projectInfo.id}`} className="tab" aria-label="Tech Stack" />
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

                                <input type="radio" name={`my_tabs_${projectInfo.id}`} className="tab" aria-label="Challenges" />
                                <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                    <ul className="list-disc list-inside">
                                        {
                                            projectInfo.challenges.map((str, idx) => <li key={idx} dangerouslySetInnerHTML={{ __html: str }}></li>)
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