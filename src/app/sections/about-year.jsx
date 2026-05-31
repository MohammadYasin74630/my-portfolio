"use client"
import React from 'react'

export default function AboutYear() {
    const curYear = new Date().getFullYear()

    return (
        <p className="text-lg">I'm a <strong className='text-warning'>{curYear - 2003}-year-old MERN stack developer</strong> with a strong foundation in the basics of web development.</p>
    )
}
