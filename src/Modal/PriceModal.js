import ReactDOM from "react-dom";
import { Fragment, useContext } from "react";
import { ContextData } from "../components/Store/ContextData";
import { RxCross2 } from "react-icons/rx";
const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};
const ModalOverlays = (props) => {
  return <div className="modal_">{props.children}</div>;
};
const portalele = document.getElementById("overlays");
export default function PriceModal(props) {
  const {
    minPrice,
    maxPrice,
    setMaxPrice,
    setMinPrice,
    priceInputHandler,
    clearData,
    sortshow,
    actorshow,
    priceshow,
  } = useContext(ContextData);
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalele)}
      {ReactDOM.createPortal(
        <ModalOverlays>
          <div className="row">
            <h5 className="text_ text-light  col-6">Sort By</h5>
            <h5 className="text_ text-light col-6" onClick={props.onClose}>
              <RxCross2 />
            </h5>
          </div>
          <div className="text-white row">
            <div className="total">
              <label htmlFor="$0to$25" className="col-6">
                $0to$25
              </label>
              <input
                type="radio"
                id="$0to$25"
                name="priceRange"
                value="$0to$25"
                className="col-6"
              />
              <br />
              <label htmlFor="$25to$50" className="col-6">
                $25to$50
              </label>
              <input
                type="radio"
                id="$25to$50"
                name="priceRange"
                value="$25to$50"
                className="col-6"
              />
              <br />
              <label htmlFor="$50to$75" className="col-6">
                $50to$75
              </label>
              <input
                type="radio"
                id="$50to$75"
                name="priceRange"
                value="$50to$75"
                className="col-6"
              />
              <br />
              <label htmlFor="$75to$100" className="col-6">
                $75to$100
              </label>
              <input
                type="radio"
                id="$75to$100"
                name="priceRange"
                value="$75to$100"
                className="col-6"
              />
              <br />
              <label htmlFor="$1000+" className="col-6">
                $1000+
              </label>
              <input
                type="radio"
                id="$1000+"
                name="priceRange"
                value="$1000+"
                className="col-6"
              />
              <br />
              <label htmlFor="customPrice" className="col-6">
                Custom
              </label>
              <input
                type="radio"
                id="customPrice"
                name="priceRange"
                value="Custom"
                className="col-6"
                defaultChecked
              />
              <br />
              <input
                type="number"
                placeholder="Min"
                className="p-3 text-white btn border type-number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              -
              <input
                type="number"
                placeholder="Max"
                className="p-3 text-white btn border type-number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
            <div className="actions">
              <button
                className="button--alt"
                onClick={() =>
                  //onchange use
                  priceInputHandler(
                    document.querySelector('input[name="priceRange"]:checked')
                      .value
                  )
                }
              >
                Apply
              </button>
            </div>
            {priceshow === "green" && (
              <p onClick={clearData} className="text-center text-primary ">
                Clear
              </p>
            )}
          </div>
        </ModalOverlays>,
        portalele
      )}
    </Fragment>
  );
}
