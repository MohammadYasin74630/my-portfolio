"use client"
import "../lib/pdfWorkerConfig"
import { useRef, useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { MdArrowCircleLeft } from "react-icons/md";
import { MdArrowCircleRight } from "react-icons/md";
import * as motion from "motion/react-client"
import AutoSizer from "react-virtualized-auto-sizer";

function Pdf({file}) {

  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [mounted, setMounted] = useState(true);
  const timeoutRef = useRef(null);
  const initialRender = useRef(0)

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

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="w-min ">

      <div className="flex justify-center items-center gap-2 my-2">
        <motion.button
          className={`disabled:opacity-50`}
          whileTap={{ scale: 0.9 }}
          onClick={prev}
          disabled={pageNumber === 1}
        >
          <MdArrowCircleLeft className="text-3xl text-base-content rounded-full select-none shadow-sm cursor-pointer" />
        </motion.button>

        <p className="text-xl font-sans font-medium text-nowrap">{pageNumber} of {numPages || 0} </p>

        <motion.button
          className={`disabled:opacity-50`}
          whileTap={{ scale: 0.9 }}
          onClick={next}
          disabled={pageNumber === numPages}
        >
          <MdArrowCircleRight className="text-3xl text-base-content rounded-full select-none shadow-sm cursor-pointer" />
        </motion.button>

      </div>

      <Document className="w-[95vw] h-[80vh] sm:w-[75vw] md:w-[65vw] lg:w-[55vw] xl:w-[45vw]" file={file} onLoadSuccess={onDocumentLoadSuccess}>

        <AutoSizer>
          {({ width }) => (
            <Page pageNumber={pageNumber} width={width} renderTextLayer={mounted} onRenderSuccess={() => {
              timeoutRef.current = setTimeout(() => {
                setMounted(true)
                initialRender.current = 0
              }, initialRender.current === 0 ? 300 : 500);
            }} />
          )}
        </AutoSizer>;

      </Document>

    </div >
  );
}

export default Pdf