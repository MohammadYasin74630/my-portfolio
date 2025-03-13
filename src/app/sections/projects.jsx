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
            <h2 className="text-2xl font-bold w-11/12 mx-auto mb-5" id="projects">My Projects</h2>

            <div className="grid gap-10 pb-40 sm:pb-8 md:pb-0" ref={container}>

                <motion.div className=" sticky will-change-transform" style={{ scale: chillgamerScale, top: "0" }}>

                    <div className=" w-11/12 mx-auto bg-base-100 text-base-content p-4 rounded-t-sm flex max-[425px]:flex-col gap-2 items-center justify-between border border-base-300 ">

                        <h3 className="text-xl">ChillGamer</h3>
                        <div className="flex gap-2 items-center w-min ">
                            <button className="text-xl text-base-content cursor-pointer p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:shadow-sm shadow-base-content/30 transition-all active:scale-90" onClick={viewChilGamerRequirement} >
                                <IoDocumentTextOutline />
                            </button>

                            <Link className="inline-block text-xl text-base-content cursor-pointer p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:shadow-sm shadow-base-content/30 transition-all active:scale-90" href="https://github.com/MohammadYasin74630/ChillGamer-Client-Side" target="_blank">
                                <FiGithub />
                            </Link>

                            <Link className="inline-block text-xl text-base-content cursor-pointer p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:shadow-sm shadow-base-content/30 transition-all active:scale-90" href="https://chill-gamer-1.netlify.app/" target="_blank">
                                <BiLinkExternal />
                            </Link>
                        </div>

                    </div>

                    <div className="w-11/12 mx-auto shadow-sm relative">
                        <Image className="w-full object-cover rounded-b-sm" src={chillgamer} alt="chill gamer website screenshot" />

                        <div className="absolute top-0 w-full h-full flex items-center justify-center bg-base-content/80">

                            <div className="max-w-md h-80 max-sm:hidden">

                                <div className="tabs tabs-box p-3">
                                    <input type="radio" name="my_tabs_1" className="tab" aria-label="Detail" defaultChecked />
                                    <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                        Chill Gamer is a sleek and user-friendly game review platform where gamers can share their thoughts on different games, maintain a personal watchlist, and explore reviews from others. <br /> <br /> The platform ensures a seamless and responsive user experience across all devices.
                                    </div>

                                    <input type="radio" name="my_tabs_1" className="tab" aria-label="Purpose" />
                                    <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                        The idea behind Chill Gamer was to create a dedicated space for game enthusiasts to review and track games effortlessly. <br /> <br /> Key features like dynamic filtering, review management, and a watchlist were carefully implemented to enhance engagement.
                                    </div>

                                    <input type="radio" name="my_tabs_1" className="tab" aria-label="Solves" />
                                    <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                        Gaming communities often rely on scattered platforms for reviews, making it difficult to get personalized and structured feedback. <br /> <br /> Chill Gamer bridges this gap by providing an intuitive interface where users can quickly find trusted reviews, contribute their insights, and maintain a game watchlist—all in one place.
                                    </div>

                                    <input type="radio" name="my_tabs_1" className="tab" aria-label="Challenges" />
                                    <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                        <ul className="list-decimal list-inside">
                                            <li>Authentication Complexity</li>
                                            <li>Dynamic Review Management</li>
                                            <li>Sorting & Filtering Performance</li>
                                            <li>Dark/Light Mode Persistence</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <p className="sm:hidden bg-base-100 text-base-content p-2 rounded-sm text-center opacity-80">A Game Review Platform</p>

                        </div>

                    </div>

                </motion.div>


                <motion.div className=" sticky will-change-transform" style={{ scale: vroomrentsScale, top: "10vh" }}>

                    <div className=" w-11/12 mx-auto bg-base-100 text-base-content p-4 rounded-t-sm flex max-[425px]:flex-col gap-2 items-center justify-between border border-base-300">

                        <h3 className="text-xl">VroomRents</h3>
                        <div className="flex gap-2 items-center w-min ">
                            <button className="text-xl text-base-content cursor-pointer p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:shadow-sm shadow-base-content/30 transition-all active:scale-90" onClick={viewVroomRentsRequirement} >
                                <IoDocumentTextOutline />
                            </button>

                            <Link className="inline-block text-xl text-base-content cursor-pointer p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:shadow-sm shadow-base-content/30 transition-all active:scale-90" href="https://github.com/MohammadYasin74630/VroomRents-client-side" target="_blank">
                                <FiGithub />
                            </Link>

                            <Link className="inline-block text-xl text-base-content cursor-pointer p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:shadow-sm shadow-base-content/30 transition-all active:scale-90" href="https://vroom-rents.web.app/" target="_blank">
                                <BiLinkExternal />
                            </Link>
                        </div>

                    </div>

                    <div className="w-11/12 mx-auto shadow-sm relative">
                        <Image className="w-full object-cover rounded-b-sm" src={vroomrents} alt="vroom rents website screenshot" />

                        <div className="absolute top-0 w-full h-full flex items-center justify-center bg-base-content/80">

                            <div className="max-w-md h-80 max-sm:hidden">

                                <div className="tabs tabs-box p-3">
                                    <input type="radio" name="my_tabs_2" className="tab" aria-label="Detail" defaultChecked />
                                    <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                        VroomRents is a feature-rich car rental platform designed to simplify the process of booking and managing rental cars. <br /> <br /> With availability tracking, an intuitive booking system, and vendor management features, it offers a seamless experience for both renters and car owners.
                                    </div>

                                    <input type="radio" name="my_tabs_2" className="tab" aria-label="Purpose" />
                                    <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                        The development of VroomRents was guided by the need for a fast, responsive, and scalable car rental solution. The focus was on creating a system where:
                                        <br /> <br />
                                        <ul className="list-disc list-inside ml-2">
                                            <li>Users can easily filter & and book available cars</li>
                                            <li>Vendors can add & manage their car listings</li>
                                            <li>The UI remains smooth & engaging across devices</li>
                                        </ul>
                                    </div>

                                    <input type="radio" name="my_tabs_2" className="tab" aria-label="Solves" />
                                    <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                        Traditional car rental platforms often suffer from clunky interfaces, lack of real-time updates, and slow booking processes. <br /> <br /> VroomRents solves these pain points by providing a responsive design for easy navigation, preventing booking conflicts & allowing vendors to manage listings seamlessly.
                                    </div>

                                    <input type="radio" name="my_tabs_2" className="tab" aria-label="Challenges" />
                                    <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                        <ul className="list-decimal list-inside">
                                            <li>Server Side Validation</li>
                                            <li>Role-Based Features</li>
                                            <li>Switchable View Mode</li>
                                            <li>Responsive Carousal</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <p className="sm:hidden bg-base-100 text-base-content p-2 rounded-sm text-center opacity-80">A Car Rental Platform</p>

                        </div>

                    </div>

                </motion.div>


                <motion.div className=" sticky will-change-transform" style={{ scale: resiflowScale, top: "20vh" }}>

                    <div className=" w-11/12 mx-auto bg-base-100 text-base-content p-4 rounded-t-sm flex max-[425px]:flex-col gap-2 items-center justify-between border border-base-300 ">

                        <h3 className="text-xl">ResiFlow</h3>
                        <div className="flex gap-2 items-center w-min ">
                            <button className="text-xl text-base-content cursor-pointer p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:shadow-sm shadow-base-content/30 transition-all active:scale-90" onClick={viewResiflowRequirement} >
                                <IoDocumentTextOutline />
                            </button>

                            <Link className="inline-block text-xl text-base-content cursor-pointer p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:shadow-sm shadow-base-content/30 transition-all active:scale-90" href="https://github.com/MohammadYasin74630/ResiFlow-client-side" target="_blank">
                                <FiGithub />
                            </Link>

                            <Link className="inline-block text-xl text-base-content cursor-pointer p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:shadow-sm shadow-base-content/30 transition-all active:scale-90" href="https://resiflow.surge.sh/" target="_blank">
                                <BiLinkExternal />
                            </Link>
                        </div>

                    </div>

                    <div className="w-11/12 mx-auto shadow-sm relative">
                        <Image className="w-full object-cover rounded-b-sm" src={resiflow} alt="resi flow website screenshot" />

                        <div className="absolute top-0 w-full h-full flex items-center justify-center bg-base-content/90">

                            <div className="max-w-md h-80 max-sm:hidden">

                                <div className="tabs tabs-box p-3">
                                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Detail" defaultChecked />
                                    <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                        ResiFlow is a modern, user-friendly Building Management System (BMS) designed to simplify apartment rentals and property management. <br /> <br /> It provides role-based access for users, members, and admins, allowing seamless apartment browsing, agreement applications, rent payments, and announcements.
                                    </div>

                                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Purpose" />
                                    <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                        The development of ResiFlow was driven by the need for an efficient and intuitive solution for managing apartment rentals. <br /> <br /> The focus was on a clean UI/UX, secure authentication, and smooth data handling.
                                    </div>

                                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Solves" />
                                    <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                        Traditional apartment renting and management often involve paper-based agreements, manual rent collection, and inefficient communication between landlords and tenants. <br /> <br /> ResiFlow streamlines the entire process by providing a centralized platform & Simplifying rent payments with discounts !
                                    </div>

                                    <input type="radio" name="my_tabs_3" className="tab" aria-label="Challenges" />
                                    <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                        <ul className="list-decimal list-inside">
                                            <li>Managing Role-Based Access</li>
                                            <li>Data Fetching Optimization</li>
                                            <li>Ensuring Secure Payments</li>
                                            <li>Tight Deadline</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <p className="sm:hidden bg-base-100 text-base-content p-2 rounded-sm text-center opacity-80">A Building Management System</p>

                        </div>

                    </div>

                </motion.div>

                <motion.div className=" sticky will-change-transform" style={{ scale: discountproScale, top: "30vh" }}>

                    <div className=" w-11/12 mx-auto bg-base-100 text-base-content p-4 rounded-t-sm flex max-[425px]:flex-col gap-2 items-center justify-between border border-base-300 ">

                        <h3 className="text-xl">DiscountPro</h3>
                        <div className="flex gap-2 items-center w-min ">
                            <button className="text-xl text-base-content cursor-pointer p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:shadow-sm shadow-base-content/30 transition-all active:scale-90" onClick={viewDiscountProRequirement} >
                                <IoDocumentTextOutline />
                            </button>

                            <Link className="inline-block text-xl text-base-content cursor-pointer p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:shadow-sm shadow-base-content/30 transition-all active:scale-90" href="https://github.com/MohammadYasin74630/DiscountPro" target="_blank">
                                <FiGithub />
                            </Link>

                            <Link className="inline-block text-xl text-base-content cursor-pointer p-2 bg-base-100 rounded-lg border border-base-300 hover:bg-base-200 hover:shadow-sm shadow-base-content/30 transition-all active:scale-90" href="https://discountpro.netlify.app/" target="_blank">
                                <BiLinkExternal />
                            </Link>
                        </div>

                    </div>

                    <div className="w-11/12 mx-auto shadow-sm relative">
                        <Image className="w-full object-cover rounded-b-sm" src={discountPro} alt="discount pro website screenshot" />

                        <div className="absolute top-0 w-full h-full flex items-center justify-center bg-base-content/90">

                            <div className="max-w-md h-80 max-sm:hidden">

                                <div className="tabs tabs-box p-3">
                                    <input type="radio" name="my_tabs_4" className="tab" aria-label="Detail" defaultChecked />
                                    <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                        Discount PRO is a coupon collecting web application designed to help users find and use discount coupons from popular e-commerce brands in Bangladesh. <br /> <br /> The platform consolidates active promotions in one place, allowing users to easily access and apply discounts while shopping online.
                                    </div>

                                    <input type="radio" name="my_tabs_4" className="tab" aria-label="Purpose" />
                                    <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                        The purpose of Discount PRO was to simplify the discount hunting process for online shoppers. Many e-commerce sites offer promotional codes, but users often struggle to find the latest deals. <br /> <br /> The focus was on creating an intuitive UI where users can browse brands and collect coupons effortlessly.
                                    </div>

                                    <input type="radio" name="my_tabs_4" className="tab" aria-label="Solves" />
                                    <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                        Shoppers often miss out on discounts due to scattered and unorganized coupon listings. <br /> <br /> Discount PRO solves this by centralizing active discount codes from various brands in one platform and offering brand ratings and sale indicators, making it easier to choose the best offers.
                                    </div>

                                    <input type="radio" name="my_tabs_4" className="tab" aria-label="Challenges" />
                                    <div className="tab-content bg-base-100 border-base-300 rounded-field mt-3 p-3">
                                        <ul className="list-decimal list-inside">
                                            <li>Designing Without Figma</li>
                                            <li>Lack of Animation Skill</li>
                                            <li>Copy-to-Clipboard in Overlay</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <p className="sm:hidden bg-base-100 text-base-content p-2 rounded-sm text-center opacity-80">Smart Coupon Collecting Platform</p>

                        </div>

                    </div>

                </motion.div>

            </div>

        </>
    )
}

export default Projects