"use client"
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { useNavContext } from './navProvider';

function SectionObserver({ visibleWhen, section, children }) {
    const { setActiveSection } = useNavContext();
    const { ref, inView } = useInView({
        threshold: visibleWhen,
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