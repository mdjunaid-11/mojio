import { sliderLeftLeafImg, sliderRightLeafImg } from "@/assets";
import CocktailMenu from "./CocktailMenu";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#menu",
          start: "top bottom", // section enters the screen
          scrub: true,
        },
      })
      .fromTo(
        "#m-right-leaf",
        { rotate: -45, xPercent: 100 },
        { rotate: 0, xPercent: 0, duration: 1, ease: "power2.inOut" },
      )
      .fromTo(
        "#m-left-leaf",
        { rotate: 5,yPercent:100 },
        { rotate: 0,yPercent:0, duration: 1, ease: "power2.inOut" },
      );
  }, []);
  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img src={sliderLeftLeafImg} alt="left-leaf" id="m-left-leaf" />
      <img src={sliderRightLeafImg} alt="right-leaf" id="m-right-leaf" />

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <CocktailMenu />
    </section>
  );
};

export default Menu;
