import { Component } from "react";

export default class SoloInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    this.props.changeSingleState(this.props.data.title, event.target.value);
  };

  handleKeyPress = (event) => {
    const key = event.key;
    if (key === "Enter") {
      this.props.toggleDisplay(this.props.data.title);
    }
  };

  render() {
    const { type, title } = this.props.data;

    return (
      <input
        autoFocus={true}
        tabIndex="0"
        type={type}
        name={title}
        value={this.state.value}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
        onBlur={() => this.props.toggleDisplay(this.props.data.title)}
      ></input>
    );
  }
}
