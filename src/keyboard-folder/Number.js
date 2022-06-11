import React from "react";

export default function Number({ keyNumber, inputHandler }) {
  return (
    <div className="keyboard-btn-container">
      <button onClick={inputHandler} className={`btn btn-${keyNumber.number}`}>
        <span className="number">{keyNumber.number}</span>
        <span className="letter">{keyNumber.letter}</span>
      </button>
    </div>
  );
}
