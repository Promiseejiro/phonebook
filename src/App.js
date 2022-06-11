import "./App.css";
import { useState, useEffect } from "react";
// react-icons
import { RiKeyboardBoxLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
// importing components
import SeacrchForm from "./components/SeacrchForm";

import Contacts from "./components/contacts-folder/Contacts";

import AllContactsDetails from "./components/AllContactsDetails";

import SaveNewContacts from "./components/SaveNewContacts";
import ContactsDasboard from "./components/saveContactpage/saveContact/ContactsDasboard";
function App() {
  // states
  const colorType = ["cornflowerblue", " darksalmon", "coral"];
  const b = Math.floor(Math.random() * colorType.length);
  const [color, setColor] = useState(colorType[b]);
  const [textColor, setTextColor] = useState("#fff");
  const [showDashBoard, setShowDashBoard] = useState(false);
  const [showOperation, setShowOperation] = useState(false);
  const [numberInput, setNumberInput] = useState("");
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [contacts, setContacts] = useState([]);
  const [filteredContact, setFilteredContact] = useState(contacts);
  const [showContactDashboard, setShowContactDashboard] = useState(false);
  const [showSaveNewContact, setShowSaveNewContact] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const [showCallingDashBoard, setShowCallingDashBoard] = useState(false);

  // functions
  // const addContactTolocalStorage = () => {
  //   localStorage.setItem("contact", JSON.stringify(contacts));
  // };
  // const getContactFromLocalStorage = () => {
  //   if (localStorage.getItem("contact") === "") {
  //     localStorage.setItem("contact", JSON.stringify([]));
  //   } else {
  //     setContacts(JSON.parse(localStorage.getItem("contact")));
  //     console.log(contacts);
  //   }
  // };
  const phoneNumberChange = (e) => {
    setNumberInput(e.currentTarget.value);
  };

  const colorHandler = () => {
    setColor(colorType[b]);

    if (color === "cornflowerblue") {
      setTextColor("rgba(255,255,255,.8)");
    } else if (color === "darksalmon") {
      setTextColor("rgba(255,255,255,.4)");
    } else {
      setTextColor("rgba(255,255,255,6)");
    }
    return [textColor, color];
  };

  const inputHandler = (e) => {
    const input = e.currentTarget.firstChild.textContent;
    setNumberInput(numberInput + input);
    setShowOperation(true);
    return [numberInput, showOperation];
  };

  const sliceHandler = () => {
    setNumberInput(numberInput.slice(0, numberInput.length - 1));
    if (numberInput.length === 1) {
      setShowOperation(false);
    }
    return numberInput;
  };

  const inputDetailHandler = (e) => {
    setFirstNameInput(e.currentTarget.value);
    setLastNameInput(e.currentTarget.value);
    return [lastNameInput, firstNameInput];
  };

  const filterHandler = (e) => {
    const searchValue = e.currentTarget.value;
    setFilterValue(searchValue);
    return filterValue;
  };

  const setAllContactToFilteredContact = () => {
    if (filterValue === "") {
      setFilteredContact(filteredContact);
    }
    setFilteredContact(
      contacts.filter((contact) => contact.firstName.includes(filterValue))
    );
  };

  const submitContactDetailsHandler = (e) => {
    e.preventDefault();
    setContacts([
      ...contacts,
      {
        user: firstNameInput.charAt(0),
        textColor: textColor,
        backgroundColor: color,
        firstName: firstNameInput,
        lastName: lastNameInput,
        mobile: numberInput,
      },
    ]);
    colorHandler();
    setShowSaveNewContact(false);
    setShowContactDashboard(true);
    setNumberInput("");
    setAllContactToFilteredContact();
    setFilterValue("");
  };

  useEffect(() => {
    setAllContactToFilteredContact();
  }, [filterValue, contacts]);

  return (
    <div className="main-container">
      <SeacrchForm filterHandler={filterHandler} />

      <Contacts
        contacts={filteredContact}
        setShowCallingDashBoard={() => {
          setShowCallingDashBoard(true);
        }}
        showCallingDashBoard={showCallingDashBoard}
        removeCallingDashboard={() => {
          setShowCallingDashBoard(false);
          console.log(showCallingDashBoard);
        }}
        showKeyboard={() => {
          setShowSaveNewContact(true);
          console.log("hey");
          console.log(showSaveNewContact);
        }}
      />

      <button
        onClick={() => {
          setShowSaveNewContact(!showSaveNewContact);
        }}
        className="keyboard-btn"
      >
        <RiKeyboardBoxLine className="keyboard-icon" />
      </button>

      <AllContactsDetails
        contactIcon={<FaUser />}
        myContact={"My contacts"}
        showContactsDashBoard={() => {
          setShowContactDashboard(true);
        }}
      />

      {showSaveNewContact && (
        <SaveNewContacts
          submitContactDetailsHandler={submitContactDetailsHandler}
          inputDetailHandler={inputDetailHandler}
          inputHandler={inputHandler}
          phoneNumberChange={phoneNumberChange}
          numberInput={numberInput}
          sliceHandler={sliceHandler}
          hideKeyBoard={() => {
            setShowSaveNewContact(!showSaveNewContact);
          }}
          showOperation={showOperation}
          showDashBoard={showDashBoard}
          setShowContactDasBoard={() => {}}
        />
      )}
      {showContactDashboard ? (
        <ContactsDasboard
          contacts={filteredContact}
          backgroundColor={color}
          color={color}
          showRecentNumberCalled={() => {
            setShowContactDashboard(false);
          }}
          showContactsDashBoard={() => {
            setShowContactDashboard(false);
          }}
          setShowCallingDashBoard={() => {
            setShowCallingDashBoard(true);
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
