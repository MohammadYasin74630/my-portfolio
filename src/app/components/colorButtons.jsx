"use client"
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

function ColorButtons() {

    useEffect(() => {
        themeChange(false)
    }, [])

    return (
        <>
            <h3 className='my-4 font-bold font-sans'>THEME</h3>
            <div className='flex gap-2 flex-wrap '>
                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#f8f8f8] border border-base-content'
                    data-set-theme="light" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#15191e] border border-base-content'
                    data-set-theme="dark" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#e6e2e0] border border-base-content'
                    data-set-theme="cupcake" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#e4e4e4] border border-base-content'
                    data-set-theme="bumblebee" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#d1d1d1] border border-base-content'
                    data-set-theme="emerald" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#e8e8e8] border border-base-content'
                    data-set-theme="corporate" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#1d1a49] border border-base-content'
                    data-set-theme="synthwave" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#daca9e] border border-base-content'
                    data-set-theme="retro" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#e2d336] border border-base-content'
                    data-set-theme="cyberpunk" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#f7cce4] border border-base-content'
                    data-set-theme="valentine" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#000000] border border-base-content'
                    data-set-theme="halloween" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#bebdbd] border border-base-content'
                    data-set-theme="garden" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#100d0d] border border-base-content'
                    data-set-theme="forest" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#0b1542] border border-base-content'
                    data-set-theme="aqua" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#ebebeb] border border-base-content'
                    data-set-theme="lofi" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#e5e6e7] border border-base-content'
                    data-set-theme="pastel" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#d1d1d1] border border-base-content'
                    data-set-theme="fantasy" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#f5f5f5] border border-base-content'
                    data-set-theme="wireframe" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#1b1b1b] border border-base-content'
                    data-set-theme="black" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#1e1d1f] border border-base-content'
                    data-set-theme="luxury" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#1f212a] border border-base-content'
                    data-set-theme="dracula" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#eeeeee] border border-base-content'
                    data-set-theme="cmyk" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#c5c5c5] border border-base-content'
                    data-set-theme="autumn" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#181818] border border-base-content'
                    data-set-theme="business" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#e1e1e1] border border-base-content'
                    data-set-theme="acid" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#cbcfc4] border border-base-content'
                    data-set-theme="lemonade" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#0b1120] border border-base-content'
                    data-set-theme="night" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#120a11] border border-base-content'
                    data-set-theme="coffee" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#e3e9f3] border border-base-content'
                    data-set-theme="winter" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#20252d] border border-base-content'
                    data-set-theme="dim" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#d8dee8] border border-base-content'
                    data-set-theme="nord" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#0a1319] border border-base-content'
                    data-set-theme="sunset" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#fdd6aa] border border-base-content'
                    data-set-theme="caramellatte" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#000611] border border-base-content'
                    data-set-theme="abyss" data-act-class="ACTIVECLASS">
                </button>

                <button
                    className='w-8 h-8 rounded-full cursor-pointer bg-[#f2ede9] border border-base-content'
                    data-set-theme="silk" data-act-class="ACTIVECLASS">
                </button>

            </div>
        </>
    )
}

export default ColorButtons