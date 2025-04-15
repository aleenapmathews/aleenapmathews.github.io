import Image from "next/image";
import Header from "./comonents/header";
import Hero from "./comonents/hero";
import Socials from "./comonents/socials";
import About from "./comonents/about";
import Education from "./comonents/education";
import Skills from "./comonents/skills";
import Contact from "./comonents/contact";
import Footer from "./comonents/footer";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Socials />
      <About />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div> 
  );
}
