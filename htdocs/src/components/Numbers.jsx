const Stat = (props) => {
  return (
    <div className="stat">
      <span className="number">{props.number} </span>
      <p className="name">{props.name} </p>
    </div>
  );
};

export default Stat;
