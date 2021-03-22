import axios from "axios";
import React from "react";
import { useState } from "react";

const CreatePen = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const pen = { title, description };

    axios.post("http://localhost:5000/addPen", pen).then((res) => {
      if (res.status === 200) {
        const div1 = document.createElement("div");
        div1.className = "cerd";
        const key = document.createAttribute("key");
        key.value = res.data._id;

        const div2 = document.createElement("div");
        div2.className = "card-body";

        const h2 = document.createElement("h2");
        h2.className = "card-title";
        h2.innerHTML = res.data.title;

        const p = document.createElement("p");
        p.className = "card-text";
        p.innerHTML = res.data.description;

        div2.appendChild(h2);
        div2.appendChild(p);
        div1.appendChild(div2);

        document.getElementById("mainPen").appendChild(div1);
      }
    });
  };

  return (
    <div className="createcontainer">
      <div className="cerd createpen">
        <div className="createpenh1">
          <h1>
            Create <br /> New
            <br /> Pen
          </h1>
        </div>
        <form id="create-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
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
              className="form-control"
              placeholder="Pen description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button className="btn btn-primary">Add Pen</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePen;
