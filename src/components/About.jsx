import { abt1Img, abt2Img, abt3Img, abt4Img, abt5Img } from "@/assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });

    const scrollTimeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top center",
        },
      })
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(
        ".top-grid div,.bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: "0.04",
        },
        "-=0.5",
      );
  });

  return (
    <section id="about">
      <div className="mb-16 px-5 md:px-0">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every details matters <span className="text-white">-</span> from muddle to
              garnish
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with detail — from the first
              muddle to the final garnish. That care is what turns a simple drink into something
              truly memorable.
            </p>
            <div>
              <p className="text-xl font-bold md:text-3xl">
                <span>4.5</span>/5
              </p>
              <p className="text-white-100 text-sm">More than +12000 customers</p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src={abt1Img} alt="grid-img-1" />
        </div>
        <div className="md:col-span-6">
          <div className="noisy" />
          <img src={abt2Img} alt="grid-img-2" />
        </div>
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src={abt5Img} alt="grid-img-5" />
        </div>
      </div>
      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src={abt3Img} alt="grid-img-3" />
        </div>
        <div className="md:col-span-4">
          <div className="noisy" />
          <img src={abt4Img} alt="grid-img-4" />
        </div>
      </div>
    </section>
  );
};

export default About;
