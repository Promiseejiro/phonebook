import React from "react";
import Button from "./Button";
// react-icons
import { AiOutlineStar } from "react-icons/ai";
import {FiEdit} from "react-icons/fi"
import {BsThreeDotsVertical} from "react-icons/bs"
export default function EachSavedContactPage() {
  return (
    <div className="each-saved-contact-container">
      <div className="hero-section">
        <div className="set-contact-detail-btn-container">
          <Button icon={AiOutlineStar} />
          <Button icon={FiEdit} />
          <Button icon={BsThreeDotsVertical} />
        </div>
        <h1> </h1>
      </div>
      <section className="card-section">
        
      </section>
    </div>
  );
}
