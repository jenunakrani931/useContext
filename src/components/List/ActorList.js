import { createContext, useContext } from "react";
import { ContextData } from "../Store/ContextData";
import { BsFillStarFill } from "react-icons/bs";
export const allDataProvid = createContext();
export default function ActorList() {
  const {filteredData, totalItems} =useContext(ContextData);
  return (
    <>
      <div>
        <div className="row text-light">
          {filteredData.map((ele, index) => {
            return (
              <div
                className="col-xxl-2 col-lg-3 col-md-4 col-sm-12 col-xs-12 col-12"
                key={index}
              >
                <div className="mt-4">
                  <div className="pb-2">
                    <img
                      src={ele.image}
                      className="rounded-img"
                      alt="img"
                    />
                  </div>
                  <div className="ps-2">
                    <h6>{ele.name}</h6>
                    <h6>{ele.category}</h6>
                    <h6>${ele.price}</h6>
                    <p>
                      <BsFillStarFill className="text-warning" />
                      <span className="ms-2 text-secondary">4.5</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <h3 className="text-white text-align-center">
          <p className="text-success">TOTAL ITEMS : {totalItems} </p>
        </h3>
      </div>
      {/* <div>
        {Array.from(
          { length: Math.ceil(data.length / itemsPerPage) },
          (_, i) => i + 1
        ).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className="btn border text-white mb-5"
          >
            {pageNumber}
          </button>
        ))}
      </div> */}
    </>
  );
}
