const PensList = ({ pens }) => {
  return (
    <>
      <div id="mainPen" className=" wrapper">
        {pens.map((pen) => (
          <div className="cerd" key={pen._id}>
            <div className=" card-body">
              <h2 className="card-title">{pen.title}</h2>
              <p className="card-text">{pen.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PensList;
