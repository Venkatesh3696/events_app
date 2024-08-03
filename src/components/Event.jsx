import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Header from "./Header";

const Event = () => {
  const [event, setEvent] = useState({});
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(event);
  const { id } = useParams();

  const { title, description, date, time, location } = event;

  const handleDelete = async () => {
    const response = await axios.delete(
      `https://events-app-backend-hdtw.onrender.com/api/v1/events/:${id}`
    );
    if (response.ok) {
      alert("Deleted sullcssfully");
      Navigate("/");
    }
  };

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const url = `https://events-app-backend-hdtw.onrender.com/api/v1/events/${id}`;
        const { data } = await axios.get(url);
        setEvent(data);
        const weatherData = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=f6bab4cffc8c438aa2284731242206&q=${data.location}`
        );
        setLoading(false);
        setWeather(weatherData.data.current);
      } catch (error) {
        console.log(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    fetchData(id);
  }, [id]);

  return (
    <>
      <Header />
      <div className="shadow-slate-50 w-[600px] h-100 flex flex-col justify-center items-center gap-6">
        {loading ? (
          <p>Loasing ....</p>
        ) : (
          <div
            key={id}
            className=" border-2 p-8 flex flex-row w-2/3 gap-5 justify-between"
          >
            <div>
              <h2>Title : {title}</h2>
              <p>Description : {description}</p>
              <p>Date : {date}</p>

              <p>Time : {time}</p>
              <p>Location : {location}</p>
              <button className="border-2" onClick={() => handleDelete(id)}>
                Delete Event
              </button>
              <button className="border-2">
                <Link to={`/events/edit-event/${id}`}>Edit Event</Link>
              </button>
            </div>
            <div>
              <h1>Weather</h1>
              <p>Condition : {weather.condition.text}</p>
              <p>Temperature : {weather.temp_c} °C</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Event;
