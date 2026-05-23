"use client";

import { useEffect, useRef } from "react";

export default function VideoBackground() {

    const videoRef = useRef();

    useEffect(() => {
        videoRef.current.playbackRate = 0.5;
    }, [])

    return <>
        <video
            autoPlay
            muted
            loop
            playsInline
            play
            className="fixed inset-0 left-1/2 -translate-x-1/2 -z-10 h-full w-full max-w-[2000px] object-cover"
            ref={videoRef}
        >
            <source src="/background-video-faded.mp4" type="video/mp4" />
        </video>
    </>
}