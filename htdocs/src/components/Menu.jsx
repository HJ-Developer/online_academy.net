import Button from "./Button";
import Title from "./Titles";

const Menu = ({ navigate }) => {
  return (
    <>
      <div className="navbar">
        <Title
          class="menu"
          text="OnlineAcademy.net"
          tab={1}
          onclick={() => navigate("/")}
        />
        <ul className="menuList">
          {/* <li
            tabIndex={2}
            className="current"
            onClick={() => navigate("/home")}
          >
            student area
          </li> */}
          <li tabIndex={3} onClick={() => navigate("")}>
            courses
          </li>
          <li tabIndex={4} onClick={() => navigate("")}>
            about
          </li>
          <li tabIndex={5} onClick={() => navigate("")}>
            contact
          </li>
        </ul>
        <Button
          tab={6}
          text="student area"
          class="menu"
          link={"/home"}
          navigate={navigate}
        />
      </div>
    </>
  );
};

export default Menu;
