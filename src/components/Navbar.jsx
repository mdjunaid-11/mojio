import { logoImg } from "@/assets";
import { navLinks } from "@/assets/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    navTween
      .fromTo(
        "#logo",
        {
          scale: 1,
          opacity: 1,
          display: "flex",
        },
        {
          scale: 0,
          opacity: 0,
          display: "none",
          duration: 1,
        },
      )
      .fromTo(
        "nav",
        { backgroundColor: "transparent" },
        {
          backgroundColor: "#00000050",
          backdropFilter: "blur(10px)",
          ease: "power1.inOut",
        },
      );
  });

  return (
    <nav>
      <div>
        <a id="logo" href="#home" className="flex items-center gap-2">
          <img src={logoImg} alt="logo" />
          <p>Mojio</p>
        </a>

        <ul>
          {navLinks.map(({ id, title }) => (
            <li key={id}>
              <a href={`#${id}`}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
