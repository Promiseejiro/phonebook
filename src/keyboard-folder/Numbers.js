import React from "react";

import Number from "./Number";

export default function Numbers({ numberKeys, inputHandler }) {
  return (
    <>
      {numberKeys.map((number, index) => (
        <Number keyNumber={number} key={index} inputHandler={inputHandler} />
      ))}
    </>
  );
}
