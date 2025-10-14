import { useState } from "react";
import "../assets/access.css";
import Login from "../routes/Login";
import Signup from "../routes/Signup";

const Access = () => {
  const [isLogin, setLogin] = useState(true);
  const toLogin = () => {
    setLogin(true);
  };
  const toSignin = () => {
    setLogin(false);
  };
  return (
    <section id="access">
      {isLogin ? (
        <Login toSignin={toSignin} class="box" />
      ) : (
        <Signup toLogin={toLogin} class="box" />
      )}
    </section>
  );
};

export default Access;
