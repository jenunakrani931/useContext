import React from "react";
export default function Button(props) {
  return (
    <>
      <button onClick={props.onClick} className="btn text-white">{props.children}</button>
    </>
  );
}
