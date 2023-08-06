import Navbar from "../componennts/Navbar";
import Hero from "../componennts/Hero";
import Contactimg from "../assets/2.jpg";
import Footer from "../componennts/Footer";
import Contactinfo from "../componennts/Contactinfo";
function Contact() {
  return (
    <>
      <Hero
        cName="hero-mid"
        title="Contact"
        heroimg={Contactimg}
        buttonclass="hide"
      />
      <Navbar />
      <Contactinfo />
      <Footer />
    </>
  );
}

export default Contact;
