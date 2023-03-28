import React from "react";
import Input from "./Input";

function Work(props) {
  return (
    <fieldset className="work-form">
      <legend>Work Experience</legend>

      <Input
        type="text"
        placeholder="Name of company"
        id="company-name"
        htmlFor="company-name"
        labelText="Where have you work before: "
        onChange={props.getValue}
        name="company"
      />

      <Input
        type="text"
        placeholder="Position title"
        id="position"
        htmlFor="position"
        labelText="On which position you have worked there: "
        onChange={props.getValue}
        name="position"
      />

      <Input
        type="text"
        placeholder="Work experience"
        id="work-time"
        htmlFor="work-time"
        labelText="How long you worked there: "
        onChange={props.getValue}
        name="experience"
      />
      <label htmlFor="info">
        Something about you, that you want we to know :
      </label>
      <textarea
        id="info"
        cols="40"
        rows="10"
        onChange={props.getValue}
        name="aboutU"
      ></textarea>
    </fieldset>
  );
}

export default Work;
