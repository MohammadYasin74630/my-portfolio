"use client"

import About from "./sections/about";
import Banner from "./sections/banner";
import Journey from "./sections/journey";
import Projects from "./sections/projects";
import { Tooltip } from 'react-tooltip'

export default function Home() {
  return (
    <>
      <div>
        <Tooltip id="my-tooltip"
          openOnClick={false}
          positionStrategy="fixed"
          globalCloseEvents={{
            scroll: true,
          }}
        />
        <div className="max-md:pt-5 max-md:scroll-mt-10" id="home"></div>
        <Banner />
        <div className="max-md:scroll-mt-5" id="about"></div>
        <About />
        <div className="max-md:scroll-mt-5" id="journey"></div>
        <Journey />
        <div className="max-md:scroll-mt-5" id="projects"></div>
        <Projects />

      </div>
    </>
  );
}
