"use client"
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { useNavContext } from './navProvider';

function SectionObserver({ section, children }) {
    const { setActiveSection } = useNavContext();

    const { ref, inView } = useInView({
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
    });

    useEffect(() => {
        if (inView) {
            setActiveSection(section);
        }
    }, [inView, section, setActiveSection]);

    return (
        <div ref={ref}>
            {children}
        </div>
    );
}

export default SectionObserver;