"use client"
import { useEffect, useRef, useState } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import { Reoverlay } from 'reoverlay';
import * as motion from "motion/react-client"
import style from "./modalWrapper.module.css"
import { useSmoothScroller } from './lenisProvider';

const ModalWrapper = ({ children, close, setClose, bg }) => {

    const lenisRef = useSmoothScroller()
    const [isClosing, setIsClosing] = useState(false);
    const wrapperElement = useRef(null)

    const handleClose = () => {
        if (isClosing) return;
        setIsClosing(true);
        setTimeout(() => {
            Reoverlay.hideModal();
        }, 300);
    }

    const handleClickOutside = (event) => {
        if (event.target === wrapperElement.current) {
            handleClose()
        }
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && !isClosing) {
                handleClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isClosing]);

    useEffect(() => {
        if (close) {
            handleClose()
            setClose(false)
        }
    })


    useEffect(() => {
        if (lenisRef.current) {
            if (!isClosing) {
                lenisRef.current.stop();
            } else {
                lenisRef.current.start();
            }
        }
    }, [isClosing]);


    // useEffect(() => {
    //     if (!isClosing) {
    //         const scrollPosition = window.scrollY;
    //         setScrollPosition(scrollPosition);
    //         document.body.style.height = "100vh";
    //         document.body.style.overflow = "hidden";
    //         setTimeout(() => document.body.scrollTo(0, scrollPosition), 0);
    //     } else {
    //         document.body.style.overflow = "";
    //         document.body.style.height = "";
    //         setTimeout(() => window.scrollTo(0, scrollPosition), 0);
    //     }

    //     return () => {
    //         document.body.style.height = "";
    //         document.body.style.overflow = "";
    //         setTimeout(() => window.scrollTo(0, scrollPosition), 0);
    //     };
    // }, [isClosing]);

    const stopScrollPropagation = (event) => event.stopPropagation();

    return (
        <motion.div
            ref={wrapperElement}
            role="dialog"
            className={`${style.reOverlay__modalWrapper}`}
            onClick={handleClickOutside}
            initial={isClosing ? { backgroundColor: "rgba(0, 0, 0, 0.6)" } : { backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={isClosing ? { backgroundColor: "rgba(0, 0, 0, 0)" } : { backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
            }}
        >

            <motion.div
                className='relative'
                initial={isClosing ? { opacity: 0.9, scale: 1 } : { opacity: 0, scale: 0.4 }}
                animate={isClosing ? { opacity: 0, scale: 0.4 } : { opacity: 0.9, scale: 1 }}
                transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
            >

                <button className='absolute -top-3 -right-3 bg-error text-base-100 rounded-full cursor-pointer z-10' onClick={handleClose}>
                    <IoCloseCircleOutline size={30} />
                </button>

                <div className={`${bg || "bg-base-100"} relative rounded-sm overflow-hidden shadow-sm `}>
                    <div
                        className='overflow-auto'
                        onWheel={stopScrollPropagation}
                        onTouchMove={stopScrollPropagation}
                    >
                        {children}
                    </div>
                </div>

            </motion.div>

        </motion.div >
    )
}

export default ModalWrapper