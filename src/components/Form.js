import React from "react";
import PersonalInfo from "./Personal-info";
import Education from "./Education-info";
import Work from "./Work-experienc";

function Form(props) {
  return (
    <form className="form">
      <PersonalInfo getValue={props.getValue} />
      <Education getValue={props.getValue} />
      <Work getValue={props.getValue} />
    </form>
  );
}

export default Form;
