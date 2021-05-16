import "./ModeController.scss";

export default function ModeController(props) {
  const inInEditMode = props.isInEditMode;
  const editClass = inInEditMode ? " active" : "";
  const previewClass = inInEditMode ? "" : " active";

  const handleClick = (button) => {
    if (button === "preview" && inInEditMode) {
      props.setIsInEditMode(false);
    } else if (button === "edit" && !inInEditMode) {
      props.setIsInEditMode(true);
    }
  };

  return (
    <div className="ModeController">
      <button
        className={"button edit" + editClass}
        onClick={() => handleClick("edit")}
      >
        Edit Mode
      </button>
      <button
        className={"button preview" + previewClass}
        onClick={() => handleClick("preview")}
      >
        Preview Mode
      </button>
    </div>
  );
}
