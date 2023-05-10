import React from "react";

function Loader(props) {
  return (
    <>
      <div style={{display:"flex",justifyContent:"center" }}>
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: props.color ? props.color : "white",
            fontSize: props.size ? props.size : "20px",
          }}>
          <i className="fa fa-refresh fa-spin"></i> Loading...
        </button>
      </div>
    </>
  );
}

export default Loader;
