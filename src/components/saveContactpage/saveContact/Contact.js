import React from "react";

export default function Contact({ contact, setShowCallingDashBoard }) {
  return (
    <section>
      <div onClick={setShowCallingDashBoard} className="saved-contact-card">
        <div
          style={{
            backgroundColor: contact.backgroundColor,
            color: contact.textColor,
          }}
          id="saved-contact-avarter"
        >
          {contact.user}
        </div>
        <h5 id="saved-contact-name">{contact.firstName}</h5>
      </div>
    </section>
  );
}
