import { Component } from "react";
import PracticalForm from "./components/PracticalForm";
import SchoolForm from "./components/EducationalForm";
import "./App.scss";
import "modern-normalize/modern-normalize.css";
import Section from "./components/Section";
import Exp from "./components/Exp";
import Main from "./components/Main";
import Header from "./components/Header";
import ModeController from "./components/ModeController";

// import EducationalForm from "./components/EducationalForm";
const workList = ["company", "position", "mainTask", "jobStart", "jobEnd"];
const schoolList = ["university", "major", "studyStart", "studyEnd"];
const mainList = ["firstName", "lastName", "email", "phoneNumber"];

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phoneNumber: "Phone",
      schoolName: "",
      major: "",
      dateOfStudy: "",
      schoolList: [],
      workList: [],
      isEditingWorkExp: false,
      isEditingSchoolExp: false,
      isInEditMode: true,
    };
  }

  setMode = (mode) => {
    if (mode === "edit") {
      this.setState({ isInEditMode: true });
    } else {
      this.setState({ isInEditMode: false });
    }
  };

  changeSingleState = (stateName, newValue) => {
    this.setState({ [stateName]: newValue });
    console.log("App", this.state[stateName]);
  };

  addItem = (item, list = "workList") => {
    this.setState((prevState) => {
      return { [list]: [...prevState[list], item] };
    });
  };

  removeItem = (id, list = "workList") => {
    this.setState((prevState) => {
      const updatedWorkList = prevState[list].filter((exp) => exp.id !== id);
      return { [list]: updatedWorkList };
    });
  };

  toggleDisplay = (event, form = "work") => {
    console.log("click");
    const formState =
      form === "work" ? "isEditingWorkExp" : "isEditingSchoolExp";
    this.setState((prevState) => ({
      [formState]: !prevState[formState],
    }));
  };

  render() {
    const isInEditMode = this.state.isInEditMode;
    const practialForm = this.state.isEditingWorkExp ? (
      <PracticalForm
        addWorkList={this.addItem}
        toggleDisplay={this.toggleDisplay}
      />
    ) : (
      <button className="button" onClick={this.toggleDisplay}>
        Add
      </button>
    );
    const workExpDiv = this.state.workList.map((workItem) => (
      <Exp
        key={workItem.id}
        removeWorkList={() => this.removeItem(workItem.id)}
      >
        <span>
          {workItem.company}, {workItem.position}, {workItem.mainTask}
        </span>
        <br />
        <span>
          From {workItem.jobStart} to {workItem.jobEnd}
        </span>
      </Exp>
    ));
    const schoolForm = this.state.isEditingSchoolExp ? (
      <SchoolForm
        addItem={(item) => this.addItem(item, "schoolList")}
        toggleDisplay={(e) => this.toggleDisplay(e, "school")}
      />
    ) : (
      <button
        className="button"
        onClick={(e) => this.toggleDisplay(e, "school")}
      >
        Add
      </button>
    );
    const schoolExpList = this.state.schoolList.map((item) => (
      <Exp
        key={item.id}
        removeItem={() => this.removeItem(item.id, "schoolList")}
      >
        <span>
          {item.university}, {item.major}
        </span>
        <br />
        <span>
          From {item.studyStart} to {item.studyEnd}
        </span>
      </Exp>
    ));

    let mainData = {};
    mainList.forEach((item) => {
      mainData = { ...mainData, [item]: this.state[item] };
    });

    return (
      <div className="App">
        <Header />
        <ModeController
          setMode={this.setMode}
          isInEditMode={this.state.isInEditMode}
        />
        <div className="AppMain">
          <Main
            changeSingleState={this.changeSingleState}
            mainData={mainData}
            isInEditMode={isInEditMode}
          />
          <Section title="Work Experiences">
            {workExpDiv}
            {isInEditMode && practialForm}
          </Section>
          <Section title="School Experiences">
            {schoolExpList}
            {isInEditMode && schoolForm}
          </Section>
        </div>
      </div>
    );
  }
}

export default App;
export { workList, schoolList, mainList };
