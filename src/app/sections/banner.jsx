import { HiDownload } from "react-icons/hi";
import myPhoto from "../assets/IMG_1.png"
import Image from "next/image";
import * as motion from "motion/react-client"


function Banner() {
    return (
        <>
            <div className="min-h-[80dvh] py-2 flex max-md:flex-col gap-4 items-center justify-center w-11/12 mx-auto " id="home">

                <div className="mx-auto space-y-2 lg:space-y-4 max-lg:order-1 ">
                    <div className="text-2xl min-[350px]:text-4xl min-[1020px]:text-6xl">
                        <p className="font-bold mb-2">Hello ! I'm</p>
                        <h1 className="font-bold">Mohammad Yasin,</h1>
                    </div>
                    <div className="mt-5 xl:mt-10">
                        <h2 className="text-lg min-[350px]:text-xl lg:text-2xl mb-3">A MERN Stack Developer Based in Bangladesh</h2>
                        <blockquote className="text-md xl:text-lg text-base-content/95 max-w-[45ch] border-l-4 border-base-content/20 pl-4">I specialize in developing interactive web interfaces, designing REST APIs, and developing dynamic web applications. </blockquote>
                    </div>
                    <motion.a href="/test.pdf" download
                        className="inline-flex items-center gap-1 md:text-xl font-sans font-semibold bg-accent text-base-100 px-6 py-3 rounded-lg cursor-pointer mt-2 shadow-sm shadow-base-content/20"
                        whileTap={{ scale: 0.9 }}
                    >
                        <span>GET RESUME</span>
                        <HiDownload />
                    </motion.a>
                </div>

                <motion.div
                    className="rounded-sm overflow-hidden max-w-md max-h-[410px] mx-auto shadow-sm shadow-base-content/10"
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
                    <Image className="object-cover object-top" src={myPhoto} alt="dev's photo" />
                </motion.div>

            </div>
        </>
    )
}

export default Banner