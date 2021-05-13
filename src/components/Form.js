import "./Form.scss";

export default function Form(props) {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      {props.children}
      <button type="submit" className="button">
        Add
      </button>
      <button type="button" onClick={props.toggleDisplay} className="button">
        Cancel
      </button>
    </form>
  );
}
