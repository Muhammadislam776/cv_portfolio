export default function Footer() {
  return (
    <footer className="footer-section py-4" style={{ background: '#07181c', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
      <div className="container">
        <div className="row align-items-center text-center text-md-start g-3">
          
          {/* LEFT COLUMN: COPYRIGHT */}
          <div className="col-md-6">
            <p className="mb-0 text-muted">
              © {new Date().getFullYear()} Muhammad Islam. All Rights Reserved.
            </p>
          </div>

          {/* RIGHT COLUMN: SOCIAL LINKS */}
          <div className="col-md-6 text-md-end">
            <div className="footer-social d-flex justify-content-center justify-content-md-end gap-3">
              <a className="hover-effect text-white fs-5" href="https://github.com/Muhammadislam776" target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a className="hover-effect text-white fs-5" href="https://www.youtube.com/@Creator.804" target="_blank" rel="noreferrer" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
              <a className="hover-effect text-white fs-5" href="https://linkedin.com/in/muhammad-islam-4878a9342" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a className="hover-effect text-white fs-5" href="https://x.com/islam_muha77374" target="_blank" rel="noreferrer" aria-label="X">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a className="hover-effect text-white fs-5" href="https://wa.me/923196590756" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}