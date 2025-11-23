import React from "react";
import { allCocktails } from "@/assets/constants";
import { leftArrowImg, rightArrowImg } from "@/assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const total = allCocktails.length;

const CocktailMenu = () => {
  const [index, setIndex] = React.useState(0);
  const contentRef = React.useRef();

  const goToSlide = (index) => setIndex((index + total) % total);
  const getCocktail = (offset) => allCocktails[(index + offset + total) % total];

  const current = getCocktail(0);
  const prev = getCocktail(-1);
  const next = getCocktail(1);

  useGSAP(() => {
    gsap.fromTo(
      "#title",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      },
    );
    gsap.fromTo(
      ".cocktail img",
      {
        opacity: 0,
        xPercent: -100,
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      },
    );
    gsap.fromTo(
      ".details h2,.details p",
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        ease: "power1.inOut",
      },
    );
  }, [index]);

  return (
    <>
      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map(({ id, name }) => {
          const isActive = id === index;
          return (
            <button
              key={id}
              className={isActive ? "border-white text-white" : "border-white/50 text-white/50"}
              onClick={() => goToSlide(id)}
            >
              {name}
            </button>
          );
        })}
      </nav>
      <div className="content">
        <div className="arrows">
          <button className="text-left" onClick={() => goToSlide(index - 1)}>
            <span>{prev.name}</span>
            <img src={rightArrowImg} alt="right-arrow" aria-hidden="true" />
          </button>
          <button className="text-left" onClick={() => goToSlide(index + 1)}>
            <span>{next.name}</span>
            <img src={leftArrowImg} alt="left-arrow" aria-hidden="true" />
          </button>
        </div>
        <div className="cocktail">
          <img src={current.image} alt="" />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{current.name}</p>
          </div>
          <div className="details">
            <h2>{current.title}</h2>
            <p>{current.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CocktailMenu;
