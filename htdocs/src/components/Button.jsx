const Button = (props) => {
  return (
    <button
      className={props.class ? "button " + props.class : "button"}
      id={props.id}
      name={props.name}
      tabIndex={props.tab}
      key={props.tab}
      onClick={() => {
        props.link ? props.navigate(props.link) : null;
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;
