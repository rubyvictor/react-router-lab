import React from "react";
import SpecialTacoPage from "./SpecialTacoPage";
import { Redirect } from "react-router-dom";

const TacoDetail = props => {
    console.log(props.match.params.id)
  if (props.match.params.id === "42") {
    return <Redirect to="/Tacos/special"/>;
  } else {
    return (
      <div>
        this is the detailed page for taco number {props.match.params.id}
      </div>
    );
  }
};

export default TacoDetail;
