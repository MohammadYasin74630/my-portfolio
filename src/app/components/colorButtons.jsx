"use client"

import { getActiveTheme } from "@/lib/theme";
import { useEffect, useState } from "react";

let controller;

function ColorButtons() {

    const [activeTheme, setActiveTheme] = useState("light");

    useEffect(() => {
        async function loadTheme() {
            const theme = await getActiveTheme();

            if (theme?.themeName) {
                setActiveTheme(theme.themeName);
            }
        }

        loadTheme();
    }, []);

    const setTheme = async (e) => {

        if (controller) {
            controller.abort('user created a new request')
        }

        controller = new AbortController()

        if (e.target.nodeName === "BUTTON") {

            let themeName = e.target.getAttribute("data-set-theme");

            document.documentElement.setAttribute("data-theme", themeName)

            const res = await fetch('/api/current-theme', {
                signal: controller.signal,
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ themeName })
            })

            if (res.ok) {
                const { themeName } = await res.json();
                setActiveTheme(themeName)
            }
        }
    }

    return (
        <>
            <h3 className='my-4 font-bold font-sans'>THEME</h3>
            <div className='flex gap-2 flex-wrap ' onClick={setTheme}>
                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#f8f8f8] border ${activeTheme === "light" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="light" data-act-class="ActiveTheme" title="light">
                </button>

                {/* <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#f5f5f5] border ${activeTheme === "wireframe" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="wireframe" data-act-class="ActiveTheme" title="wireframe">
                </button> */}

                {/* <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#eeeeee] border ${activeTheme === "cmyk" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="cmyk" data-act-class="ActiveTheme" title="cmyk">
                </button> */}

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#ebebeb] border ${activeTheme === "lofi" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="lofi" data-act-class="ActiveTheme" title="lofi">
                </button>

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#f2ede9] border ${activeTheme === "silk" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="silk" data-act-class="ActiveTheme" title="silk">
                </button>

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#e6e2e0] border ${activeTheme === "cupcake" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="cupcake" data-act-class="ActiveTheme" title="cupcake">
                </button>

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#e3e9f3] border ${activeTheme === "winter" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="winter" data-act-class="ActiveTheme" title="winter">
                </button>

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#d8dee8] border ${activeTheme === "nord" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="nord" data-act-class="ActiveTheme" title="nord">
                </button>

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#e5e6e7] border ${activeTheme === "pastel" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="pastel" data-act-class="ActiveTheme" title="pastel">
                </button>

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#e4e4e4] border ${activeTheme === "bumblebee" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="bumblebee" data-act-class="ActiveTheme" title="bumblebee">
                </button>

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#e8e8e8] border ${activeTheme === "corporate" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="corporate" data-act-class="ActiveTheme" title="corporate">
                </button>

                {/* <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#e1e1e1] border ${activeTheme === "acid" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="acid" data-act-class="ActiveTheme" title="acid">
                </button> */}

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#d1d1d1] border ${activeTheme === "emerald" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="emerald" data-act-class="ActiveTheme" title="emerald">
                </button>

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#bebdbd] border ${activeTheme === "garden" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="garden" data-act-class="ActiveTheme" title="garden">
                </button>

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#d1d1d1] border ${activeTheme === "fantasy" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="fantasy" data-act-class="ActiveTheme" title="fantasy">
                </button>

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#c5c5c5] border ${activeTheme === "autumn" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="autumn" data-act-class="ActiveTheme" title="autumn">
                </button>

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#cbcfc4] border ${activeTheme === "lemonade" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="lemonade" data-act-class="ActiveTheme" title="lemonade">
                </button>

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#daca9e] border ${activeTheme === "retro" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="retro" data-act-class="ActiveTheme" title="retro">
                </button>

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#fdd6aa] border ${activeTheme === "caramellatte" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="caramellatte" data-act-class="ActiveTheme" title="caramellatte">
                </button>

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#e2d336] border ${activeTheme === "cyberpunk" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="cyberpunk" data-act-class="ActiveTheme" title="cyberpunk">
                </button>

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#f7cce4] border ${activeTheme === "valentine" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="valentine" data-act-class="ActiveTheme" title="valentine">
                </button>

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#1d1a49] border ${activeTheme === "synthwave" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="synthwave" data-act-class="ActiveTheme" title="synthwave">
                </button>

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#0b1542] border ${activeTheme === "aqua" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="aqua" data-act-class="ActiveTheme" title="aqua">
                </button>

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#000000] border ${activeTheme === "halloween" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="halloween" data-act-class="ActiveTheme" title="halloween">
                </button>

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#100d0d] border ${activeTheme === "forest" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="forest" data-act-class="ActiveTheme" title="forest">
                </button>

                {/* <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#1b1b1b] border ${activeTheme === "black" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="black" data-act-class="ActiveTheme" title="black">
                </button> */}

                {/* <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#1e1d1f] border ${activeTheme === "luxury" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="luxury" data-act-class="ActiveTheme" title="luxury">
                </button> */}

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#181818] border ${activeTheme === "business" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="business" data-act-class="ActiveTheme" title="business">
                </button>

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#20252d] border ${activeTheme === "dim" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="dim" data-act-class="ActiveTheme" title="dim">
                </button>

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#1f212a] border ${activeTheme === "dracula" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="dracula" data-act-class="ActiveTheme" title="dracula">
                </button>

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#15191e] border ${activeTheme === "dark" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="dark" data-act-class="ActiveTheme" title="dark">
                </button>

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#0a1319] border ${activeTheme === "sunset" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="sunset" data-act-class="ActiveTheme" title="sunset">
                </button>

                <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#0b1120] border ${activeTheme === "night" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="night" data-act-class="ActiveTheme" title="night">
                </button>

                {/* <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#120a11] border ${activeTheme === "coffee" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="coffee" data-act-class="ActiveTheme" title="coffee">
                </button> */}

                {/* <button
                    className={`w-8 h-8 rounded-full cursor-pointer bg-[#000611] border ${activeTheme === "abyss" ? "border-2 border-[#ee82ee]" : "border-base-content/70"}`}
                    data-set-theme="abyss" data-act-class="ActiveTheme" title="abyss">
                </button> */}

            </div>
        </>
    )
}

export default ColorButtons