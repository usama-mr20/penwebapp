import axios from "axios";
import React from "react";
import { useState } from "react";
import PensList from "./PensList"
import { BarLoader } from "react-spinners";


const CreatePen = ({ pens, isLoading }) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(isLoading);
  const [list, setList] = useState(pens);
  const pen = { title, description };

  //

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/addPen", pen).then((res) => {
      if (res.status === 200) {
        pen._id = res.data._id;
        setList([...list, pen]);
      }
    });
  };

  const returnLists = (loadingVar) => {
   

    if (loadingVar) {
      return (
        <div className="createcontainer">
          <BarLoader color="blue" />
        </div>
      );
    } else {
      return (
        <PensList list={list}/>
      );
    }
  };

  return (
    <div>
      <div className="createcontainer">
        <div className="cerd createpen">
          <div className="createpenh1">
            <h1>
              Create <br /> New
              <br /> Pen
            </h1>
          </div>
          <form id="create-form">
            
            <div className="form-group">
              <input
                id="titleinputbox"
                className="form-control"
                type="text"
                placeholder="Pen title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                id="txtareabox"
                className="form-control"
                placeholder="Pen description"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <button className="btn btn-primary" onClick={handleSubmit}>
              Add Pen
            </button>
          </form>
        </div>
      </div>
      <br />
      {returnLists(loading)}
    </div>
  );
};

export default CreatePen;
