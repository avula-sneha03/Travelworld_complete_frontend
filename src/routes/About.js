import Navbar from "../componennts/Navbar";
import Hero from "../componennts/Hero";
import Aboutimg from "../assets/night.jpg";
import Footer from "../componennts/Footer";
import Aboutus from "../componennts/Aboutus";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        title="About"
        heroimg={Aboutimg}
        buttonclass="hide"
      />
      <Aboutus />
      <Footer />
    </>
  );
}

export default About;
