import { Component } from "react";
import uniqid from "uniqid";

import InputData from "../InputData";
import { formatISO, format } from "date-fns";
import { schoolList as list } from "../App";
import Form from "./Form";

class SchoolForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqid(),
      univeristy: "",
      major: "",
      studyStart: format(new Date(), "yyyy"),
      studyEnd: format(new Date(), "yyyy"),
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newItem = this.getStateInList(list);
    this.props.addItem({ ...newItem, id: this.state.id });
    this.setState({
      id: uniqid(),
      university: "",
      major: "",
      studyStart: formatISO(new Date(), "yyyy"),
      studyEnd: formatISO(new Date(), "yyyy"),
    });
  };

  getStateInList = (list) => {
    let obj = {};
    list.forEach((item) => {
      obj = { ...obj, [item]: this.state[item] };
    });
    return obj;
  };

  render() {
    const inputs = InputData.filter((input) => list.includes(input.title)).map(
      (input) => {
        return (
          <div key={input.title} className="inputContainer">
            <label htmlFor={input.title} className="label">
              {input.description}
            </label>
            <input
              id={input.title}
              type={input.type}
              name={input.title}
              value={this.state[input.title]}
              onChange={this.handleChange}
            />
          </div>
        );
      }
    );
    return (
      <Form
        handleSubmit={this.handleSubmit}
        toggleDisplay={this.props.toggleDisplay}
      >
        {inputs}
      </Form>
    );
  }
}

export default SchoolForm;
