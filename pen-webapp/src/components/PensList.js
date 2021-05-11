import OnePen from "./OnePen";

const PensList = ({ list }) => {

  // const returnList = (list) => {
  //   if (list !== null) {
  //     return(
        
  //     list.map((pen) => (
  //       <div id={pen._id} key={pen._id}>
  //         <div>
  //           <OnePen
  //             id={pen._id}
  //             title={pen.title}
  //             desc={pen.description}
  //           ></OnePen>
  //         </div>
  //       </div>
  //     ))
  //     )
  //   }else{
  //     return (<h2> List is Null </h2>)
  //   }


  // };

  return (
    <>
      <div id="mainPen" className="wrapper">
        {
          /* {returnList()} */

          list.map((pen) => (
            <div id={pen._id} key={pen._id}>
              <div>
                <OnePen
                  id={pen._id}
                  title={pen.title}
                  desc={pen.description}
                ></OnePen>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default PensList;
