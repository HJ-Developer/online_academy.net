import { useState } from "react";
import "../assets/access.css";
import Title from "../components/Titles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = (props) => {
  const navigate = useNavigate();
  const [user, setUSer] = useState({
    userName: "",
    userMail: "",
    userPass: "",
  });
  const loginAPIs = [
    {
      name: "google",
      api: "",
      icon: "google",
    },
    {
      name: "facebook",
      api: "",
      icon: "facebook",
    },
  ];
  let tab = 8;

  const handleSubmit = (e) => {
    e.preventDefault();

    const n = document.getElementById("name").value;
    const m = document.getElementById("email").value;
    const p = document.getElementById("pass").value;
    const pc = document.getElementById("passcheck").value;

    if (!p === pc) {
      alert("Please check your password!");
    } else {
      setUSer({ userName: n, userMail: m, userPass: p });
      axios
        .post("http://localhost:5174/signup", user)
        .then((result) => console.log(result));
    }
  };
  return (
    <div className={"loginContainer " + props.class}>
      <Title text="start studing now " />
      <section>
        <form method="POST" onSubmit={handleSubmit} id="signupForm">
          <input
            type="text"
            name="userName"
            placeholder="Full name"
            required
            tabIndex={tab++}
            id="name"
          />
          <input
            type="email"
            name="userMail"
            placeholder="E-mail address"
            required
            tabIndex={tab++}
            id="email"
          />
          <input
            type="password"
            name="userPass"
            placeholder="Password"
            required
            tabIndex={tab++}
            id="pass"
          />
          <input
            type="password"
            name="userPassConfirm"
            placeholder="Confirm password"
            required
            tabIndex={tab++}
            id="passcheck"
          />
          <button type="submit" className="loginBtn" tabIndex={tab++}>
            register
          </button>
        </form>
        <span className="divisor">or</span>
        <div className="btns">
          <div>
            <p>signup with</p>
            {loginAPIs.map((i) => {
              return (
                <i
                  key={"social" + loginAPIs.indexOf(i)}
                  className="social"
                  name={i.name}
                  tabIndex={tab++}
                >
                  {/* icon */}
                  <FontAwesomeIcon className="icon" icon={["fab", i.icon]} />
                </i>
              );
            })}
          </div>
          <p className="alt">
            already have an account? <br /> login now!
          </p>
          <button tabIndex={tab++} onClick={() => navigate("/login")}>
            login
          </button>
        </div>
      </section>
    </div>
  );
};

export default Signup;
