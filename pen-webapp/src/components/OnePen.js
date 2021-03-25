import React, { useState } from "react";

const OnePen = (props) => {
  const [display, setDisplay] = useState("notdisplayed");

  const showButton = (e) => {
    e.preventDefault();
    setDisplay("displayed");
  };

  const hideButton = (e) => {
    e.preventDefault();
    setDisplay("notdisplayed");
  };

  return (
    <div
      onMouseEnter={(e) => showButton(e)}
      onMouseLeave={(e) => hideButton(e)}
      className="cerd"
    >
  
      <div className=" cardBody">
        <h2 className="cardTitle">{props.title}</h2>
        <p className="cardText">{props.desc}</p>
      </div>
      <div id="toolbar" className={`bottom-toolbar ${display}`}>
        <i className="bi bi-trash"></i>
      </div>
    </div>
  );
};

export default OnePen;
