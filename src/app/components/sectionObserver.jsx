"use client"
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { useNavContext } from './navProvider';

function SectionObserver({ section, children }) {
    const { setActiveSection } = useNavContext();
    const { ref, inView } = useInView({
        threshold: 0.3,
    });

    useEffect(() => {
        if (inView) {
            setActiveSection(section);
        }
    }, [inView, section]);

    return (
        <div ref={ref}>
            {children}
        </div>
    );
}

export default SectionObserver