import nextjs from "@/app/assets/skills badge/NextJs.svg"
import express from "@/app/assets/skills badge/express.svg"
import mongodb from "@/app/assets/skills badge/mongodb.svg"
import postgres from "@/app/assets/skills badge/Postgres.svg"
import authjs from "@/app/assets/skills badge/Auth.svg"
import prisma from "@/app/assets/skills badge/Prisma.svg"
import tailwind from "@/app/assets/skills badge/tailwindcss.svg"
import git from "@/app/assets/skills badge/git.svg"
import github from "@/app/assets/skills badge/github.svg"
import Image from "next/image"
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import { IoBriefcaseOutline } from "react-icons/io5";
import { SlGlobe } from "react-icons/sl";
import { TbPuzzle } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { FiServer } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import styles from "./accordion.module.css";
import { IoIosArrowDown } from "react-icons/io";
import AboutYear from "./about-year"
import SectionObserver from "../components/sectionObserver"

const AccordionItem = ({ header, ...rest }) => (
    <Item
        {...rest}
        header={
            <>
                {header}
                <IoIosArrowDown className={styles.chevron} />
            </>
        }
        className={`${styles.item} mt-2 border !border-base-content/10 rounded-lg`}
        buttonProps={{
            className: ({ isEnter }) =>
                `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded} rounded-lg`,
        }}
        contentProps={{ className: styles.itemContent }}
        panelProps={{ className: styles.itemPanel }}
    />
);


function About() {
    return (
        <>
            <SectionObserver section="about">
                <div className="grid md:grid-cols-2 gap-4 w-11/12 mx-auto min-h-[90dvh] min-[1120px]:items-center my-10">

                    <div className=" max-w-[60ch] xl:mx-auto">

                        <div className="space-y-4 ">

                            <div>
                                <h2 className="text-2xl font-bold tracking-wider">
                                    About Me
                                </h2>
                                <div className="w-12 h-1 bg-warning/80 rounded-full mt-3"></div>
                            </div>

                            <AboutYear />

                            <p className="text-lg">As someone who spends most of my time in front of a computer, I've developed a knack for <strong>learning quickly</strong> and <strong>solving tech-related challenges</strong>. Whether it's <strong>debugging code</strong> or assisting friends with their PC issues through TeamViewer, technology has always been a natural strength of mine.</p>
                        </div>

                        <div className="mt-8 space-y-4 ">
                            <h2 className="text-warning font-bold inline-flex gap-2 items-center">
                                <FaCode className="-mt-0.5" size={20} /> SKILLS
                            </h2>

                            <p className="text-lg md:max-lg:hidden">I spent two years self-learning web development before enrolling in a professional MERN stack course. I now specialize in:</p>

                            <div className="flex flex-wrap gap-2">
                                {/* later badges are downloaded from: https://github.com/inttter/md-badges?tab=readme-ov-file */}
                                <Image className="rounded-sm border border-base-content/30 size-auto" src={nextjs} alt="next JS logo" />
                                <Image className="rounded-sm border border-base-content/30 size-auto" src={express} alt="expressJs logo" />
                                <Image className="rounded-sm border border-base-content/30 size-auto" src={mongodb} alt="mongodb logo" />
                                <Image className="rounded-sm border border-base-content/30 w-[90px] h-auto" src={postgres} alt="postgres logo" />
                                <Image className="rounded-sm border border-base-content/30 w-[90px] h-auto" src={prisma} alt="prisma logo" />
                                <Image className="rounded-sm border border-base-content/30 w-[90px] h-auto" src={authjs} alt="authjs logo" />
                                <Image className="rounded-sm border border-base-content/30 size-auto" src={tailwind} alt="tailwind logo" />
                                <Image className="rounded-sm border border-base-content/30 size-auto" src={git} alt="git logo" />
                                <Image className="rounded-sm border border-base-content/30 size-auto" src={github} alt="github logo" />
                            </div>
                        </div>

                    </div>

                    <div>

                        <div className=" max-md:mt-8 ">
                            <div>
                                <h2 className="text-2xl font-bold tracking-wider">
                                    Frequently Asked Questions
                                </h2>
                                <div className="w-12 h-1 bg-warning/80 rounded-full mt-3 -mb-2"></div>
                            </div>

                            <div className={`${styles.accordion}`}>
                                <Accordion transition transitionTimeout={250}>
                                    <AccordionItem header={
                                        <div className="flex gap-4 items-center">
                                            <IoBriefcaseOutline className="text-warning/80" size={24} />
                                            <p className="font-medium line-clamp-1">What type of services do you offer ?</p>
                                        </div>
                                    }>
                                        <ol className="list-decimal list-inside space-y-1">
                                            <li>Converting PSD/Figma designs into responsive, interactive React applications.</li>
                                            <li>Designing and developing RESTful APIs using MongoDB or Postgresql.</li>
                                            <li>Creating complete web applications with social login & JWT.</li>
                                        </ol>
                                    </AccordionItem>

                                    <AccordionItem header={
                                        <div className="flex gap-4 items-center">
                                            <SlGlobe className="text-warning/80" size={22} />
                                            <p className="font-medium line-clamp-1">Do you offer website maintenance services ?</p>
                                        </div>
                                    }>
                                        Yes, I can provide ongoing maintenance and support for your website, including updates, bug fixes, and performance optimizations.
                                    </AccordionItem>

                                    <AccordionItem header={
                                        <div className="flex gap-4 items-center">
                                            <TbPuzzle className="text-warning/80" size={26} />
                                            <p className="font-medium line-clamp-1">Can you integrate third-party services ?</p>
                                        </div>
                                    }>
                                        Yes, I can integrate various third-party services like payment gateways, social media logins, maps, and more into your web application.
                                    </AccordionItem>

                                    <AccordionItem header={
                                        <div className="flex gap-4 items-center">
                                            <FaRegUser className="text-warning/80" size={22} />
                                            <p className="font-medium line-clamp-1">Are you open to freelance or full-time work ?</p>
                                        </div>
                                    }>
                                        I do have a freelance account set up. But i'm also open to job opportunities at the moment.
                                    </AccordionItem>

                                    <AccordionItem header={
                                        <div className="flex gap-4 items-center">
                                            <FaCode className="text-warning/80" size={24} />
                                            <p className="font-medium line-clamp-1">Do you work with other tech stacks ?</p>
                                        </div>
                                    }>
                                        No, My expertise lies in the MERN stack, and I'm not currently looking to switch to a different tech stack.
                                    </AccordionItem>

                                    <AccordionItem header={
                                        <div className="flex gap-4 items-center">
                                            <FiServer className="text-warning/80" size={24} />
                                            <p className="font-medium line-clamp-1">Can you host my website ?</p>
                                        </div>
                                    }>
                                        Yes, I can handle the full deployment of your React application, including setting up hosting and connecting it to your custom domain.
                                    </AccordionItem>

                                    <AccordionItem header={
                                        <div className="flex gap-4 items-center">
                                            <IoMailOutline className="text-warning/80" size={24} />
                                            <p className="font-medium line-clamp-1">How can I contact you ?</p>
                                        </div>
                                    }>
                                        You can contact me through the contact form on my portfolio, or you can email me directly at mohammadyasin74630@gmail.com
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>

                    </div>

                </div>
            </SectionObserver>
        </>
    )
}

export default About