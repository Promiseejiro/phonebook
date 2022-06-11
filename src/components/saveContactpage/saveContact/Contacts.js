import React from "react";
import Contact from "./Contact";
export default function Contacts({ contacts, setShowCallingDashBoard }) {
  return (
    <div>
      {contacts.map((contact, index) => (
        <Contact
          contact={contact}
          key={index}
          setShowCallingDashBoard={setShowCallingDashBoard}
        />
      ))}
    </div>
  );
}
