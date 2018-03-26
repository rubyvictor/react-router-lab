import React from "react";

const TacoDetail = (props) => {
  return (
    <div>this is the detailed page for taco number {props.match.params.id}</div>
  );
};

export default TacoDetail;
