import { Component } from "react";
import uniqid from "uniqid";

import InputData from "../InputData";
import { formatISO } from "date-fns";
import { workList as list } from "../App";
import Form from "./Form";

class WorkForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqid(),
      company: "",
      position: "",
      mainTask: "",
      jobStart: formatISO(new Date(), { representation: "date" }),
      jobEnd: formatISO(new Date(), { representation: "date" }),
    };
  }

  handleChange = (event) => {
    console.log("Changing");
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newWorkItem = this.getStateInList(list);
    this.props.addWorkList({ ...newWorkItem, id: this.state.id });
    this.setState({
      id: uniqid(),
      company: "",
      position: "",
      mainTask: "",
      jobStart: formatISO(new Date(), { representation: "date" }),
      jobEnd: formatISO(new Date(), { representation: "date" }),
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

export default WorkForm;
