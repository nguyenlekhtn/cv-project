import { useState } from "react";
import uniqid from "uniqid";

import InputData from "../InputData";
import { formatISO } from "date-fns";
import { workList as list } from "../App";
import Form from "./Form";

const initialState = {
  company: "",
  position: "",
  mainTask: "",
  jobStart: formatISO(new Date(), { representation: "date" }),
  jobEnd: formatISO(new Date(), { representation: "date" }),
};

function WorkForm(props) {
  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevField) => ({ ...prevField, [name]: value }));
  };

  const clearState = () => {
    setState(initialState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addItem({ ...state, id: uniqid() });
    clearState();
  };

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
            value={state[input.title]}
            onChange={handleChange}
          />
        </div>
      );
    }
  );
  return (
    <Form handleSubmit={handleSubmit} toggleDisplay={props.toggleDisplay}>
      {inputs}
    </Form>
  );
}

export default WorkForm;
