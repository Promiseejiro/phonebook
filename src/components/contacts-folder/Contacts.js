import React from "react";
import Contact from "./Contact";

export default function Contacts({
  contacts,
  showCallingDashBoard,
  setShowCallingDashBoard,
  removeCallingDashboard,
  showKeyboard,
}) {
  return (
    <div
      className="contact-container
    "
    >
      {contacts.map((contact, index) => (
        <Contact
          key={index}
          contact={contact}
          showCallingDashBoard={showCallingDashBoard}
          setShowCallingDashBoard={setShowCallingDashBoard}
          removeCallingDashboard={removeCallingDashboard}
          showKeyboard={showKeyboard}
        />
      ))}
    </div>
  );
}
