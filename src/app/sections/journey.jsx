import SectionObserver from "../components/sectionObserver"
import { PiBookOpenLight } from "react-icons/pi";
import { SlGraduation } from "react-icons/sl";
import { RiBriefcaseFill } from "react-icons/ri";
import { MdLaptopMac } from "react-icons/md";
import pHero from "../assets/my certificates/pHero-certificate.png"
import aspire from "../assets/my certificates/internship-certificate 2.png"
import dyd from "../assets/my certificates/demo-certificate.png"
import Image from "next/image"

const AchievementIcon = (props) => (
    <svg
        viewBox="126 83 251 356"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        style={{
            maxHeight: 500,
        }}
        width={251}
        height={356}
        {...props}
    >
        <path
            d="M505.251 176.166C534.107 173.415 557.346 187.001 570.514 212.52C582.765 205.937 593.276 202.145 607.457 202.206C624.169 202.402 640.119 209.221 651.809 221.166C666.393 235.888 670.037 251.635 669.959 271.42C685.18 271.811 695.297 272.858 708.654 281.306C722.691 290.185 733.329 304.567 736.911 320.84C740.547 338.098 737.151 356.093 727.474 370.838C738.507 376.348 748.646 385.608 754.76 396.35C763.402 411.669 765.61 429.792 760.899 446.739C755.492 466.129 744.355 476.698 727.54 486.109C730.335 491.551 732.409 496.126 734.484 501.869C747.132 536.86 728.055 574.689 691.98 584.476C684.186 586.591 678.52 586.67 670.527 586.905L670.514 589.691C670.295 612.682 663.505 624.294 647.496 640.017C649.008 645.487 651.231 651.683 652.917 657.291C657.793 673.861 662.788 690.396 667.902 706.894L694.523 796.563L704.929 830.831C707.646 839.764 715.905 856.657 704.847 861.224C703.385 861.828 698.97 860.997 697.547 860.47C675.171 852.187 652.083 840.614 629.443 833.29C627.948 836.183 625.711 839.323 623.788 842.035C612.22 858.354 601.384 875.177 589.622 891.343C584.065 898.982 575.892 897.274 572.892 888.375C570.646 881.709 568.66 874.954 566.627 868.149L557.26 837.624L528.487 741.494C524.136 726.896 519.935 711.708 515.253 697.264C514.722 695.16 514.171 693.061 513.599 690.967C508.399 705.754 504.919 718.881 500.337 733.575L469.042 835.649C465.391 847.907 461.631 860.133 457.766 872.325C455.965 878.025 453.316 889.986 449.489 893.9C444.016 898.129 438.707 895.642 435.416 890.957C422.019 871.893 407.368 852.707 394.686 833.24C383.205 837.038 327.651 863.064 320.866 861.127C318.599 860.48 316.608 858.497 315.474 856.494C314.32 854.454 314.108 852.504 314.556 850.23C315.731 844.264 317.99 838.267 319.811 832.453C323.286 821.469 326.706 810.468 330.071 799.45L364.227 685.441C368.496 670.908 374.318 654 377.851 639.597C360.078 622.542 356.513 610.07 355.022 586.489C351.556 586.539 347.866 586.608 344.519 586.261C309.767 582.657 283.866 551.585 287.994 516.593C289.472 504.062 292.822 496.769 298.788 485.874C284.215 478.608 273.045 467.795 266.919 452.504C260.505 436.464 260.667 418.543 267.369 402.621C272.611 390.412 285.757 376.136 297.971 371.323C296.323 368.102 294.751 364.91 293.176 361.624C276.56 326.945 295.668 284.918 332.519 274.238C340.76 271.85 347.611 271.689 356.22 271.526C356.033 256.04 358.146 243.57 366.915 230.315C376.13 216.413 390.56 206.813 406.942 203.684C422.751 200.575 441.069 203.629 454.464 212.707C467.253 190.943 480.052 180.285 505.251 176.166ZM377.787 285.474L377.47 286.125C371.604 297.973 364.636 291.365 355.314 290.534C339.107 289.089 320.967 297.509 312.63 311.759C306.355 322.313 304.658 334.97 307.93 346.805C309.056 350.983 310.748 354.988 312.958 358.708C315.175 362.375 318.088 365.721 320.422 369.348C329.313 383.168 310.531 385.602 301.979 390.978C285.386 401.408 277.944 419.958 282.296 438.94C285.051 450.443 292.284 460.37 302.388 466.519C308.197 470.07 321.791 473.044 323.957 478.71C326.349 484.969 317.96 492.339 314.473 497.237C307.352 507.319 304.748 519.91 307.285 531.99C311.7 552.625 328.242 566.704 349.257 568.07C354.189 568.391 359.745 566.994 364.649 566.4C380.007 564.54 375.325 579.59 374.343 588.145C369.737 628.304 421.883 651.504 449.462 623.181C454.315 618.204 456.185 617.357 462.964 617.943L463.53 618.409C470.156 623.945 467.791 627.718 470.936 634.409C479.92 653.517 496.701 664.326 517.643 662.445L518.629 662.347C531.598 659.906 541.804 654.19 549.405 643.157C551.356 640.328 552.982 637.287 554.25 634.093C556.84 627.431 558.258 612.427 570.753 619.514C576.004 623.179 579.877 627.29 585.557 630.431C615.607 647.043 653.82 623.498 651.882 589.206C651.252 578.059 644.383 561.599 665.252 566.579C681.163 570.375 697.234 565.061 708.232 553.022C716.086 544.268 720.117 532.739 719.426 520.998C719.053 514.09 717.111 507.358 713.749 501.312C711.611 497.483 708.692 494.151 705.919 490.789C693.491 475.72 707.721 473.877 718.512 469.091C747.471 456.247 753.661 417.535 730.537 395.941C727.297 392.953 723.67 390.416 719.753 388.396C714.906 385.917 702.582 382.98 702.742 376.283C702.9 369.682 710.452 363.239 713.241 357.455C730.108 327.9 709.143 290.157 674.726 290.558C663.419 290.52 645.695 299.481 649.572 278.818C652.628 264.449 651.979 251.223 642.954 239.064C628.177 219.157 597.51 215.024 578.428 231.013C560.362 246.15 559.874 236.309 553.372 220.936C547.845 208.02 536.399 198.586 522.666 195.627C517.944 194.586 513.093 194.257 508.274 194.65C495.343 196.494 485.485 201.615 477.543 212.175C475.257 215.192 473.323 218.459 471.778 221.914C469.381 227.388 467.729 237.219 460.962 238.248C457.319 238.802 454.932 237.367 452.195 235.166C440.577 224.756 430.223 219.867 413.96 221.733C402.468 222.953 391.963 228.786 384.851 237.897C377.444 247.431 374.118 259.513 375.603 271.494C376.148 275.848 377.557 281.395 377.787 285.474ZM440.24 864.348C442.575 855.618 445.622 846.628 448.282 837.947L459.144 801.599L496.307 679.363C479.592 673.485 471.501 669.23 460.266 654.103C458.569 651.819 455.966 644.777 454.332 643.961C434.664 654.925 416.674 658.437 394.883 650.656C377.138 706.409 361.558 763.17 344.01 819.019C342.536 823.709 340.292 830.001 339.378 834.674C351.779 831.048 364.745 824.488 376.857 819.795C383.237 817.323 389.342 813.774 396.116 812.355C399.351 811.621 401.587 812.76 404.127 814.727C408.227 819.82 411.66 825.685 415.66 830.619C423.981 840.882 431.368 854.803 440.24 864.348ZM631.229 650.532C610.387 657.162 595.006 656.722 574.945 646.538C573.632 645.871 572.228 645.189 571.026 644.339C561.499 661.636 549.058 673.855 529.625 679.478C537.132 703.342 543.63 726.714 550.774 750.501L585.487 864.289C591.858 854.144 599.264 844.004 606.145 834.15C609.793 828.926 617.62 815.946 622.3 812.882C623.66 812.419 626.07 811.508 627.493 812.016C647.261 819.085 666.077 828.431 686.125 834.882C674.235 789.429 657.848 744.21 645.613 698.715C641.287 682.632 635.734 666.619 631.229 650.532Z"
            transform="scale(0.488281 0.488281)"
            fill="currentColor"
        />
        <path
            d="M510.776 289.617C513.007 289.568 515.097 289.668 517.216 290.425C519.857 291.373 522.15 293.097 523.794 295.371C527.2 300.097 533.673 314.134 536.718 320.275C544.498 335.962 553.326 352.027 560.728 367.801C574.339 369.442 589.32 372.697 603.198 374.548C615.341 376.039 627.085 378.62 639.164 380.431C650.297 382.101 654.513 395.88 648.371 403.254C642.17 410.699 631.975 419.267 624.513 426.016L589.966 457.712L599.063 512.467C600.37 520.192 605.619 542.267 602.7 548.084C601.139 551.208 598.347 553.539 594.994 554.517C593.158 555.034 590.53 555.155 588.763 554.425C580.692 551.09 572.825 546.119 565.182 541.906C548.125 532.663 531.145 523.279 514.243 513.755C509.278 513.392 448.709 552.086 435.349 555.259C420.777 552.034 421.891 542.852 424.025 531.152C428.452 506.882 431.536 482.014 436.206 457.799C423.567 445.922 410.722 434.268 397.676 422.841C390.815 416.729 382.727 410.239 376.874 403.529C370.829 396.709 374.391 382.977 383.433 381.167C410.236 375.804 438.195 372.753 465.08 367.757C477.951 344.759 487.633 319.335 500.507 296.269C502.699 292.34 506.536 290.465 510.776 289.617Z"
            transform="scale(0.488281 0.488281)"
            fill="currentColor"
        />
    </svg>
);

