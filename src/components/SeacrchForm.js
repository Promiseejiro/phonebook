import React from "react";
// react-icons
import { BsSearch } from "react-icons/bs";
import { BiMicrophone } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function SeacrchForm({ filterHandler }) {
  return (
    <div className="search-form-container">
      <div className="search-form-control">
        <button>
          <BsSearch className="icons search-icon" />
        </button>

        <input
          placeholder="Search contact"
          type="text"
          name=""
          id="search-input"
          onChange={filterHandler}
        />

        <button>
          <BiMicrophone className="icons microphone-icon" />
        </button>
      </div>

      <button>
        <BsThreeDotsVertical className="icons search-form-icons dot" />
      </button>
    </div>
  );
}
