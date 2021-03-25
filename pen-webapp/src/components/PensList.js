import OnePen from "./OnePen";
const PensList = ({ pens }) => {
  return (
    <>
      <div id="mainPen" className="wrapper">
        {pens.map((pen) => (
          <>
            <OnePen
              _ID={pen._id}
              title={pen.title}
              desc={pen.description}
            ></OnePen>
          </>
        ))}
      </div>
    </>
  );
};

export default PensList;
