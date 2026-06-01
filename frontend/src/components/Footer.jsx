import React from "react";

export default function Footer() {
  return (
    <footer className="footer-section py-4" style={{ background: "#07181c", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
      <div className="container">
        <div className="row align-items-center text-center text-md-start g-3">
          <div className="col-md-6">
            <p className="mb-0 text-muted" style={{ color: "#a7b8c8" }}>
              © {new Date().getFullYear()} Muhammad Islam. All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="footer-social d-flex justify-content-center justify-content-md-end gap-3">
              <a className="text-white fs-5" href="https://github.com/Muhammadislam776" target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a className="text-white fs-5" href="https://linkedin.com/in/muhammad-islam-4878a9342" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a className="text-white fs-5" href="https://wa.me/923196590756" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
