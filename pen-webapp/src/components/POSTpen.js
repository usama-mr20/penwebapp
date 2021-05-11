import React from "react";

const [list, setList] = useState(pens);

const POSTpen = (newPen) => {
  axios.post("http://localhost:5000/addPen", newPen).then((res) => {
    if (res.status === 200) {
      newPen._id = res.data._id;
      setList([...list, newPen]);
    }
  });


  return <PensList list={list} />;
};

export default POSTpen;
