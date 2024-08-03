import { Link } from "react-router-dom";

const EventCard = ({ details }) => {
  console.log("event details", details);
  const { _id, title, description, date, time, location } = details;

  return (
    <Link to={`/events/${_id}`}>
      <li
        key={_id}
        className="card  border-4 w-[350px] p-4 flex flex-col gap-3 p-4"
      >
        <h2> Title : {title}</h2>
        <p>Description: {description}</p>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
        <p>Location :{location}</p>
        <Link to={`/events/${_id}`}>
          <button className="border-2 border-black">More Details</button>
        </Link>
      </li>
    </Link>
  );
};

export default EventCard;
