import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Output from "./components/Output-view";
import "./style/App.css";

function App() {
  const [property, setProperty] = useState({
    name: "-----",
    lastName: "--------",
    eMail: "------",
    phone: "-------",
    school: "-------",
    city: "--------",
    date: "--------",
    company: "-------",
    position: "-------",
    experience: "-------",
    aboutU: "----------",
  });
  function getValue(e) {
    setProperty({ ...property, [e.target.name]: e.target.value });
    console.log(property);
  }

  return (
    <div className="App">
      <Form getValue={getValue} />
      <Output state={property} />
    </div>
  );
}

export default App;
