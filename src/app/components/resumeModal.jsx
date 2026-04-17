"use client"
import 'reoverlay/lib/ModalWrapper.css';
import ModalWrapper from "./modalWraper";
import Pdf from './pdf';
import { usePdfContext } from './pdfProvider';
import { MdArrowCircleLeft } from "react-icons/md";
import { MdArrowCircleRight } from "react-icons/md";
import * as motion from "motion/react-client"

const ResumeModal = ({ file }) => {

    const { numPages, pageNumber, setPageNumber, initialRender, timeoutRef, setMounted } = usePdfContext();

    function prev() {
        if (pageNumber > 1) {
            if (initialRender.current > 0) {
                initialRender.current = 1
                timeoutRef.current = setTimeout(() => {
                    setMounted(false)
                    setPageNumber(prev => {
                        if (prev > 1) return prev - 1
                        return prev
                    })
                }, 250);
            }
            else {
                clearTimeout(timeoutRef.current)
                setMounted(false)
                setPageNumber(prev => prev - 1)
            }
        }
    }

    function next() {
        if (pageNumber < numPages) {
            if (initialRender.current > 0) {
                initialRender.current = 1
                timeoutRef.current = setTimeout(() => {
                    setMounted(false)
                    setPageNumber(prev => {
                        if (prev < numPages) return prev + 1
                        return prev
                    })
                }, 250);
            }
            else {
                clearTimeout(timeoutRef.current)
                setMounted(false)
                setPageNumber(prev => prev + 1)
            }
        }
    }

    return (
        <ModalWrapper
            bg="bg-white"
            outsideEl={
                <div className="text-base-100 flex justify-center items-center gap-2 my-2">
                    <motion.button
                        className={`disabled:opacity-50`}
                        whileTap={{ scale: 0.9 }}
                        onClick={prev}
                        disabled={pageNumber === 1}
                    >
                        <MdArrowCircleLeft className="text-3xl bg-base-100 text-base-content rounded-full select-none shadow-sm cursor-pointer" />
                    </motion.button>

                    <p className="text-xl font-sans font-medium text-nowrap">{pageNumber} of {numPages || 0} </p>

                    <motion.button
                        className={`disabled:opacity-50`}
                        whileTap={{ scale: 0.9 }}
                        onClick={next}
                        disabled={pageNumber === numPages}
                    >
                        <MdArrowCircleRight className="text-3xl bg-base-100 text-base-content rounded-full select-none shadow-sm cursor-pointer" />
                    </motion.button>

                </div>
            }
        >
            <Pdf file={file} />
        </ModalWrapper>
    )
}

export default ResumeModal