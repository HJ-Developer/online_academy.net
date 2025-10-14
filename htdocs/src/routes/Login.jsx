import { useNavigate } from "react-router-dom";
import "../assets/access.css";
import Title from "../components/Titles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const navigate = useNavigate();
  const [user, setUSer] = useState({
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

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5174/login", user)
      .then((result) => {
        console.log(result.data[0]);
        if (result.data[0].toString() === "userLogged") {
          localStorage.setItem("userID", result.data[1]);
          document.querySelector("#loginForm").reset();
          navigate("/home");
        }
      })
      .catch((err) => console.error(err));
  };

  let tab = 8;
  return (
    <div className={"loginContainer " + props.class}>
      <Title text="login and enjoy your courses " />
      <section>
        <form method="POST" onSubmit={handleSubmit} id="loginForm">
          <input
            type="email"
            name="userMail"
            placeholder="Enter your e-mail"
            required
            tabIndex={tab++}
            onChange={(e) =>
              setUSer({ userMail: e.target.value, userPass: user.userPass })
            }
            autoComplete="false"
          />
          <input
            type="password"
            name="userPass"
            placeholder="User Password"
            required
            tabIndex={tab++}
            onChange={(e) =>
              setUSer({ userMail: user.userMail, userPass: e.target.value })
            }
            autoComplete="false"
          />
          <button type="submit" className="loginBtn" tabIndex={tab++}>
            log in
          </button>
          {/* recover password option */}
        </form>
        <span className="divisor">or</span>
        <div className="btns">
          <div>
            <p>login with</p>
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
            don't have an account? <br /> register now!
          </p>
          <button tabIndex={tab++} onClick={() => navigate("/signup")}>
            sign up
          </button>
        </div>
      </section>
    </div>
  );
};

export default Login;
