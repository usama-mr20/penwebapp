import OnePen from "./OnePen";
const PensList = ({ pens }) => {
  return (
    <>
      <div id="mainPen" className="wrapper">
        {pens.map((pen) => (
          <div key={pen._id}>
            <OnePen
              title={pen.title}
              desc={pen.description}
            ></OnePen>
          </div>
        ))}
      </div>
    </>
  );
};

export default PensList;
