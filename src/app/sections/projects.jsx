import discountPro from "../assets/project images/discountPro.png"
import chillgamer from "../assets/project images/chillGamer.png"
import vroomrents from "../assets/project images/vroomRents.png"
import resiflow from "../assets/project images/resiflow.png"
import Image from "next/image"
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link"
import ResumeModal from "../components/resumeModal"
import { Reoverlay } from "reoverlay"
import { useRef } from "react"
import * as motion from "motion/react-client"
import { useScroll, useTransform } from "motion/react"
import SectionObserver from "../components/sectionObserver"
import { chillGamerReq, discountProReq, resiFlowReq, vroomRentsReq } from "@/lib/requirements"

function Projects() {

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    })
    const chillgamerScale = useTransform(scrollYProgress, [1 * 0.25, 1], [1, 1 - (4 * 0.05)])
    const vroomrentsScale = useTransform(scrollYProgress, [2 * 0.25, 1], [1, 1 - (3 * 0.05)])
    const resiflowScale = useTransform(scrollYProgress, [3 * 0.25, 1], [1, 1 - (2 * 0.05)])
    const discountproScale = useTransform(scrollYProgress, [4 * 0.25, 1], [1, 1 - (1 * 0.05)])

    const viewResiflowRequirement = () => {
        Reoverlay.showModal(ResumeModal, { file: "/assignment requirement docs/assignment12_category_012.pdf" })
    }

    const viewVroomRentsRequirement = () => {
        Reoverlay.showModal(ResumeModal, { file: "/assignment requirement docs/assignment_category_15.pdf" })
    }

    const viewChilGamerRequirement = () => {
        Reoverlay.showModal(ResumeModal, { file: "/assignment requirement docs/_Assignment Category_ Camellia.pdf" })
    }

    const viewDiscountProRequirement = () => {
        Reoverlay.showModal(ResumeModal, { file: "/assignment requirement docs/Assignment-09-005.pdf" })
    }

    return (
        <>
            <SectionObserver section="projects">

                <div className="grid md:grid-cols-2 gap-4 w-11/12 mx-auto min-[1120px]:items-center mt-20">

                    <div className=" max-w-[60ch] xl:mx-auto">
                        <h2 className="text-2xl font-bold">My Projects</h2>
                        <p className="text-xs select-none opacity-0">This is dummy text to keep the header size same as the above sections. this text ensures that projects heading takes same space as all the other section in every device size.</p>
                    </div>
                </div>


                <div className="grid gap-10 pb-40 sm:pb-8 md:pb-0 xl:pb-8" ref={container}>

                    <motion.div className="sticky top-0 will-change-transform" style={{ scale: chillgamerScale }}>

                        <div className=" w-11/12 lg:w-8/12 xl:w-6/12 mx-auto bg-base-100 text-base-content p-4 rounded-t-sm flex max-[425px]:flex-col gap-2 items-center justify-between border border-base-300 ">

                            <h3 className="text-xl">ChillGamer</h3>
                            <div className="flex gap-2 items-center w-min ">
                                <button className="text-xl text-base-content cursor-pointer p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:shadow-sm shadow-base-content/30 transition-all active:scale-90" onClick={viewChilGamerRequirement} title="View requirements">
                                    <IoDocumentTextOutline />
                                </button>

                                <Link className="inline-block text-xl text-base-content cursor-pointer p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:shadow-sm shadow-base-content/30 transition-all active:scale-90" href="https://github.com/MohammadYasin74630/ChillGamer-Client-Side" target="_blank" title="View codes">
                                    <FiGithub />
                                </Link>

                                <div className="relative inline-block outline outline-base-300 rounded-lg p-px overflow-hidden hover:bg-base-200 hover:shadow-sm shadow-base-content/30 transition-all active:scale-90 ">
                                    <div className="border-animate absolute inset-0 scale-200"></div>

                                    <Link
                                        href="https://chill-gamer-1.netlify.app/"
                                        target="_blank"
                                        title="Live demo"
                                        className="relative inline-flex items-center justify-center text-xl cursor-pointer p-2 bg-base-100 rounded-lg"
                                    >
                                        <BiLinkExternal />
                                    </Link>
                                </div>
                            </div>

                        </div>

                        <div className="w-11/12 lg:w-8/12 xl:w-6/12 mx-auto shadow-sm relative">
                            <Image className="w-full object-cover rounded-b-sm" src={chillgamer} alt="chill gamer website screenshot" />

                            <div className="absolute top-0 w-full h-full flex items-center justify-center bg-base-content/80 rounded-b-sm">

                                <div className="max-w-md h-[300px] max-sm:hidden">

                                    <div className="tabs tabs-box p-3">
                                        <input type="radio" name="my_tabs_1" className="tab" aria-label="Overview" defaultChecked />
                                        <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                            Chill Gamer is a sleek and user-friendly game review platform where gamers can share their thoughts on different games, maintain a personal watchlist, and explore reviews from others. <br /> <br /> The platform ensures a seamless and responsive user experience across all devices.
                                        </div>

                                        <input type="radio" name="my_tabs_1" className="tab" aria-label="Key Features" />
                                        <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                            <ul className="list-decimal list-inside">
                                                <li>Supports both dark and light themes.</li>
                                                <li>Filter game reviews by genre, title (A-Z), rating, year, and order</li>
                                                <li>Pagination for faster loading and smoother navigation. </li>
                                            </ul>
                                        </div>

                                        <input type="radio" name="my_tabs_1" className="tab" aria-label="Tech Stack" />
                                        <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                            <div className="flex gap-2 flex-wrap">
                                                {
                                                    chillGamerReq.map((logo, idx) => {
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

                                        <input type="radio" name="my_tabs_1" className="tab" aria-label="Challenges" />
                                        <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                            <ul className="list-disc list-inside">
                                                <li>Building whole Authentication UI by myself</li>
                                                <li>First time making pagination without learning it</li>
                                                <li>First time doing Sorting & Filtering by myself</li>
                                                <li>Making sure all section & elements works with Dark/Light mode</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                                <p className="sm:hidden bg-base-100 text-base-content p-2 rounded-sm text-center opacity-80">A Game Review Platform</p>

                            </div>

                        </div>

                    </motion.div>


                    <motion.div className="sticky top-[10vh] will-change-transform" style={{ scale: vroomrentsScale }}>

                        <div className=" w-11/12 lg:w-8/12 xl:w-6/12 mx-auto bg-base-100 text-base-content p-4 rounded-t-sm flex max-[425px]:flex-col gap-2 items-center justify-between border border-base-300">

                            <h3 className="text-xl">VroomRents</h3>
                            <div className="flex gap-2 items-center w-min ">
                                <button className="text-xl text-base-content cursor-pointer p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:shadow-sm shadow-base-content/30 transition-all active:scale-90" onClick={viewVroomRentsRequirement} title="View requirements" >
                                    <IoDocumentTextOutline />
                                </button>

                                <Link className="inline-block text-xl text-base-content cursor-pointer p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:shadow-sm shadow-base-content/30 transition-all active:scale-90" href="https://github.com/MohammadYasin74630/VroomRents-client-side" target="_blank" title="View codes">
                                    <FiGithub />
                                </Link>

                                <div className="relative inline-block outline outline-base-300 rounded-lg p-px overflow-hidden hover:bg-base-200 hover:shadow-sm shadow-base-content/30 transition-all active:scale-90 ">
                                    <div className="border-animate absolute inset-0 scale-200"></div>

                                    <Link
                                        href="https://vroom-rents.web.app/"
                                        target="_blank"
                                        title="Live demo"
                                        className="relative inline-flex items-center justify-center text-xl cursor-pointer p-2 bg-base-100 rounded-lg"
                                    >
                                        <BiLinkExternal />
                                    </Link>
                                </div>

                            </div>

                        </div>

                        <div className="w-11/12 lg:w-8/12 xl:w-6/12 mx-auto shadow-sm relative">
                            <Image className="w-full object-cover rounded-b-sm" src={vroomrents} alt="vroom rents website screenshot" />

                            <div className="absolute top-0 w-full h-full flex items-center justify-center bg-base-content/80 rounded-b-sm">

                                <div className="max-w-md h-[300px] max-sm:hidden">

                                    <div className="tabs tabs-box p-3">
                                        <input type="radio" name="my_tabs_2" className="tab" aria-label="Overview" defaultChecked />
                                        <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                            VroomRents is a feature-rich car rental platform designed to simplify the process of booking and managing rental cars. <br /> <br /> With availability tracking, an intuitive booking system, and vendor management features, it offers a seamless experience for both renters and car owners.
                                        </div>

                                        <input type="radio" name="my_tabs_2" className="tab" aria-label="Key Features" />
                                        <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                            <ul className="list-decimal list-inside">
                                                <li>Some pages have switchable layout modes that persist across visits.</li>
                                                <li>Real-time schedule validation prevent overlapping car bookings between users.</li>
                                                <li>Users can upload any number of images when adding a car listing.</li>
                                            </ul>
                                        </div>

                                        <input type="radio" name="my_tabs_2" className="tab" aria-label="Tech Stack" />
                                        <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                            <div className="flex gap-2 flex-wrap">
                                                {
                                                    vroomRentsReq.map((logo, idx) => {
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

                                        <input type="radio" name="my_tabs_2" className="tab" aria-label="Challenges" />
                                        <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                            <ul className="list-disc list-inside">
                                                <li>Adding extensive Client & Server Side Validation</li>
                                                <li>Tried to make Role-Based Features by myself</li>
                                                <li>Making switchable View Mode that persist</li>
                                                <li>Making the carousel in car details page Responsive</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                                <p className="sm:hidden bg-base-100 text-base-content p-2 rounded-sm text-center opacity-80">A Car Rental Platform</p>

                            </div>

                        </div>

                    </motion.div>


                    <motion.div className="sticky top-[20vh] will-change-transform" style={{ scale: resiflowScale }}>

                        <div className=" w-11/12 lg:w-8/12 xl:w-6/12 mx-auto bg-base-100 text-base-content p-4 rounded-t-sm flex max-[425px]:flex-col gap-2 items-center justify-between border border-base-300 ">

                            <h3 className="text-xl">ResiFlow</h3>
                            <div className="flex gap-2 items-center w-min ">
                                <button className="text-xl text-base-content cursor-pointer p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:shadow-sm shadow-base-content/30 transition-all active:scale-90" onClick={viewResiflowRequirement} title="View requirements" >
                                    <IoDocumentTextOutline />
                                </button>

                                <Link className="inline-block text-xl text-base-content cursor-pointer p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:shadow-sm shadow-base-content/30 transition-all active:scale-90" href="https://github.com/MohammadYasin74630/ResiFlow-client-side" target="_blank" title="View codes">
                                    <FiGithub />
                                </Link>

                                <div className="relative inline-block outline outline-base-300 rounded-lg p-px overflow-hidden hover:bg-base-200 hover:shadow-sm shadow-base-content/30 transition-all active:scale-90 ">
                                    <div className="border-animate absolute inset-0 scale-200"></div>

                                    <Link
                                        href="https://resiflow.surge.sh/"
                                        target="_blank"
                                        title="Live demo"
                                        className="relative inline-flex items-center justify-center text-xl cursor-pointer p-2 bg-base-100 rounded-lg"
                                    >
                                        <BiLinkExternal />
                                    </Link>
                                </div>

                            </div>

                        </div>

                        <div className="w-11/12 lg:w-8/12 xl:w-6/12 mx-auto shadow-sm relative">
                            <Image className="w-full object-cover rounded-b-sm" src={resiflow} alt="resi flow website screenshot" />

                            <div className="absolute top-0 w-full h-full flex items-center justify-center bg-base-content/90 rounded-b-sm">

                                <div className="max-w-md h-[300px] max-sm:hidden">

                                    <div className="tabs tabs-box p-3">
                                        <input type="radio" name="my_tabs_3" className="tab" aria-label="Overview" defaultChecked />
                                        <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                            ResiFlow is a modern, user-friendly Building Management System (BMS) designed to simplify apartment rentals and property management. <br /> <br /> It provides role-based access for users, members, and admins, allowing seamless apartment browsing, agreement applications, rent payments, and announcements.
                                        </div>

                                        <input type="radio" name="my_tabs_3" className="tab" aria-label="Key Features" />
                                        <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                            <ul className="list-decimal list-inside">
                                                <li>Unique dashboards for users, members, and admins. </li>
                                                <li>Payment supports monthly/advance payments with one-time discount codes. </li>
                                                <li>Used TanStack Query to improve application performance with efficient caching.</li>
                                            </ul>
                                        </div>

                                        <input type="radio" name="my_tabs_3" className="tab" aria-label="Tech Stack" />
                                        <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                            <div className="flex gap-2 flex-wrap">
                                                {
                                                    resiFlowReq.map((logo, idx) => {
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

                                        <input type="radio" name="my_tabs_3" className="tab" aria-label="Challenges" />
                                        <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                            <ul className="list-disc list-inside">
                                                <li>First time building Role-Based Access</li>
                                                <li>First doing Data caching in client browser</li>
                                                <li>First time adding a Payment gateway</li>
                                                <li>Tight Deadline</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                                <p className="sm:hidden bg-base-100 text-base-content p-2 rounded-sm text-center opacity-80">A Building Management System</p>

                            </div>

                        </div>

                    </motion.div>

                    <motion.div className="sticky top-[30vh] will-change-transform" style={{ scale: discountproScale }}>

                        <div className=" w-11/12 lg:w-8/12 xl:w-6/12 mx-auto bg-base-100 text-base-content p-4 rounded-t-sm flex max-[425px]:flex-col gap-2 items-center justify-between border border-base-300 ">

                            <h3 className="text-xl">DiscountPro</h3>
                            <div className="flex gap-2 items-center w-min ">
                                <button className="text-xl text-base-content cursor-pointer p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:shadow-sm shadow-base-content/30 transition-all active:scale-90" onClick={viewDiscountProRequirement} title="View requirements" >
                                    <IoDocumentTextOutline />
                                </button>

                                <Link className="inline-block text-xl text-base-content cursor-pointer p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:shadow-sm shadow-base-content/30 transition-all active:scale-90" href="https://github.com/MohammadYasin74630/DiscountPro" target="_blank" title="View codes">
                                    <FiGithub />
                                </Link>

                                <div className="relative inline-block outline outline-base-300 rounded-lg p-px overflow-hidden hover:bg-base-200 hover:shadow-sm shadow-base-content/30 transition-all active:scale-90 ">
                                    <div className="border-animate absolute inset-0 scale-200"></div>

                                    <Link
                                        href="https://discountpro.netlify.app/"
                                        target="_blank"
                                        title="Live demo"
                                        className="relative inline-flex items-center justify-center text-xl cursor-pointer p-2 bg-base-100 rounded-lg"
                                    >
                                        <BiLinkExternal />
                                    </Link>
                                </div>

                            </div>

                        </div>

                        <div className="w-11/12 lg:w-8/12 xl:w-6/12 mx-auto shadow-sm relative">
                            <Image className="w-full object-cover rounded-b-sm" src={discountPro} alt="discount pro website screenshot" />

                            <div className="absolute top-0 w-full h-full flex items-center justify-center bg-base-content/90 rounded-b-sm">

                                <div className="max-w-md h-[300px] max-sm:hidden">

                                    <div className="tabs tabs-box p-3">
                                        <input type="radio" name="my_tabs_4" className="tab" aria-label="Overview" defaultChecked />
                                        <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                            Discount PRO is a coupon collecting web application designed to help users find and use discount coupons from popular e-commerce brands in Bangladesh. <br /> <br /> The platform consolidates active promotions in one place, allowing users to easily access and apply discounts while shopping online.
                                        </div>

                                        <input type="radio" name="my_tabs_4" className="tab" aria-label="Key Features" />
                                        <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                            <ul className="list-decimal list-inside">
                                                <li>Real-time search with instant filtering as users type.</li>
                                                <li>First time adding Google social login for authencation.</li>
                                                <li>Multi-directional carousel - supporting left, right, up, and down navigation.</li>
                                            </ul>
                                        </div>

                                        <input type="radio" name="my_tabs_4" className="tab" aria-label="Tech Stack" />
                                        <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                            <div className="flex gap-2 flex-wrap">
                                                {
                                                    discountProReq.map((logo, idx) => {
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

                                        <input type="radio" name="my_tabs_4" className="tab" aria-label="Challenges" />
                                        <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                            <ul className="list-disc list-inside">
                                                <li>My first project that i built Without any Figma design</li>
                                                <li>Adding animations as i lacked Animation Skill</li>
                                                <li>First time using 3rd party package like <i>"Copy-to-Clipboard"</i></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                                <p className="sm:hidden bg-base-100 text-base-content p-2 rounded-sm text-center opacity-80">Smart Coupon Collecting Platform</p>

                            </div>

                        </div>

                    </motion.div>

                </div>
            </SectionObserver>
        </>
    )
}

export default Projects