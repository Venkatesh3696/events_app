import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, SetError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      SetError("Please fill in all fields");
    } else {
      const registerUrl =
        "https://events-app-backend-hdtw.onrender.com/register";
      const { data } = await axios.post(registerUrl, { email, password });
      console.log(data);
    }
  };
  return (
    <>
      <Header />
      <div className="forms-container">
        <form className="inner-form-container ">
          <label>email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" onClick={handleRegister}>
            Login
          </button>
          <Link to="/login">Already have an account? Login here</Link>
        </form>
      </div>
    </>
  );
};

export default Register;
