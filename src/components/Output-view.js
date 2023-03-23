import React from "react";

class Output extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state } = this.props;

    return (
      <div className="output">
        <header>
          <h1>My CV</h1>
        </header>
        <div className="cv-content">
          <p>
            My name is <span>{state.name}</span> <span>{state.lastName}</span>.
          </p>
          <p>
            I studied in <span>{state.school}</span>, which is located in{" "}
            <span>{state.city}</span>.
          </p>
          <p>
            Graduationed in <span>{state.date}</span>.
          </p>
          <h1>About work experience: </h1>
          <p>
            I have worked in <span>{state.company}</span>, on a position of{" "}
            <span>{state.position}</span>.
          </p>
          <p>
            I have worked there for <span>{state.experience}</span>.
          </p>
          <h1>I would like you to know: </h1>
          <p>{state.aboutU}</p>
        </div>
        <footer>
          <h3>
            You can contact me on phone number: <span>{state.phone}</span>
          </h3>
          <h3>
            Or on a E-mail: <span>{state.eMail}</span>
          </h3>
        </footer>
      </div>
    );
  }
}

export default Output;
