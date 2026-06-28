import React from 'react'

async function Page({ params }) {
    const { slug } = await params
    console.log(slug)

    return (
        <div>blog post Page</div>
    )
}

export default Page