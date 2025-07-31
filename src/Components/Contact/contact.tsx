import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateForm = () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError("Name is required.");
      isValid = false;
    } else {
      setNameError("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError("Email is required.");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email.");
      isValid = false;
    } else {
      setEmailError("");
    }

    const wordCount = message.trim().split(/\s+/).length;
    if (!message.trim()) {
      setMessageError("Message is required.");
      isValid = false;
    } else if (wordCount < 4) {
      setMessageError("Message must contain at least 4 words.");
      isValid = false;
    } else {
      setMessageError("");
    }

    return isValid;
  };

  const onsubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setIsSubmitted(false);
      return;
    }

    setIsSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section className="contact">
      <form onSubmit={onsubmit}>
        <h2>Contact Form</h2>

        <div className="input-box">
          <label>Full Name</label>
          <input
            type="text"
            className="field"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <div className="error-message">{nameError}</div>}
        </div>

        <div className="input-box">
          <label>Email Address</label>
          <input
            type="text"
            className="field"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <div className="error-message">{emailError}</div>}
        </div>

        <div className="input-box">
          <label>Message</label>
          <textarea
            className="field_mess"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {messageError && <div className="error-message">{messageError}</div>}
        </div>

        <button type="submit">Send Message</button>

        {isSubmitted && (
          <div className="success-message">
            Your message has been sent successfully!
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;
