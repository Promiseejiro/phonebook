import React from "react";
import { FiArrowDownLeft } from "react-icons/fi";
import { MdErrorOutline } from "react-icons/md";
// component
import CallDashboard from "../CallDashboard";
export default function Contact({
  contact,
  showCallingDashBoard,
  setShowCallingDashBoard,
  hideCallingDashBoard,
  removeCallingDashboard,
  showKeyboard,
}) {
  return (
    <section>
      <div onClick={setShowCallingDashBoard} className="contact">
        <h4
          className="user"
          style={{
            backgroundColor: contact.backgroundColor,
            color: contact.textColor,
          }}
        >
          {contact.user}
        </h4>

        <h5 className="user-name">{contact.firstName}</h5>

        <span className="arrow-down-icon">
          <FiArrowDownLeft />
        </span>

        <span className="country">mobile</span>

        <span className="time-called">6 hour</span>

        <button className="details-about-contact">
          <MdErrorOutline />
        </button>

        <span className="horizontal-line"></span>
      </div>
      {showCallingDashBoard && (
        <CallDashboard
          showKeyboard={showKeyboard}
          contact={contact}
          removeCallingDashboard={removeCallingDashboard}
        />
      )}
    </section>
  );
}
