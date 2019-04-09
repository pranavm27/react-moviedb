import React from "react";

const Description = (props) => (
  <div className="container">
    <h2>{ props.title }</h2>
    <p>{ props.description }</p>
  </div>
);

export default Description;