function Journey() {
    return (
        <>
            <SectionObserver section="journey">
                <div className="grid md:grid-cols-2 gap-4 w-11/12 mx-auto min-h-[90dvh] min-[1120px]:items-center mt-20 mb-10 ">

                    <div className="max-w-[60ch] xl:mx-auto">

                        <h2 className="text-2xl font-bold w-11/12">My Journey</h2>
                        <p className="mt-2 mb-3 font-medium text-base-content/60">A timeline of my learning, growth, and achievements.</p>

                        <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
                            <li>
                                <div className="timeline-middle bg-primary-content p-2 rounded-full">
                                    <PiBookOpenLight className="text-white" size={24} />
                                </div>
                                <div className="timeline-end md:mb-2 mt-4 ml-4">
                                    <time className="text-xs text-base-100 bg-primary-content/80 py-1 px-2 rounded-lg">January 2021</time>
                                    <div className="text-lg font-semibold mt-2 mb-0.5 leading-normal">Started Learning Web Development</div>
                                    <p className="text-sm leading-normal font-medium text-base-content/60">Started learning web development from YouTube and self-practice. Spent around two years building a strong foundation in HTML, CSS, JavaScript, ReactJS, ExpressJS responsive design, and programming fundamentals.</p>
                                </div>
                                <hr className="bg-primary-content/50" />
                            </li>
                            <li>
                                <hr className="bg-primary-content/50" />
                                <div className="timeline-middle bg-primary-content p-2 rounded-full">
                                    <SlGraduation className="text-white" size={24} />
                                </div>
                                <div className="timeline-end md:mb-2 mt-4 ml-4">
                                    <time className="text-xs text-base-100 bg-primary-content/80 py-1 px-2 rounded-lg">July 2024</time>
                                    <div className="text-lg font-semibold mt-2 mb-0.5 leading-normal">Complete Web Development Course</div>
                                    <p className="text-sm leading-normal font-medium text-base-content/60">Completed a 6-month MERN Stack course from Programming Hero. Built multiple projects and my portfolio during this time, earned a certificate, and got selected for the SCIC program.</p>
                                </div>
                                <hr className="bg-primary-content/50" />
                            </li>
                            <li>
                                <hr className="bg-primary-content/50" />
                                <div className="timeline-middle bg-primary-content p-2 rounded-full">
                                    <RiBriefcaseFill className="text-white" size={24} />
                                </div>
                                <div className="timeline-end md:mb-2 mt-4 ml-4">
                                    <time className="text-xs text-base-100 bg-primary-content/80 py-1 px-2 rounded-lg">July 2025</time>
                                    <div className="text-lg font-semibold mt-2 mb-0.5 leading-normal">MERN Stack Internship — Aspire Internship, CUET</div>
                                    <p className="text-sm leading-normal font-medium text-base-content/60">Completed a 4-month MERN Stack internship at Chittagong University of Engineering & Technology. Worked on converting Figma designs into responsive frontends, deploying projects to cPanel, and leading a frontend team for a CMS project in the final month.</p>
                                </div>
                                <hr className="bg-primary-content/50" />
                            </li>
                            <li>
                                <hr className="bg-primary-content/50" />
                                <div className="timeline-middle bg-primary-content p-2 rounded-full">
                                    <MdLaptopMac className="text-white" size={24} />
                                </div>
                                <div className="timeline-end md:mb-2 mt-4 ml-4">
                                    <time className="text-xs text-base-100 bg-primary-content/80 py-1 px-2 rounded-lg">April 2026</time>
                                    <div className="text-lg font-semibold mt-2 mb-0.5 leading-normal">Freelancing Training — DYD E-Learning & Earning LTD</div>
                                    <p className="text-sm leading-normal font-medium text-base-content/60">Joined a 3-month freelancing program under Department of Youth Development. Learned WordPress, SEO, and digital marketing, and received a government-verifiable certificate after completion.</p>
                                </div>
                            </li>
                        </ul>

                    </div>

                    <div>

                        <div className="flex items-center gap-4 mb-2">
                            <AchievementIcon className="text-primary-content size-8 -mt-2" />

                            <p className="text-lg font-semibold -ml-1">Certificates</p>
                            <hr className="w-full border-gray-300" />
                        </div>

                        <div className="grid lg:grid-cols-2 gap-2 justify-center ">

                            <Image className="size-full object-cover rounded-sm p-2 bg-base-200" src={pHero} alt="programming hero course certificate" />
                            <Image className="size-full rounded-sm p-2 bg-base-200" src={aspire} alt="aspire internship certificate" />
                            <Image className="size-full object-cover rounded-sm p-2 bg-base-200" src={dyd} alt="DYD freelance course certificate" />

                        </div>

                    </div>

                </div>
            </SectionObserver>
        </>
    )
}

export default Journey