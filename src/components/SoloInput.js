export default function SoloInput(props) {
  const handleKeyPress = (event) => {
    const key = event.key;
    if (key === "Enter") {
      props.toggleDisplay();
    }
  };

  const { type, title } = props.data;

  return (
    <input
      autoFocus={true}
      tabIndex="0"
      type={type}
      name={title}
      value={props.value}
      onChange={props.handleChange}
      onKeyPress={handleKeyPress}
      onBlur={() => props.toggleDisplay()}
    ></input>
  );
}
