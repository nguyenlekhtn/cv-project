import { Component } from "react";
import InputData from "../InputData";
import SoloInput from "./SoloInput";
import { mainList } from "../App";
import DisplayField from "./DisplayField";
import "./Main.scss";

export default class MainSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: {
        firstName: false,
        lastName: false,
        email: false,
        phoneNumber: false,
      },
    };
  }

  getData = (name) => {
    const dataArr = InputData.filter((item) => {
      return item.title === name;
    });
    return dataArr[0];
  };

  toggleDisplay = (field) => {
    this.setState((prevState) => {
      return {
        isEditing: {
          ...prevState.isEditing,
          [field]: !prevState.isEditing[field],
        },
      };
    });
  };

  render() {
    const render = {};
    mainList.forEach((item) => {
      render[item] = this.state.isEditing[item] ? (
        <SoloInput
          toggleDisplay={this.toggleDisplay}
          data={this.getData(item)}
          changeSingleState={this.props.changeSingleState}
        />
      ) : (
        <DisplayField
          toggleDisplay={this.toggleDisplay}
          fieldName={item}
          value={this.props.mainData[item]}
          isInEditMode={this.props.isInEditMode}
        />
      );
    });

    return (
      <div className="Main">
        <div className="Main_left">
          {render.firstName}
          {render.lastName}
        </div>
        <div className="Main_right">
          <div className="subCtn">
            <span className="material-icons">email</span>
            {render.email}
          </div>

          <div className="subCtn">
            <span className="material-icons">phone</span>
            {render.phoneNumber}
          </div>
        </div>
      </div>
    );
  }
}
