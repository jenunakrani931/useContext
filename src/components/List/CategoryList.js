import { useContext } from "react";
import AddCategory from "../AddData/AddCategory";
import { ContextData } from "../Store/ContextData";
export default function CategoryList() {
  const {
    category,
    selectedcategory,
    showAllData,
    actorshow,
    onSortActor,
  } = useContext(ContextData);
  return (
    <section className="mt-5">
      <div>
        <div className="row text-light">
          <h3 className="col-6" style={{ color: actorshow }}>
            {selectedcategory}
          </h3>
          <div className="text-align-end col-6">
            <AddCategory />
          </div>
        </div>
        <div className="col-xxl-12 col-xl-10 col-md-12 col-xs-12 mt-2">
          <p
            className="btn rounded-3 text-white border mt-3"
            onClick={showAllData}
          >
            All
          </p>
          {category.map((ele, index) => (
            <div className="btn" onClick={() => onSortActor(ele)} key={index}>
                <input
                  type="button"
                  value={ele}
                  className={`btn rounded-3 text-white border ${ele === selectedcategory ? 'bg-success' : ""}`}
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
