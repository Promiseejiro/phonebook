import React from "react";
// react icon
import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdTextsms } from "react-icons/md";
// imported component
import Keyboard from "../keyboard-folder/Keyboard";
import NewContactsOPerations from "./NewContactsOPerations";
import SaveContactDashboard from "./SaveContactDashboard";
export default function SaveNewContacts({
  hideKeyBoard,
  inputDetailHandler,
  submitContactDetailsHandler,
  numberInput,
  inputHandler,
  sliceHandler,
  showOperation,
  phoneNumberChange,
}) {
  const [showDashBoard, setShowDashBoard] = useState(false);
  // function

  const operationHandler = (e) => {
    if (e.currentTarget.lastChild.textContent === "Create new contact") {
      setShowDashBoard(true);
    } else if (e.currentTarget.lastChild.textContent === "Add to a contact") {
    } else {
      console.log("Send sms");
    }
  };
  // variable
  const operations = [
    {
      nameOfOperation: "Create new contact",
      icon: <BsPlusLg />,
      kindOfOperation: operationHandler,
    },

    {
      nameOfOperation: "Add to a contact",
      icon: <AiOutlineUserAdd />,
      kindOfOperation: operationHandler,
    },

    {
      nameOfOperation: "Send SMS",
      icon: <MdTextsms />,
      kindOfOperation: operationHandler,
    },
  ];

  return (
    <div className="save-new-contact-container">
      {showOperation && <NewContactsOPerations operations={operations} />}
      <Keyboard
        hideKeyBoard={hideKeyBoard}
        inputHandler={inputHandler}
        numberInput={numberInput}
        sliceHandler={sliceHandler}
      />
      {showDashBoard ? (
        <SaveContactDashboard
          phoneNumber={numberInput}
          backToKeyBoard={() => {
            setShowDashBoard(false);
          }}
          phoneNumberChange={phoneNumberChange}
          inputDetailHandler={inputDetailHandler}
          submitContactDetailsHandler={submitContactDetailsHandler}
        />
      ) : (
        ""
      )}
    </div>
  );
}
