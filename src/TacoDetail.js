import React from "react";
import { Redirect } from "react-router-dom";

const TacoDetail = props => {
  if (props.match.params.id === "42") {
    return <Redirect to="/special" />;
  } else {
    return (
      <div>
        this is the detailed page for taco number {props.match.params.id}
      </div>
    );
  }
};

export default TacoDetail;
