import React from "react";
import PensList from "./PensList";
import FetchData from "./FetchData";
import CreatePen from "./CreatePen";

const Dashboard = () => {
  const { data: pens, isLoading, error } = FetchData("http://localhost:5000/");

  return (
    <div className="container-main">
      {error && <div>{error}</div>}
      {isLoading && <div style={{ color: "white" }}>Loading...</div>}
      <br />
      <CreatePen />
      <br />
      {pens && <PensList pens={pens} />}
    </div>
  );
};

export default Dashboard;
