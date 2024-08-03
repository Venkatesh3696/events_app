import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateEvent from "./components/CreateEvent";
import Event from "./components/Event";
import EditEvent from "./components/EditEvent";

function App() {
  return (
    <div className="h-screen">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create-event" element={<CreateEvent />} />
        <Route path="/events/:id" element={<Event />} />
        <Route path="/events/edit-event/:id" element={<EditEvent />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
