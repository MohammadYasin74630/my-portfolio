import { HiDownload } from "react-icons/hi";
import { TbMail } from "react-icons/tb";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { FaSmile } from "react-icons/fa";
import myPhoto from "../assets/IMG_1.png"
import Image from "next/image";
import * as motion from "motion/react-client"
import { Reoverlay } from 'reoverlay';
import ContactModal from "../components/contactModal";
import SectionObserver from "../components/sectionObserver";


function Banner() {

    const sendMail = () => {
        Reoverlay.showModal(ContactModal)
    }

    return (
        <>
            <SectionObserver section="home">
                <div className="min-h-[80dvh] py-2 grid md:grid-cols-2 gap-4 items-center md:justify-items-center w-11/12 mx-auto ">

                    <div className="max-w-[60ch] smx-auto space-y-2 lg:space-y-4 max-lg:order-1 ">

                        <p className="bg-base-200 max-w-max py-1.5 px-2.5 rounded-full border border-base-content/30 font-medium my-6">👋 Hello ! I'm</p>
                        <h1 className="text-4xl min-[350px]:text-5xl min-[1020px]:text-6xl 2xl:text-8xl font-bold tracking-wider max-xl:leading-16s">MOHAMMAD <br /> <span className="text-warning/80">YASIN</span></h1>

                        <div className="my-5">
                            <h2 className="text-lg min-[350px]:text-xl lg:text-2xl mb-7">I build Next.js web applications for startups and small businesses.</h2>
                            <blockquote className="text-md xl:text-lg text-base-content/95 max-w-[45ch] border-l-4 border-base-content/20 pl-4 md:max-[965px]:hidden">I specialize in developing interactive web interfaces, designing REST APIs, and developing dynamic web applications. </blockquote>
                        </div>

                        <motion.a href="https://drive.google.com/file/d/1IVrxIPB-1K898tNtmOd2IzOxQgYX96AD/view?usp=drive_link" target="_blank"
                            className="inline-flex items-center gap-1 min-[862px]:text-lg lg:text-xl font-sans font-semibold bg-base-content text-base-100 px-4 py-2 min-[862px]:px-6 min-[862px]:py-3 rounded-lg cursor-pointer mt-2 mr-2 shadow-sm shadow-base-content/20"
                            whileTap={{ scale: 0.9 }}
                        >
                            <HiDownload />
                            <span>GET RESUME</span>
                        </motion.a>

                        <motion.button
                            className="inline-flex items-center gap-2 min-[862px]:text-lg lg:text-xl font-sans font-semibold text-base-content bg-base-200 px-4 py-2 min-[862px]:px-6 min-[862px]:py-3 rounded-lg cursor-pointer mt-2 shadow-sm shadow-base-content/20"
                            whileTap={{ scale: 0.9 }}
                            onClick={sendMail}
                        >
                            <TbMail className="mt-1 scale-125" size={16} />
                            <span>CONTACT ME</span>
                        </motion.button>

                    </div>

                    <div className="relative lg:ml-auto">
                        <div className="w-2/3 h-2/3 absolute -top-8 -left-8 rounded-3xl border-2 border-warning/20"></div>
                        <motion.div
                            className="rounded-sm max-w-md max-h-[450px] mx-auto shadow-sm shadow-base-content/10 relative opacity-5s"
                            animate={{
                                y: [0, 4],
                            }}
                            transition={{
                                duration: 1.5,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                            style={{ willChange: "transform" }}
                        >
                            <div className="p-10 mb-5 animated-bg-color rounded-2xl">
                                <Image className="object-cover object-top relative -top-4" src={myPhoto} alt="dev's photo" loading="eager" />
                            </div>

                            <div className="bg-base-100 shadow-xs grid grid-cols-3 gap-4 p-6 rounded-xl absolute -bottom-1 md:-bottom-7 left-1/2 -translate-x-1/2 w-[108%] w-maxs">
                                <div className="flex items-center gap-3">
                                    <IoBriefcaseOutline className="bg-warning text-base-100 p-2 rounded-full min-w-8 max-xl:hidden" size={32} />
                                    <div>
                                        <p className="text-lg font-bold">2+</p>
                                        <p className="text-[9px] lg:text-[10px] -mt-1">Years Experience</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaCode className="bg-warning text-base-100 p-2 rounded-full min-w-8 max-xl:hidden" size={32} />
                                    <div>
                                        <p className="text-lg font-bold">10+</p>
                                        <p className="text-[9px] lg:text-[10px] -mt-1">Projects Finished</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaSmile className="bg-warning text-base-100 p-2 rounded-full min-w-8 max-xl:hidden" size={32} />
                                    <div>
                                        <p className="text-lg font-bold">5+</p>
                                        <p className="text-[9px] lg:text-[10px] -mt-1">Happy Clients</p>
                                    </div>
                                </div>
                            </div>

                        </motion.div>

                    </div>

                </div>
            </SectionObserver>
        </>
    )
}

export default Banner