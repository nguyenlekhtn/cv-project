import { Component } from "react";
import Form from "./components/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      email: "",
      phoneNumber: "",
      schoolName: "",
      titleOfStudy: "",
      dateOfStudy: "",
      company: "",
      position: "",
      mainTask: "",
      dateStart: "",
      dateEnd: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  getData = (arr) => {
    const generalData = {};
    arr.forEach((item) => (generalData[item] = this.state[item]));
    return generalData;
  };

  render() {
    // const generalData = this.getData(["fullName", "email", "phoneNumber"]);
    return (
      <div>
        <Form />
      </div>
    );
  }
}

export default App;
