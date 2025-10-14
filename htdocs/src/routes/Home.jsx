import axios from "axios";

import "./home.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const fetchProfile = () => {
  // axios.get("localhost:5174/profile", userID).then((result) => {
  //   console.log(result);
  // });
};

const Home = (props) => {
  const navigate = useNavigate();
  const userID = localStorage.getItem("userID");
  useEffect(() => {
    if (!userID) {
      console.log("ID?");
      navigate("/login");
    } else {
      fetchProfile();
    }
  }, []);

  return (
    <div id="home">
      <h1>welcome to home</h1>
      <button
        className="btnLogout"
        onClick={() => {
          localStorage.removeItem("userID");
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Home;
