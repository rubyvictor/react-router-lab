import React from "react";

const SpecialTacoPage = props => {
  return (
    <div>
      Awesome you found our Special Taco page at {props.match.params.id}
    </div>
  );
};

export default SpecialTacoPage;
