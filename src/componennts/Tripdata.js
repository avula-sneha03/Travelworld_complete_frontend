import "./Tripstyles.css";
function Tripdata(props) {
  return (
    <div className="t-cards">
      <div className="t-img">
        <img alt="trip" src={props.image} />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}
export default Tripdata;
