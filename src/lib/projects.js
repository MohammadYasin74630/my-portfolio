import { Reoverlay } from "reoverlay"
import ResumeModal from "@/app/components/resumeModal"

import chillgamer from "@/app/assets/project images/chillGamer.png"
import vroomrents from "@/app/assets/project images/vroomRents.png"
import resiflow from "@/app/assets/project images/resiflow.png"
import discountPro from "@/app/assets/project images/discountPro.png"

import chillGamerLogo from "@/app/assets/project logos/chill-gamer-logo.png"
import vroomRentsLogo from "@/app/assets/project logos/vroom-rents.webp"
import resiFlowLogo from "@/app/assets/project logos/resiflow.webp"
import discountProLogo from "@/app/assets/project logos/discount-pro-logo.png"

import { chillGamerReq, discountProReq, resiFlowReq, vroomRentsReq } from "@/lib/requirements"


export const projectsObj = [
    {
        id: 1,
        scale: "chillgamerScale",
        top: 0,
        logo: chillGamerLogo,
        logoAlt: "chill gamer logo",
        heading: "ChillGamer",
        shortDescription: "Game review platform",
        pdfFn: () => {
            Reoverlay.showModal(ResumeModal, { file: "/assignment requirement docs/_Assignment Category_ Camellia.pdf" })
        },
        github: "https://github.com/MohammadYasin74630/ChillGamer-Client-Side",
        siteLink: "https://chill-gamer-1.netlify.app",
        screenshot: chillgamer,
        alt: "chill gamer website screenshot",
        overview: "Chill Gamer is a sleek and user-friendly game review platform where gamers can share their thoughts on different games, maintain a personal watchlist, and explore reviews from others. <br /> <br /> The platform ensures a seamless and responsive user experience across all devices.",
        features: ["Supports both dark and light themes.", "Filter game reviews by genre, title (A-Z), rating, year, and order", "Pagination for faster loading and smoother navigation."],
        requirements: chillGamerReq,
        challenges: ["Building whole Authentication UI by myself", "First time making pagination without learning it", "First time doing Sorting & Filtering by myself", "Making sure all section & elements works with Dark/Light mode"],
        mobileDescription: "A Game Review Platform"
    },
    {
        id: 2,
        scale: "vroomrentsScale",
        top: "10vh",
        logo: vroomRentsLogo,
        logoAlt: "Vroom Rents logo",
        heading: "VroomRents",
        shortDescription: "Car rental platform",
        pdfFn: () => {
            Reoverlay.showModal(ResumeModal, { file: "/assignment requirement docs/assignment_category_15.pdf" })
        },
        github: "https://github.com/MohammadYasin74630/VroomRents-client-side",
        siteLink: "https://vroom-rents.web.app",
        screenshot: vroomrents,
        alt: "vroom rents website screenshot",
        overview: "VroomRents is a feature-rich car rental platform designed to simplify the process of booking and managing rental cars. <br /> <br /> With availability tracking, an intuitive booking system, and vendor management features, it offers a seamless experience for both renters and car owners.",
        features: ["Some pages have switchable layout modes that persist across visits.", "Real-time schedule validation prevent overlapping car bookings between users.", "Users can upload any number of images when adding a car listing."],
        requirements: vroomRentsReq,
        challenges: ["Adding extensive Client & Server Side Validation", "Tried to make Role-Based Features by myself", "Making switchable View Mode that persist", "Making the carousel in car details page Responsive"],
        mobileDescription: "A Car Rental Platform"
    },
    {
        id: 3,
        scale: "resiflowScale",
        top: "20vh",
        logo: resiFlowLogo,
        logoAlt: "Resi Flow logo",
        heading: "ResiFlow",
        shortDescription: "Apartment management",
        pdfFn: () => {
            Reoverlay.showModal(ResumeModal, { file: "/assignment requirement docs/assignment12_category_012.pdf" })
        },
        github: "https://github.com/MohammadYasin74630/ResiFlow-client-side",
        siteLink: "https://resiflow.surge.sh",
        screenshot: resiflow,
        alt: "resi flow website screenshot",
        overview: "ResiFlow is a modern, user-friendly Building Management System (BMS) designed to simplify apartment rentals and property management. <br /> <br /> It provides role-based access for users, members, and admins, allowing seamless apartment browsing, agreement applications, rent payments, and announcements.",
        features: ["Unique dashboards for users, members, and admins.", "Payment supports monthly/advance payments with one-time discount codes.", "Used TanStack Query to improve application performance with efficient caching."],
        requirements: resiFlowReq,
        challenges: ["First time building Role-Based Access", "First doing Data caching in client browser", "First time adding a Payment gateway", "Tight Deadline"],
        mobileDescription: "A Building Management System"
    },
    {
        id: 4,
        scale: "discountproScale",
        top: "30vh",
        logo: discountProLogo,
        logoAlt: "Discount Pro logo",
        heading: "DiscountPro",
        shortDescription: "Coupon collection",
        pdfFn: () => {
            Reoverlay.showModal(ResumeModal, { file: "/assignment requirement docs/Assignment-09-005.pdf" })
        },
        github: "https://github.com/MohammadYasin74630/DiscountPro",
        siteLink: "https://discountpro.netlify.app",
        screenshot: discountPro,
        alt: "discount pro website screenshot",
        overview: "Discount PRO is a coupon collecting web application designed to help users find and use discount coupons from popular e-commerce brands in Bangladesh. <br /> <br /> The platform consolidates active promotions in one place, allowing users to easily access and apply discounts while shopping online.",
        features: ["Real-time search with instant filtering as users type.", "First time adding Google social login for authencation.", "Multi-directional carousel - supporting left, right, up, and down navigation."],
        requirements: discountProReq,
        challenges: ["My first project that i built Without any Figma design", "Adding animations as i lacked Animation Skill", 'First time using 3rd party package like <i>"Copy-to-Clipboard"</i>'],
        mobileDescription: "Smart Coupon Collecting Platform"
    }
]