import Carousel from "@/components/Carousel";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Showcase from "@/components/Showcase";
import Skills from "@/components/Skills";
import dynamic from "next/dynamic";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../components/Greetings"));

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-stone-500 to-stone-700">
      {/* <Showcase />  */}
      <Navigation />
      <Greetings />
      <Experience />
      <Skills />
      <Carousel />
      <Footer />
    </div>
  );
}
