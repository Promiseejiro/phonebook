import React from "react";
import NewContactOperation from "./NewContactOperation";
export default function NewContactsOPerations({ operations }) {
  return (
    <div
      className="operation-container
    "
    >
      {operations.map((newcontact, index) => (
        <NewContactOperation key={index} operation={newcontact} />
      ))}
    </div>
  );
}
