import React from "react";
const Input = React.forwardRef((props,ref) => {
  return (
    <div className="row">
      <label className="col-6 mt-5">{props.lable}</label>
      <input className="col-6 mt-5" {...props.input} />
    </div>
  );
});
export default Input;
