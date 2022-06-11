import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
export default function AllContactsDetails({
  showContactsDashBoard,
  contactIcon,
  myContact,
  showRecentNumberCalled,
}) {
  return (
    <div className="all-contact-container">
      <button onClick={showRecentNumberCalled}>
        <AiFillClockCircle className="icon" />
        <span>Recents </span>
      </button>
      <button onClick={showContactsDashBoard}>
        <span>{contactIcon}</span>
        <span>{myContact}</span>
      </button>
      <button>
        <AiFillStar />
        <span>My Center</span>
      </button>
    </div>
  );
}
