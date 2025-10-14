const Title = (props) => {
  return (
    <p
      className={props.class ? "title " + props.class : "title"}
      tabIndex={props.tab ? props.tab : ""}
      onClick={props.onclick}
    >
      {props.text}
    </p>
  );
};

export default Title;
