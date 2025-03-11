import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Zero Field
        </p>

        <AnimatedTitle
          title="It's a w<b>o</b>rld without <b>t</b>ime or sp<b>a</b>ce, fill<b>e</b>d with i<b>n</b>finite n<b>o</b>thingness"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>
            The Zero Field, also known as the World of Void, is an isolated
            place outside of the multiverse with literally no time or space.
          </p>
          <p className="text-gray-500">
            Fighters can use the void to fully unleash their powers.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image relative">
          <video
            src={"videos/about.mp4"}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover brightness-110 contrast-75 saturate-[1.2] sepia-[.25]"
          />
          <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-transparent to-black"></div>
          {/* <img
            src="img/about.png"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
