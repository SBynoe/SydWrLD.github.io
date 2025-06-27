import About from "@/components/About";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Greetings from "@/components/Greetings";
import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";
// import dynamic from "next/dynamic";
// const Navigation = dynamic(() => import("../components/Navigation"));
// const Greetings = dynamic(() => import("../components/Greetings"));

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-stone-500 to-stone-700 w-auto h-auto">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <Navigation /> */}
      <Navigation/>
      {/* <Greetings /> */}
      <Greetings/>
      <About />
      <Skills />
      <Carousel />
      <Footer />
    </div>
  );
}
