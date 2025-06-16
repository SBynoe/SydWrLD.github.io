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
    <div>
      {/* <Showcase />  */}
      <Navigation />
      <Greetings />
      <Experience />
      <Skills />
      <Projects />
      <Contact/>
      <Footer />
    </div>
  );
}
