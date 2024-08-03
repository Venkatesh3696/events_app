import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please fill in all fields");
    } else {
      const newEvent = { title, description, date, time, location };
      try {
        const { data } = await axios.post(
          "https://events-app-backend-hdtw.onrender.com/api/v1/events",
          newEvent
        );
        console.log("Event created:", data);
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
    }
  };

  return (
    <div className="forms-container ">
      <form onSubmit={handleSubmit} className="inner-form-container ">
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
        <input onChange={(e) => setLocation(e.target.value)} value={location} />
        <button type="submit" className="bg-blue-400" onClick={handleSubmit}>
          Create Event
        </button>
      </form>
    </div>
  );
}

export default CreateEvent;
