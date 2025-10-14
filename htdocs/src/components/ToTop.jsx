import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ToTop(props) {
  return (
    <i
      id="toTop"
      tabIndex={props.tab}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <FontAwesomeIcon icon={("fas", "angle-up")} />
    </i>
  );
}
