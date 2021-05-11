import React, { useState } from "react";
import axios from "axios";
const url = "http://localhost:5000/";

const OnePen = (props) => {
  const [display, setDisplay] = useState("notdisplayed");

  //toggle remove button
  const showButton = () => {
    setDisplay("displayed");
  };
  const hideButton = () => {
    setDisplay("notdisplayed");
  };

  //toggle remove button click handler
  const removeHandler = (e) => {
    if (e.target.parentNode.parentNode.id === "") {
      axios
        .delete(url + e.target.parentNode.parentNode.parentNode.id)
        .then(() => {
          e.target.parentNode.parentNode.remove();
        });
    } else {
      axios.delete(url + e.target.parentNode.parentNode.id).then(() => {
        e.target.parentNode.remove();
      });
    }
  };

  return (
    <div
      onMouseEnter={() => showButton()}
      onMouseLeave={() => hideButton()}
      className="cerd"
    >
      <div className=" cardBody">
        <h2 className="cardTitle">{props.title}</h2>
        <p className="cardText">{props.desc}</p>
      </div>

      {/* remove toggler div (shows on mouse enter)*/}
      <div
        id="toolbar"
        onClick={removeHandler}
        className={`bottom-toolbar ${display}`}
      >
        <i className="bi bi-trash"></i>
      </div>
    </div>
  );
};

export default OnePen;
