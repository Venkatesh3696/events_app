import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, SetError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      SetError("Please fill in all fields");
    } else {
      const loginUrl = "https://events-app-backend-hdtw.onrender.com/login";
      const { data } = await axios.post(loginUrl, { email, password });
      console.log(data);
      localStorage.setItem("authToken", data.session.access_token);
    }
  };
  return (
    <>
      <Header />
      <div className="p-5 flex flex-col justify-center items-center h-full">
        <form className="bg-gray-100 flex flex-col justify-center p-5 w-1/2 gap-2">
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
          <button type="submit" onClick={handleLogin}>
            Login
          </button>
          <Link to="/register">New to here? Register here</Link>
        </form>
      </div>
    </>
  );
};

export default Login;
