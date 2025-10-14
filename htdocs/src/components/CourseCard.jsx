import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Course = (props) => {
  return (
    <div
      className={
        props.class ? "courseCard card " + props.class : "courseCard card"
      }
      id={props.id}
      tabIndex={props.tab}
      key={props.tab}
    >
      <i>
        {props.icon ? (
          <FontAwesomeIcon className="icon" icon={["fab", props.icon]} />
        ) : (
          ""
        )}
        {props.linkTo ? this : ""}
      </i>
      <div>
        <p className="name">{props.name} </p>
        <p className="desc">{props.description} </p>
        <div>
          <span className="price">$ {props.price} </span>
          <p className="students">{props.students} students</p>
        </div>
      </div>
    </div>
  );
};

export default Course;
