import React, { useState } from "react";
import "./App.css";
import { ContactForm } from "./ContactForm";
import { ToastContainer } from "react-toastify";
import { Intro } from "./Intro";
import { Outro } from "./Outro";
import { Social } from "./Social";

export const App = () => {
  const [isTyping, setTypingStatus] = useState(true);

  return (
    <React.Fragment>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      <div className="intro-section">
        <div className="title-div">
          <h1 className="main-title">Seth R. Watkins</h1>
          <h3 className="main-sub-title">Frontend Developer</h3>
        </div>
        <div className="intro-paragraph-container">
          <Intro setTypingStatus={setTypingStatus} />
        </div>
        <div className="arrow-down-container">
          <Outro isTyping={isTyping} />
        </div>
      </div>
      <div className="contact-section">
        <div className="contact-section-header">
          <h1>Lets start a conversation</h1>
        </div>
        <div className="form-container">
          <ContactForm />
        </div>
        <div className="social">
          <Social />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
