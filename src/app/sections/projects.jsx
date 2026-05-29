import { useRef } from "react"
import { useScroll, useTransform } from "motion/react"
import SectionObserver from "../components/sectionObserver"
import { projectsObj } from "@/lib/projects"
import ProjectCard from "../components/projectCard"

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

    const scaleObj = {
        chillgamerScale,
        vroomrentsScale,
        resiflowScale,
        discountproScale
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

                    {
                        projectsObj.map((obj, idx) => <ProjectCard cardScale={scaleObj[obj.scale]} projectInfo={obj} key={idx} />)
                    }

                </div>
            </SectionObserver>
        </>
    )
}

export default Projects