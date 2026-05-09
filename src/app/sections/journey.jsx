import SectionObserver from "../components/sectionObserver"
import pHero from "../assets/my certificates/pHero-certificate.png"
import aspire from "../assets/my certificates/internship-certificate 2.png"
import dyd from "../assets/my certificates/demo-certificate.png"
import Image from "next/image"

function Journey() {
    return (
        <>
            <SectionObserver section="journey">
                <div className="grid md:grid-cols-2 gap-4 w-11/12 mx-auto min-h-[90dvh] min-[1120px]:items-center mt-20 mb-10 ">

                    <div className="max-w-[60ch] xl:mx-auto">

                        <h2 className="text-2xl font-bold w-11/12 mb-5">My journey</h2>

                        <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
                            <li>
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="timeline-end md:mb-10">
                                    <time className="font-mono italic">January 2021</time>
                                    <div className="text-lg font-semibold">Started Learning Web Development</div>
                                    Started learning web development from YouTube and self-practice. Spent around two years building a strong foundation in HTML, CSS, JavaScript, ReactJS, ExpressJS responsive design, and programming fundamentals.
                                </div>
                                <hr className="bg-base-content" />
                            </li>
                            <li>
                                <hr className="bg-base-content" />
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="timeline-end md:mb-10">
                                    <time className="font-mono italic">July 2024</time>
                                    <div className="text-lg font-semibold">Complete Web Development Course</div>
                                    Completed a 6-month MERN Stack course from Programming Hero. Built multiple projects and my portfolio during this time, earned a certificate, and got selected for the SCIC program.
                                </div>
                                <hr className="bg-base-content" />
                            </li>
                            <li>
                                <hr className="bg-base-content" />
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="timeline-end md:mb-10">
                                    <time className="font-mono italic">July 2025</time>
                                    <div className="text-lg font-semibold">MERN Stack Internship — Aspire Internship, CUET</div>
                                    Completed a 4-month MERN Stack internship at Chittagong University of Engineering & Technology. Worked on converting Figma designs into responsive frontends, deploying projects to cPanel, and leading a frontend team for a CMS project in the final month.
                                </div>
                                <hr className="bg-base-content" />
                            </li>
                            <li>
                                <hr className="bg-base-content" />
                                <div className="timeline-middle">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="timeline-end md:mb-10">
                                    <time className="font-mono italic">April 2026</time>
                                    <div className="text-lg font-semibold">Freelancing Training — DYD E-Learning & Earning LTD</div>
                                    Joined a 3-month freelancing program under Department of Youth Development. Learned WordPress, SEO, and digital marketing, and received a government-verifiable certificate after completion.
                                </div>
                            </li>
                        </ul>

                    </div>

                    <div className="flex flex-wrap gap-2 items-center justify-center">

                        <Image className="max-w-80 rounded-sm p-2" src={pHero} alt="programming hero course certificate" />
                        <Image className="max-w-80 rounded-sm p-2" src={aspire} alt="aspire internship certificate" />
                        <Image className="max-w-80 rounded-sm p-2" src={dyd} alt="DYD freelance course certificate" />

                    </div>

                </div>
            </SectionObserver>
        </>
    )
}

export default Journey