import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => (
  <main>
    <Navbar />
    <Hero />
    <div className="h-dvh"></div>
  </main>
);

export default App;
