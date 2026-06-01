import React, { useState } from "react";
import { validateEmail } from "../utils/validators";

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [btnText, setBtnText] = useState("Send Message");
  const [btnStyle, setBtnStyle] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (!name || !email || !subject || !message) {
      alert("Please fill out all fields.");
      return;
    }
    
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setIsDisabled(true);
    setBtnText("Sending...");

    try {
      const success = await onSubmit({ name, email, subject, message });
      if (success) {
        setBtnText("Sent Successfully!");
        setBtnStyle({ backgroundColor: "#28a745", borderColor: "#28a745", color: "#fff" });
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        throw new Error("Failed to send");
      }
    } catch (err) {
      setBtnText("Error! Try Again");
      setBtnStyle({ backgroundColor: "#dc3545", borderColor: "#dc3545", color: "#fff" });
    } finally {
      setTimeout(() => {
        setBtnText("Send Message");
        setBtnStyle({});
        setIsDisabled(false);
      }, 3000);
    }
  };

  return (
    <form className="contact-form p-4 rounded-3 border bg-dark-deep" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="form-control"
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div className="mb-3">
        <input 
          type="email" 
          placeholder="Your Email" 
          className="form-control"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <div className="mb-3">
        <input 
          type="text" 
          placeholder="Subject" 
          className="form-control"
          value={subject} 
          onChange={(e) => setSubject(e.target.value)} 
          required 
        />
      </div>
      <div className="mb-3">
        <textarea 
          placeholder="Your Message" 
          rows="5" 
          className="form-control"
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required 
        />
      </div>
      <button 
        type="submit" 
        className="btn btn-primary w-100 hover-effect fw-bold py-2"
        style={btnStyle}
        disabled={isDisabled}
      >
        {btnText}
      </button>
    </form>
  );
}
