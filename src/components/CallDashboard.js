import React from "react";
import { MdCallEnd } from "react-icons/md";
import { GiSpeaker } from "react-icons/gi";
import { BiMicrophoneOff } from "react-icons/bi";
import { CgKeyboard } from "react-icons/cg";
import { AiFillPlusSquare } from "react-icons/ai";
export default function CallDashboard({
  contact,
  removeCallingDashboard,
  showKeyboard,
}) {
  return (
    <div className="calling-dashboard">
      {/* ringing toon */}
      <audio src="ringtoone.mp3"></audio>
      <div className="user-image"></div>
      <h2>{contact.firstName}</h2>
      <h4>{contact.mobile}</h4>
      <p>calling...</p>
      <div className="callling-option">
        <button>
          <BiMicrophoneOff
            className="call-operation-icon"
            onClick={() => {
              console.log(document.querySelector("audio"));
              document.querySelector("audio").play();
            }}
          />
        </button>
        <button>
          <CgKeyboard className="call-operation-icon" onClick={showKeyboard} />
        </button>
        <button>
          <GiSpeaker className="call-operation-icon" />
        </button>
        <button>
          <AiFillPlusSquare className="call-operation-icon" />
        </button>
      </div>
      <button onClick={removeCallingDashboard} className="btn btn-end-call">
        <MdCallEnd className="call-operation-icon" />
      </button>
    </div>
  );
}
