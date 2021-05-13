import "./ModeController.scss";

export default function ModeController(props) {
  const inInEditMode = props.isInEditMode;
  const editClass = inInEditMode ? " active" : "";
  const previewClass = inInEditMode ? "" : " active";

  const handleClick = (button) => {
    if (button === "preview" && inInEditMode) {
      props.setMode("preview");
    } else if (button === "edit" && !inInEditMode) {
      props.setMode("edit");
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
