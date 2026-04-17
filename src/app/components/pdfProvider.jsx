"use client"
import React, { createContext, useContext, useRef,useState } from 'react'

const PdfContext = createContext();

export default function PdfProvider({ children }) {
    
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [mounted, setMounted] = useState(true);
  const timeoutRef = useRef(null);
  const initialRender = useRef(0)

    const data = {
        pageNumber,
        numPages,
        mounted,
        setNumPages,
        setPageNumber,
        setMounted,
        timeoutRef,
        initialRender
    }

    return (
        <PdfContext value={data}>
            {children}
        </PdfContext>
    )
}

export const usePdfContext = () => useContext(PdfContext);