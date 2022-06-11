import React from "react";

export default function NewContactOperation({ operation }) {
  return (
    <button onClick={operation.kindOfOperation} className="operation-btn">
      <span className="operation-icon">{operation.icon}</span>
      <span>{operation.nameOfOperation}</span>
    </button>
  );
}
