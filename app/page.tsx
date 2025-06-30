import About from "@/components/About";
import Footer from "@/components/Footer";
import Greetings from "@/components/Greetings";
import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-stone-500 to-stone-700 w-auto h-auto">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Navigation/>
      <Greetings/>
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
