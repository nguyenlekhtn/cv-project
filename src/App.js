import { useState } from "react";
import PracticalForm from "./components/PracticalForm";
import SchoolForm from "./components/EducationalForm";
import "./App.scss";
import "modern-normalize/modern-normalize.css";
import Section from "./components/Section";
import Exp from "./components/Exp";
import Header from "./components/Header";
import ModeController from "./components/ModeController";
import SoloInput from "./components/SoloInput";
import InputData from "./InputData";
import DisplayField from "./components/DisplayField";

// import EducationalForm from "./components/EducationalForm";
const workList = ["company", "position", "mainTask", "jobStart", "jobEnd"];
const schoolList = ["university", "major", "studyStart", "studyEnd"];
const mainList = ["firstName", "lastName", "email", "phoneNumber"];

function App() {
  const [schoolList, setSchoolList] = useState([]);
  const [workList, setWorkList] = useState([]);
  const [isEditingWorkExp, setIsEditingWorkExp] = useState(false);
  const [isEditingSchoolExp, setIsEditingSchoolExp] = useState(false);
  const [isInEditMode, setIsInEditMode] = useState(true);

  const [mainFields, setMainFields] = useState({
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phoneNumber: "Phone",
  });

  const [isEditing, setIsEditing] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
  });

  const toggleMainFieldsView = (field) => {
    setIsEditing((prevIsEditing) => {
      return { ...prevIsEditing, [field]: !prevIsEditing[field] };
    });
  };

  const changeMainState = (field, newValue) => {
    setMainFields((prev) => {
      return { ...prev, [field]: newValue };
    });
  };

  const removeWorkItem = (id) => {
    setWorkList((prevList) => {
      const updatedWorkList = prevList.filter((exp) => exp.id !== id);
      return updatedWorkList;
    });
  };

  const removeSchoolItem = (id) => {
    setSchoolList((prevList) => {
      const updatedWorkList = prevList.filter((exp) => exp.id !== id);
      return updatedWorkList;
    });
  };

  const getData = (name) => {
    const dataArr = InputData.filter((item) => {
      return item.title === name;
    });
    return dataArr[0];
  };

  const render = {};
  mainList.forEach((item) => {
    render[item] = isEditing[item] ? (
      <SoloInput
        value={mainFields[item]}
        toggleDisplay={() => toggleMainFieldsView(item)}
        data={getData(item)}
        handleChange={(e) => changeMainState(item, e.target.value)}
      />
    ) : (
      <DisplayField
        toggleDisplay={() => toggleMainFieldsView(item)}
        fieldName={item}
        value={mainFields[item]}
        isInEditMode={isInEditMode}
      />
    );
  });

  const practialForm = isEditingWorkExp ? (
    <PracticalForm
      addItem={(newItem) => setWorkList((prevList) => [...prevList, newItem])}
      toggleDisplay={() => setIsEditingWorkExp(false)}
    />
  ) : (
    <button className="button" onClick={() => setIsEditingWorkExp(true)}>
      Add
    </button>
  );
  const workExpDiv = workList.map((workItem) => (
    <Exp
      key={workItem.id}
      removeWorkList={() => removeWorkItem(workItem.id)}
      isInEditMode={isInEditMode}
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
  const schoolForm = isEditingSchoolExp ? (
    <SchoolForm
      addItem={(newItem) => setSchoolList((prevList) => [...prevList, newItem])}
      toggleDisplay={() => setIsEditingSchoolExp(false)}
    />
  ) : (
    <button className="button" onClick={() => setIsEditingSchoolExp(true)}>
      Add
    </button>
  );
  const schoolExpList = schoolList.map((item) => (
    <Exp key={item.id} removeItem={() => removeSchoolItem(item.id)}>
      <span>
        {item.university}, {item.major}
      </span>
      <br />
      <span>
        From {item.studyStart} to {item.studyEnd}
      </span>
    </Exp>
  ));

  return (
    <div className="App">
      <Header />
      <ModeController
        setIsInEditMode={setIsInEditMode}
        isInEditMode={isInEditMode}
      />
      <div className="AppMain">
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

export default App;
export { workList, schoolList, mainList };
