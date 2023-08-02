import { BiChevronDown } from "react-icons/bi";
import Modal from "../../Modal/Modal";
import { useContext } from "react";
import ActoreModal from "../../Modal/ActoreModal";
import { ContextData } from "../Store/ContextData";
import PriceModal from "../../Modal/PriceModal";

export default function Filtering() {
  const {
    sortByshow,
    ActorModal,
    showHnadlr,
    HideHnadlr,
    showActorModal,
    HideActorModal,
    PriceModalData,
    sortshow,
    Showprice,
    priceshow,
    Hideprice,
    clearfilter,
    actorshow,
    selectedValue,
    selectedcategory,
    rangePrice,
    SetsortByshow
  } = useContext(ContextData);

  return (
    <div>
      <div className="mt-5">
        {sortByshow && <Modal onClose={HideHnadlr} SetCartShow={SetsortByshow} />}
        {ActorModal && <ActoreModal onClose={HideActorModal} />}
        {PriceModalData && <PriceModal onClose={Hideprice} />}
        <p
          className="btn  border rounded-pill me-3  font-size_"
          onClick={showHnadlr}
          style={{ color: sortshow }}
        >
          {selectedValue}<BiChevronDown /> 
        </p>
        <p
          className="btn  border rounded-pill me-3"
          onClick={showActorModal}
          style={{ color: actorshow }}
        >
          {selectedcategory} <BiChevronDown />
        </p>
        <p
          className="btn  border rounded-pill me-3"
          onClick={Showprice}
          style={{ color: priceshow }}
        >
          {rangePrice} <BiChevronDown />
        </p>  
        {(sortshow === "white" &&
          actorshow === "white" &&
          priceshow === "white") || (
          <p
            className="btn text-white border bg-secondary me-3"
            onClick={clearfilter}
          >
            Clear
          </p>
        )}
      </div>
    </div>
  );
}
