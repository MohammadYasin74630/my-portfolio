'use client';

import { FiEdit2 } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import React, { use } from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { getBlogPost } from "@/lib/blogs";

function Card({ blog }) {

    return <div className="flex max-[500px]:flex-col gap-4 bg-base-200 p-4 rounded-xl">
        <Image className="min-[500px]:max-w-[200px] rounded-xl" src={blog.coverImage} width={421} height={235} alt="fuck" />

        <div className="flex-1 flex flex-col gap-2">
            <h2 className="text-lg font-bold line-clamp-1">
                {blog.title}
            </h2>
            <p className="text-sm text-base-content line-clamp-3 flex-1 ">
                {blog.excerpt}
            </p>

            <p className="text-xs mt-auto font-semibold text-base-content/70 line-clamp-1">
                {blog.slug}
            </p>
        </div>

        <div className="ml-auto flex flex-col items-center">

            <div className="flex items-center gap-2">
                <div className="flex min-[500px]:flex-col gap-2">
                    <Link href={`/create-blog/${blog.slug}`} className="rounded-full p-1 border border-base-300">
                        <FiEdit2 className="ml-0.5" size={19} />
                    </Link>

                    <div className="rounded-full p-1 border border-base-300 cursor-pointer select-none">
                        {
                            blog.isPublished ? <FaRegEye size={23} /> : <FaRegEyeSlash size={23} />
                        }
                    </div>
                </div>

                <Image className="size-16 rounded-xl ml-auto max-md:hidden" src={blog.author.avatar} width={64} height={64} alt="fuck" />
            </div>

            <p className="max-md:hidden text-xs mt-1 line-clamp-1 max-w-[16ch]">{blog.author.name}</p>

        </div>
    </div>
}

function Page() {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString());
    const myQuery = params.toString() ? `?${params.toString()}` : `?page=1`
    
    const updateQuery = (num) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', num);
        router.replace(`${pathname}?${params.toString()}`);
    };
    
    const data = use(getBlogPost(myQuery))
    
    if (!data || !data.blogs) {
        return <h2 className='w-11/12 my-10 text-center min-h-[calc(100dvh_-_44px)] text-red-500'>ERROR OCCURED !</h2>
    }

    if (data.blogs.length === 0) {
        return <h2 className='w-11/12 my-10 text-center min-h-[calc(100dvh_-_44px)]'>NO POST FOUND !</h2>
    }

    return (
        <div className='w-11/12 mx-auto min-h-[calc(100dvh_-_44px)]'>
            <h1 className='text-4xl font-bold my-10'>ALL BLOGS</h1>

            <div className="grid xl:grid-cols-2 gap-4">
                {
                    data.blogs.map(item => <Card key={item._id} blog={item} />)
                }
            </div>

            <div className="text-center my-10">
                <div className="join select-none">
                    <button
                        className="join-item btn"
                        disabled={!data.pagination.hasPrevPage}
                        onClick={data.pagination.hasPrevPage ? () => updateQuery(data.pagination.currentPage - 1) : null}
                    >«</button>
                    <button className="join-item btn">
                        {data.pagination.currentPage} / {data.pagination.totalPages}
                    </button>
                    <button
                        className="join-item btn"
                        disabled={!data.pagination.hasNextPage}
                        onClick={data.pagination.hasNextPage ? () => updateQuery(data.pagination.currentPage + 1) : null}
                    >»</button>
                </div>
            </div>

        </div>
    )
}

export default Page