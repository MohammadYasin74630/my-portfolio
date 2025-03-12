import react from "@/app/assets/skills badge/react.svg"
import express from "@/app/assets/skills badge/express.svg"
import mongodb from "@/app/assets/skills badge/mongodb.svg"
import firebase from "@/app/assets/skills badge/firebase.svg"
import tailwind from "@/app/assets/skills badge/tailwindcss.svg"
import git from "@/app/assets/skills badge/git.svg"
import Image from "next/image"
import { Accordion, AccordionItem as Item } from '@szhsin/react-accordion';
import styles from "./accordion.module.css";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link"
import { TiInfoLarge } from "react-icons/ti";
import { FaQuestion } from "react-icons/fa";
import { PiStarFourFill } from "react-icons/pi";

const AccordionItem = ({ header, ...rest }) => (
    <Item
        {...rest}
        header={
            <>
                {header}
                <IoIosArrowDown className={styles.chevron} />
            </>
        }
        className={styles.item}
        buttonProps={{
            className: ({ isEnter }) =>
                `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
        }}
        contentProps={{ className: styles.itemContent }}
        panelProps={{ className: styles.itemPanel }}
    />
);


function About() {
    return (
        <>
            <div className="grid md:grid-cols-2 gap-4 w-11/12 mx-auto min-h-[90dvh] min-[1120px]:items-center my-10">

                <div className=" max-w-[60ch] xl:mx-auto">

                    <div className="space-y-4 leading-relaxed">
                        <h2 className="text-2xl font-bold inline-flex gap-1.5 items-center">
                            <TiInfoLarge className="text-3xl" /> About Me
                        </h2>
                        <p className="pl-4">I'm a <strong>22-year-old MERN stack developer</strong> with a strong foundation in the basics of web development.</p>

                        <p className="pl-4">As someone who spends most of my time in front of a computer, I've developed a knack for <strong>learning quickly</strong> and <strong>solving tech-related challenges</strong>. Whether it's <strong>debugging code</strong> or assisting friends with their PC issues through TeamViewer, technology has always been a natural strength of mine.</p>
                    </div>

                    <div className="mt-8 space-y-4 leading-relaxed">
                        <h2 className="text-2xl font-bold inline-flex gap-2 items-center">
                            <PiStarFourFill className="text-xl" /> Skills
                        </h2>
                        <p className="pl-4">Before enrolling in the MERN stack course by <Link href="https://www.programming-hero.com/" target='_blank'>Programming Hero</Link>, I spent 2 years self-learning web development. Now, I specialize in:</p>
                        <div className="flex flex-wrap gap-2 pl-4">
                            <Image className="rounded-sm border border-base-100" src={react} alt="react logo" />
                            <Image className="rounded-sm border border-base-100/50" src={express} alt="expressJs logo" />
                            <Image className="rounded-sm border border-base-100/50" src={mongodb} alt="mongodb logo" />
                            <Image className="rounded-sm border border-base-100/50" src={firebase} alt="firebase logo" />
                            <Image className="rounded-sm border border-base-100/50" src={tailwind} alt="tailwind logo" />
                            <Image className="rounded-sm border border-base-100/50" src={git} alt="git logo" />
                        </div>
                    </div>

                </div>

                <div>

                    <div className="leading-relaxed max-md:mt-8 ">
                        <h2 className="text-2xl font-bold inline-flex gap-2 items-center">
                            <FaQuestion className="text-xl" /> FAQs
                        </h2>
                        <div className={`${styles.accordion} ml-4`}>
                            <Accordion transition transitionTimeout={250}>
                                <AccordionItem header="What type of services do you offer?">
                                    <ol className="list-decimal list-inside space-y-1">
                                        <li>Converting PSD/Figma designs into responsive, interactive React applications.</li>
                                        <li>Designing and developing RESTful APIs using Express.js and MongoDB.</li>
                                        <li>Creating complete web applications secured with Firebase & JWT.</li>
                                    </ol>
                                </AccordionItem>

                                <AccordionItem header="Do you offer website maintenance services?">
                                    Yes, I can provide ongoing maintenance and support for your website, including updates, bug fixes, and performance optimizations.
                                </AccordionItem>

                                <AccordionItem header="Can you integrate third-party services?">
                                    Yes, I can integrate various third-party services like payment gateways, social media logins, maps, and more into your web application.
                                </AccordionItem>

                                <AccordionItem header="Are you open to freelance or full-time work?">
                                    I don't have a freelance account set up. So i'm only open to job opportunities at the moment.
                                </AccordionItem>

                                <AccordionItem header="Do you work with other tech stacks?">
                                    No, My expertise lies in the MERN stack, and I'm not currently looking to switch to a different tech stack.
                                </AccordionItem>

                                <AccordionItem header="Can you host my website?">
                                    I can deploy react project on Netlify, Vercel, or Surge, but I don't have deep DevOps experience.
                                </AccordionItem>

                                <AccordionItem header=" How can I contact you?">
                                    You can contact me through the contact form on my portfolio, or you can email me directly at mohammadyasin74630@gmail.com
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default About