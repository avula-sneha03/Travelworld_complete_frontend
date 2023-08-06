import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/9.jpg";
import Destinationdata from "./Destinationdata";
import "./Destinationstyle.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1>popular Destinations</h1>
      <p>They gives u the oppertunity to explore new things</p>

      <Destinationdata
        className="first-dest"
        heading="Marina,Chennai"
        text="The ridge is the site of the present-day beach.[11] When Fort St.
       George was built in 1640, the sea was too close to the fort. The
       building of the harbor near the fort resulted in sand accretion to
       the south of the fort and the harbor and the sea, which was washing
       the ramparts of the fort, moved afar at about 2.5 km away from the
       fort creating a wide beach between the land and the sea."
        img1={Mountain1}
        img2={Mountain2}
      />
      <Destinationdata
        className="first-dest-reverse"
        heading="Waterfalls,Mysoor"
        text="The ridge is the site of the present-day beach.[11] When Fort St.
       George was built in 1640, the sea was too close to the fort. The
       building of the harbor near the fort resulted in sand accretion to
       the south of the fort and the harbor and the sea, which was washing
       the ramparts of the fort, moved afar at about 2.5 km away from the
       fort creating a wide beach between the land and the sea."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};
export default Destination;
