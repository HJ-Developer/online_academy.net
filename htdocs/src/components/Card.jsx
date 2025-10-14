import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
  return (
    <div
      className={props.class ? "card " + props.class : "card"}
      id={props.id}
      tabIndex={props.tab}
      key={props.tab}
    >
      <i>
        {props.icon ? (
          <FontAwesomeIcon className="icon" icon={["fas", props.icon]} />
        ) : (
          ""
        )}
      </i>
      <p className="name">{props.name} </p>
      <p className="desc">{props.description} </p>
    </div>
  );
};

export default Card;
