import React from "react";
import Input from "./Input";

class Work extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset>
        <legend>Work Experience</legend>
        <label htmlFor="company-name">Company Name ? </label>
        <Input type="text" placeholder="Name of company" id="company-name" />
        <label htmlFor="position">Position in that company ? </label>
        <Input type="text" placeholder="Position title" id="position" />
        <label htmlFor="work-time">How long you worked there ? </label>
        <Input type="text" placeholder="Work experience" id="work-time" />
        <label htmlFor="info">
          Something about you, that you want we to know :
        </label>
        <textarea id="info" cols="40" rows="10"></textarea>
      </fieldset>
    );
  }
}

export default Work;
