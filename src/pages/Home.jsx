import { useEffect, useState } from "react";
import Header from "../components/Header";
import EventCard from "../components/EventCard";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    console.log("Home component mounted");
    const fetchEvents = async () => {
      const { data } = await axios.get(
        "https://events-app-backend-hdtw.onrender.com/api/v1/events"
      );
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="h-full ">
      <Header />
      <div className="p-4 flex flex-row justify-between">
        <h1>plan your events </h1>
        <button className="outline p-2">
          <Link to="/create-event">Create Event</Link>
        </button>
      </div>
      <ul className="p-2 flex flex-row flex-wrap gap-4">
        {events.map((event) => (
          <EventCard details={event} key={event.__id} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
