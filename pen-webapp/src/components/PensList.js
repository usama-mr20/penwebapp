import OnePen from "./OnePen";
const PensList = ({ pens }) => {
  return (
    <>
      <div id="mainPen" className="wrapper">
        {pens.map((pen) => (
          <div id={pen._id} key={pen._id}>
            <OnePen
              id={pen._id}
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
