import ReactDOM from "react-dom";
import { RxCross2 } from "react-icons/rx";
import { Fragment, useContext } from "react";
import { ContextData } from "../components/Store/ContextData";
const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};
const ModalOverlays = (props) => {
  return <div className="modal_">{props.children}</div>;
};
const portalele = document.getElementById("overlays");
export default function Modal(props) {
  const { onSortData, selectedValue } = useContext(ContextData);
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalele)}
      {ReactDOM.createPortal(
        <ModalOverlays>
          
          <div className="row">
            <h5 className="text_ text-light col-6">Sort By</h5>
            <h5 className="text_ text-light col-6" onClick={props.onClose}>
              <RxCross2 />
            </h5>
          </div>
          <div className="text-white row">
            <div className="total ms-5">
              <label>Featured.....</label>
              <input
                className="m-4 col-6"
                type="radio"
                name="sortOption"
                value="Featured"
                checked={selectedValue === "Featured"}
                onChange={() => onSortData("Featured")}
              />
              <br />
              <label>High to Low</label>
              <input
                className="m-4 col-6"
                type="radio"
                name="sortOption"
                value="hightoLow"
                checked={selectedValue === "hightoLow"}
                onChange={() => onSortData("hightoLow")}
              />
              <br />
              <label>Low to High</label>
              <input
                className="m-4 col-6"
                type="radio"
                name="sortOption"
                value="LowtoHigh"
                checked={selectedValue === "LowtoHigh"}
                onChange={() => onSortData("LowtoHigh")}
              />
              <br />
              <label>Alphabetical</label>
              <input
                className="m-4 col-6"
                type="radio"
                name="sortOption"
                value="Alphabetical"
                checked={selectedValue === "Alphabetical"}
                onChange={() => onSortData("Alphabetical")}
              />
            </div>
          
          </div>
        </ModalOverlays>,
        portalele
      )}
    </Fragment>
  );
}
