import { useState } from "react";
import Globe from "react-globe.gl";

import { Button } from "../components/Button";
import { links } from "../constants";

export const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    void navigator.clipboard.writeText(links.contactEmail);

    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="Grid 1"
              className="h-fit w-full object-contain sm:h-[276px]"
            />

            <div>
              <p className="grid-headtext">Hi, I&apos;m Md Noman Kaif</p>
              <p className="grid-subtext">
                I&apos;m a full-stack developer from India. I build responsive
                web apps and APIs, from clean interfaces to reliable backend
                logic.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="Grid 2"
              className="h-fit w-full object-contain sm:w-[276px]"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I work with React, Node.js, Express, MongoDB, Tailwind CSS,
                Java, and Spring Boot.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="flex h-fit w-full items-center justify-center rounded-3xl sm:h-[326px]">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                showAtmosphere
                globeImageUrl="/assets/earth-night.jpg"
                bumpImageUrl="/assets/earth-topology.png"
                labelsData={[
                  {
                    lat: 26.8467,
                    lng: 80.9462,
                    text: "I'm here!",
                    color: "white",
                    size: 20,
                  },
                ]}
              />
            </div>

            <div>
              <p className="grid-headtext">
                Based in India, open to remote work
              </p>

              <p className="grid-subtext">
                I&apos;m open to collaborating across locations and time zones.
              </p>

              <Button href="#contact" containerClass="w-full mt-10" isBeam>
                Contact Me
              </Button>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="Grid 3"
              className="h-fit w-full object-contain sm:h-[266px]"
            />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Coding
                isn&apos;t just my profession - it is my passion.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="Grid 4"
              className="h-fit w-full object-cover sm:h-[276px] sm:object-top md:h-[126px]"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">
                Have a project or opportunity in mind? Copy my email and let&apos;s
                talk.
              </p>

              <div className="copy-container">
                <Button onClick={handleCopy} containerClass="w-full">
                  <img
                    src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                    alt={hasCopied ? "Check" : "Copy"}
                    className="size-5"
                  />
                  {hasCopied ? "Copied to clipboard" : "Copy Email"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
