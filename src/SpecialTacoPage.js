import React from "react";
import queryString from "query-string";

const SpecialTacoPage = props => {
  console.log(props.location.search);

    const parsed = queryString.parse(props.match.params);

  return <div>Awesome you found our Special Taco page ! </div>;

};

export default SpecialTacoPage;
