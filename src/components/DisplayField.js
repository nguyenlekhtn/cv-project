import "./DisplayField.scss";

export default function DisplayField(props) {
  const handleFocus = () => {
    if (props.isInEditMode) {
      props.toggleDisplay(props.fieldName);
    }
  };
  let display;
  let className = "";
  if (props.fieldName === "firstName" || props.fieldName === "lastName") {
    display = <h3 className="field_title">{props.value}</h3>;
    className += " main";
  } else {
    display = <p className="field_title">{props.value}</p>;
    className += " sub";
  }

  return (
    <div
      tabIndex="0"
      onFocus={handleFocus}
      className={"DisplayField" + className}
    >
      {display}
    </div>
  );
}
