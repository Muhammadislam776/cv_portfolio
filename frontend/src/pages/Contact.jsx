import React from "react";
import ContactForm from "../components/ContactForm";
import { submitContactMessage } from "../services/contactService";

export default function Contact() {
  const handleMessageSubmit = async (formData) => {
    try {
      const response = await submitContactMessage(formData);
      return response && response.ok;
    } catch (err) {
      console.error("Failed to submit message:", err);
      return false;
    }
  };

  return (
    <section id="contact" className="contact-section py-5 container">
      <h2 className="section-title text-center text-white mb-5">Contact Me</h2>
      <div className="row g-5 align-items-start">
        
        {/* Info Columns */}
        <div className="col-lg-5 col-md-12 text-white">
          <h3 className="mb-4">Get In Touch</h3>
          <p className="text-muted mb-4">
            Feel free to reach out if you have a project idea, collaboration opportunity, or just want to say hello.
          </p>
          
          <div className="contact-info-card d-flex align-items-center gap-3 bg-dark-deep p-4 rounded-3 border mb-3">
            <i className="bi bi-envelope fs-4 text-primary"></i>
            <div>
              <h5 className="mb-0 fw-bold">Email</h5>
              <p className="mb-0 text-muted small">muhammadislam6590.i@gmail.com</p>
            </div>
          </div>

          <div className="contact-info-card d-flex align-items-center gap-3 bg-dark-deep p-4 rounded-3 border mb-3">
            <i className="bi bi-telephone fs-4 text-primary"></i>
            <div>
              <h5 className="mb-0 fw-bold">Phone</h5>
              <p className="mb-0 text-muted small">+92 319 6590756</p>
            </div>
          </div>

          <div className="contact-info-card d-flex align-items-center gap-3 bg-dark-deep p-4 rounded-3 border">
            <i className="bi bi-geo-alt fs-4 text-primary"></i>
            <div>
              <h5 className="mb-0 fw-bold">Location</h5>
              <p className="mb-0 text-muted small">Pakistan</p>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="col-lg-7 col-md-12">
          <ContactForm onSubmit={handleMessageSubmit} />
        </div>
      </div>
    </section>
  );
}
