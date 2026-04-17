"use client"
import "../lib/pdfWorkerConfig"
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import AutoSizer from "react-virtualized-auto-sizer";
import { usePdfContext } from "./pdfProvider";
import { useEffect } from "react";

function Pdf({ file }) {

  const { setNumPages, pageNumber, setPageNumber, mounted, setMounted, timeoutRef, initialRender } = usePdfContext();

  useEffect(() => { return () => setPageNumber(1) }, [])

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Document className={`w-[95vw] h-[66vh] sm:w-[75vw] md:w-[65vw] lg:w-[55vw] xl:w-[45vw]`} file={file} onLoadSuccess={onDocumentLoadSuccess}>

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
  );
}

export default Pdf