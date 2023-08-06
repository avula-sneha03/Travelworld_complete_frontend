import Tripdata from "./Tripdata";
import trip1 from "../assets/5.jpg";
import trip2 from "../assets/8.jpg";
import trip3 from "../assets/6.jpg";
import "./Tripstyles.css";
function Trip() {
  return (
    <div className="trip">
      <h1>Your reacent trips</h1>
      <p>U can find unique destination using gooogle map</p>
      <div className="tripcard">
        <Tripdata
          image={trip1}
          heading="Trip to indonesia"
          text="The ridge is the site of the present-day beach.[11] When Fort St.
        George was built in 1640, the sea was too close to the fort. The
        building of the harbor near the fort resulted in sand accretion to
        the south of the fort "
        />
        <Tripdata
          image={trip2}
          heading="Trip to Australia"
          text="The ridge is the site of the present-day beach.[11] When Fort St.
        George was built in 1640, the sea was too close to the fort. The
        building of the harbor near the fort resulted in sand accretion to
        the south of the fort "
        />
        <Tripdata
          image={trip3}
          heading="Trip to Paris"
          text="The ridge is the site of the present-day beach.[11] When Fort St.
        George was built in 1640, the sea was too close to the fort. The
        building of the harbor near the fort resulted in sand accretion to
        the south of the fort "
        />
      </div>
    </div>
  );
}
export default Trip;
