import React from "react";
import Contacts from "./Contacts";

// react-icon
import { BsPlusLg } from "react-icons/bs";
import AllContactsDetails from "../../AllContactsDetails";
export default function ContactsDasboard({
  contacts,
  showRecentNumberCalled,
  showContactsDashBoard,
  setShowCallingDashBoard,
}) {
  return (
    <div className="saved-contact-container">
      <div className="saved-contact-dashboard">
        <Contacts
          contacts={contacts}
          setShowCallingDashBoard={setShowCallingDashBoard}
        />
      </div>
      <AllContactsDetails
        showRecentNumberCalled={showRecentNumberCalled}
        showContactsDashBoard={showContactsDashBoard}
        contactIcon={<BsPlusLg />}
      />
    </div>
  );
}
