import Hero from "../componennts/Hero";
import Navbar from "../componennts/Navbar";
import Homeimg from "../assets/12.jpg";
import Destination from "../componennts/Destination";
import Trip from "../componennts/Trip";
import Footer from "../componennts/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        title="hero is directed to home"
        para="good"
        heroimg={Homeimg}
        buttontext="travel plan"
        url="/"
        buttonclass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
