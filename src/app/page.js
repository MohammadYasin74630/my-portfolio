"use client"

import About from "./sections/about";
import Banner from "./sections/banner";
import Projects from "./sections/projects";

export default function Home() {
  return (
    <>
      <div>

        <Banner />
        <div id="about"></div>
        <About />
        <Projects />

      </div>
    </>
  );
}
