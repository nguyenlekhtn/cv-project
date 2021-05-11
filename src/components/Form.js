import { Component } from "react";
import InputData from "../InputData";
import { formatISO } from "date-fns";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      phoneNumber: "",
      schoolName: "",
      titleOfStudy: "",
      studyStart: 2014,
      studyEnd: 2018,
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

  render() {
    const inputs = InputData.map((input) => {
      return (
        <div key={input.title}>
          <label htmlFor={input.title}>{input.description}</label>
          <input
            id={input.title}
            type={input.type}
            name={input.title}
            value={this.state[input.title]}
            onChange={this.handleChange}
          />
        </div>
      );
    });
    const testValues = InputData.map((input) => (
      <h3 key={input.title}>
        {input.title}: {this.state[input.title]}
      </h3>
    ));
    return (
      <div className="container">
        <form className="form">{inputs}</form>
        <div className="section">{testValues}</div>
      </div>
    );
  }
}

export default Form;
