import { logoImg } from "@/assets/images";
import { navLinks } from "@/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
        toggleActions: "play reverse play reverse",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent", backdropFilter: "blur(0px)" },
      {
        backgroundColor: "#00000050",
        backdropFilter: "blur(10px)",
        duration: 0.8,
        ease: "power2.inOut",
      },
    );
  });

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
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
