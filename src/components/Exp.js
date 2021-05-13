import "./Exp.scss";

export default function Exp(props) {
  const handleClick = () => {
    props.removeWorkList();
  };
  return (
    <div className="Exp">
      <div className="Exp-left">{props.children}</div>
      <div className="iconCtn">
        <button className="iconBtn">
          <span className="material-icons" onClick={handleClick}>
            delete
          </span>
        </button>
      </div>
    </div>
  );
}
