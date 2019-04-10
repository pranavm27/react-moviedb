import React from "react";

const Description = (props) => {
  const { title, description } = props;

  return (
    <div className="container">
      <h2>{ title }</h2>
      <p>{ description }</p>
    </div>
  );
}

export default Description;
