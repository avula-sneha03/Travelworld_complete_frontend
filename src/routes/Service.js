import Navbar from "../componennts/Navbar";
import Hero from "../componennts/Hero";
import Serviceimg from "../assets/night.jpg";
import Footer from "../componennts/Footer";
import Trip from "../componennts/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        title="Service"
        heroimg={Serviceimg}
        buttonclass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
