import "./Exp.scss";

export default function Exp(props) {
  const handleClick = () => {
    props.removeWorkList();
  };

  const icons = (
    <div className="iconCtn">
      <button className="iconBtn">
        <span className="material-icons" onClick={handleClick}>
          delete
        </span>
      </button>
    </div>
  );
  return (
    <div className="Exp">
      <div className="Exp-left">{props.children}</div>
      {props.isInEditMode && icons}
    </div>
  );
}
