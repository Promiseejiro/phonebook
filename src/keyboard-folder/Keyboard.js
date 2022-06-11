import Numbers from "./Numbers";

// react-icon
import { MdKeyboardHide } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FiDelete } from "react-icons/fi";
import { IoIosRecording } from "react-icons/io";
export default function Keyboard({
  sliceHandler,
  inputHandler,
  numberInput,
  hideKeyBoard,
}) {
  const numberKeys = [
    {
      number: 1,
      letter: <IoIosRecording />,
    },
    {
      number: 2,
      letter: "ABC",
    },
    {
      number: 3,
      letter: "DEF",
    },
    {
      number: 4,
      letter: "GHI",
    },
    {
      number: 5,
      letter: "JKL",
    },
    {
      number: 6,
      letter: "MNO",
    },
    {
      number: 7,
      letter: "PQRS",
    },
    {
      number: 8,
      letter: "TUV",
    },
    {
      number: 9,
      letter: "WXYZ",
    },
    {
      number: "*",
      letter: "",
    },
    {
      number: 0,
      letter: "+",
    },
    {
      number: "#",
      letter: "",
    },
  ];

  return (
    <div className="numbers-keyboard">
      <div className="screen-container">
        <div className="screen">{numberInput}</div>
        <button className="del" onClick={sliceHandler}>
          <FiDelete className="del-icon" />
        </button>
      </div>
      <div className="key-container">
        <Numbers numberKeys={numberKeys} inputHandler={inputHandler} />
      </div>
      <div className="call-container">
        <button className="btn call-btn">
          <IoCallOutline className="call-container-icon" />
        </button>
        <button onClick={hideKeyBoard} className="hide-keyboard-btn">
          <MdKeyboardHide className="call-container-icon" />
        </button>
      </div>
    </div>
  );
}
