import React from "react";
import "./experience.css";
// import { BsPatchCheckFill } from "react-icons/bs";
import { PiSealCheckFill } from "react-icons/pi";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <PiSealCheckFill />
              <h4>HTML</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <PiSealCheckFill />
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <PiSealCheckFill />
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <PiSealCheckFill />
              <h4>Bootstrap</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <PiSealCheckFill />
              <h4>Tailwind</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <PiSealCheckFill />
              <h4>Beginner</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
        {/* End of Frontend */}

        <div className="experience__backend">
          <h3>Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <PiSealCheckFill />
              <h4>Golang</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <PiSealCheckFill />
              <h4>NodeJS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <PiSealCheckFill />
              <h4>PHP</h4>
              <small className="text-light">Beginner</small>
            </article>
            <article className="experience__details">
              <PiSealCheckFill />
              <h4>MySQL</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <PiSealCheckFill />
              <h4>MongoDB</h4>
              <small className="text-light">Beginner</small>
            </article>
            <article className="experience__details">
              <PiSealCheckFill />
              <h4>Firebase</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
        {/* End of Backend */}
      </div>
    </section>
  );
};

export default Experience;
