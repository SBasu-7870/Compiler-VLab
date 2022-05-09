import React from "react";


const createTheory = (element) => {
  return <Theory theoryTitle={element.theoryTitle} theory={element.theory} />;
};

const Theory = (props) => {
  return (
    <>
      <h1 className="text-4xl" style={{ textAlign: "center" }}>
        Theory
      </h1>
      <h1 className="mb-4 mt-6 text-2xl">{props.theoryTitle}</h1>
      <p className="text-xl font-light leading-relaxed mt-6 mb-4 text-gray-800">
        {props.theory}
      </p>
    </>
  );
};

const TheoryElement = (props) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        {" "}
        <div className="container" style={{ padding: "1rem" }}>
         { createTheory(props.value) }
        </div>
      </div>
    </>
  );
};

export default TheoryElement;
