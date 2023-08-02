import React, { useContext } from "react";
import { ContextData } from "./Store/ContextData";
export default function SearchBar() {
  const { search, setsearch } = useContext(ContextData);
  return (
    <>
      <div className="container">
        <h4 className="text-center text-light mt-5 row  justify-content-md-center ">
          <input
            type="text"
            value={search}
            className="btn border-light rounded-pill col-md-auto search-cursor p-2"
            placeholder="Search..."
            size="40"
            onChange={(e) => setsearch(e.target.value)}
          />
        </h4>
      </div>
    </>
  );
}
