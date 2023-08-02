import ReactDOM from "react-dom";
import { Fragment, useContext } from "react";
import { RxCross2 } from "react-icons/rx";

import { ContextData } from "../components/Store/ContextData";
const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose} />;
};
const ModalOverlays = (props) => {
  return <div className="modal_">{props.children}</div>;
};
const portalele = document.getElementById("overlays");
export default function ActoreModal(props) {
  const { onSortActor, category,selectedcategory } = useContext(ContextData);
  return (
    <>
      <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalele)}
        {ReactDOM.createPortal(
          <ModalOverlays>
            <div className="row">
              <h5 className="text_ text-light  col-6">Category</h5>
              <h5 className="text_ text-light col-6" onClick={props.onClose}>
                <RxCross2 />
              </h5>
            </div>
            <div className="text-white row">
              <div className="total">
                {category.map((ele, index) => (
                  <div key={index} className="mt-2">
                    <label className="col-6 ">{ele}</label>
                    <input
                      type="radio"
                      name="categoryOption"
                      className="mx-auto text-center col-6"
                      value={ele}
                      checked={selectedcategory === ele}
                      onChange={() => onSortActor(ele)}
                    />
                  </div>
                ))}
              </div>
              <div className="actions">
                <button className="button--alt" onClick={props.onClose}>
                  apply
                </button>
              </div>
            </div>
          </ModalOverlays>,
          portalele
        )}
      </Fragment>
    </>
  );
}
