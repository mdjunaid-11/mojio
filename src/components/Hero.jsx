import { heroLeftLeafImg, heroRightLeafImg } from "@/assets/images";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paraSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(heroSplit.chars, {
      opacity: 0.15,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
    });

    gsap.from(paraSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.6,
      delay: 1,
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub:true,
      },
    }).to('.right-leaf',{y:200},0)
    .to('.left-leaf',{y:-200},0)
  }, []);

  return (
    <section id="hero" className="noisy">
      <h1 className="title">MOJITO</h1>
      <img src={heroLeftLeafImg} alt="left leaf" className="left-leaf" />
      <img src={heroRightLeafImg} alt="right leaf" className="right-leaf" />

      <div className="body">
        <div className="content">
          <div className="hidden space-y-5 md:block">
            <p>Cool. Crisp. Classic.</p>
            <p className="subtitle">
              Sip the Spirit <br /> of Summer
            </p>
          </div>
          <div className="view-cocktails">
            <p className="subtitle">
              Every cocktail on our menu is a blend of premium ingredients, creative flair, and
              timeless recipes — designed to delight your senses.
            </p>
            <a href="#cocktails">View Cocktails</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
