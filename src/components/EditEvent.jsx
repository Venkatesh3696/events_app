import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditEvent() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEvent = { title, description, date, time, location };
    try {
      const { data } = await axios.put(
        `https://events-app-backend-hdtw.onrender.com/api/v1/events/${id}`,
        newEvent
      );
      alert("updated succcessfully");
      console.log("Event Updated:", data);
      setTitle("");
      setDescription("");
      setDate("");
      setTime("");
      setLocation("");
      navigate("/");
    } catch (error) {
      console.error(error);
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("edit triggered");
    const fetchData = async () => {
      try {
        const url = `https://events-app-backend-hdtw.onrender.com/api/v1/events/${id}`;
        const { data } = await axios.get(url);
        setTitle(data.title);
        setDescription(data.description);
        setDate(data.date);
        setTime(data.time);
        setLocation(data.location);
        setLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="forms-container">
      {
        <form onSubmit={handleSubmit} className="inner-form-container">
          <label>Title</label>
          <input onChange={(e) => setTitle(e.target.value)} value={title} />
          <label>Description</label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <label>Date</label>
          <input onChange={(e) => setDate(e.target.value)} value={date} />
          <label>Time</label>
          <input onChange={(e) => setTime(e.target.value)} value={time} />
          <label>Location</label>
          <input
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
          <button type="submit" onClick={handleSubmit} className="border-2">
            Update Event
          </button>
        </form>
      }
    </div>
  );
}

export default EditEvent;
