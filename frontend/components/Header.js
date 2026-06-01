import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  
  // Settings state (local to panel before applying)
  const [color, setColor] = useState('#00e6d0');
  const [mode, setMode] = useState('dark');
  const [cursor, setCursor] = useState('advanced');

  // Backup references for reverting
  const backupColor = useRef('#00e6d0');
  const backupMode = useRef('dark');
  const backupCursor = useRef('advanced');

  const panelRef = useRef(null);

  // Load initial settings on mount
  useEffect(() => {
    const savedColor = localStorage.getItem('themeColor') || '#00e6d0';
    const savedMode = localStorage.getItem('themeMode') || 'dark';
    const savedCursor = localStorage.getItem('cursorStyle') || 'advanced';
    
    setColor(savedColor);
    setMode(savedMode);
    setCursor(savedCursor);
    
    backupColor.current = savedColor;
    backupMode.current = savedMode;
    backupCursor.current = savedCursor;
  }, []);

  // Handle toggling panel
  const togglePanel = (e) => {
    e.stopPropagation();
    if (!isOpen) {
      // Capture backups before showing
      const activeColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color').trim() || '#00e6d0';
      backupColor.current = activeColor;
      backupMode.current = document.body.classList.contains('light-mode') ? 'light' : 'dark';
      backupCursor.current = document.body.classList.contains('custom-cursor') ? 'advanced' : 'simple';
      
      setColor(backupColor.current);
      setMode(backupMode.current);
      setCursor(backupCursor.current);
    } else {
      revertChanges();
    }
    setIsOpen(!isOpen);
  };

  const revertChanges = () => {
    document.documentElement.style.setProperty('--main-color', backupColor.current);
    
    if (backupMode.current === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
    
    if (backupCursor.current === 'advanced') {
      document.body.classList.add('custom-cursor');
    } else {
      document.body.classList.remove('custom-cursor');
    }

    setColor(backupColor.current);
    setMode(backupMode.current);
    setCursor(backupCursor.current);
  };

  // Live previews
  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
    document.documentElement.style.setProperty('--main-color', newColor);
  };

  const handleModeChange = (e) => {
    const newMode = e.target.value;
    setMode(newMode);
    if (newMode === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  };

  const handleCursorChange = (e) => {
    const newCursor = e.target.value;
    setCursor(newCursor);
    if (newCursor === 'advanced') {
      document.body.classList.add('custom-cursor');
    } else {
      document.body.classList.remove('custom-cursor');
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    revertChanges();
    setIsOpen(false);
  };

  const handleApply = (e) => {
    e.preventDefault();
    localStorage.setItem('themeColor', color);
    localStorage.setItem('themeMode', mode);
    localStorage.setItem('cursorStyle', cursor);

    backupColor.current = color;
    backupMode.current = mode;
    backupCursor.current = cursor;

    setIsOpen(false);
  };

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        panelRef.current && 
        !panelRef.current.contains(e.target) && 
        !e.target.closest('#theme-settings-toggle')
      ) {
        if (isOpen) {
          revertChanges();
          setIsOpen(false);
        }
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, color, mode, cursor]);

  const isLinkActive = (path) => {
    return router.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{ borderBottom: '2px solid var(--main-color)' }}>
      <div className="container d-flex align-items-center justify-content-between">
        
        <div className="d-flex align-items-center gap-2 order-0">
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navMenu"
            style={{ borderColor: 'var(--main-color)' }}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link href="/" className="navbar-brand m-0" style={{ fontWeight: 700, fontSize: '24px' }}>
            Muhammad <span style={{ color: 'var(--main-color)' }}>Islam</span>
          </Link>
        </div>

        <div className="collapse navbar-collapse order-3 order-lg-1" id="navMenu">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <Link href="/" className={`nav-link ${isLinkActive('/')}`}>Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className={`nav-link ${isLinkActive('/about')}`}>About</Link>
            </li>
            <li className="nav-item">
              <Link href="/experience" className={`nav-link ${isLinkActive('/experience')}`}>Experience</Link>
            </li>
            <li className="nav-item">
              <Link href="/projects" className={`nav-link ${isLinkActive('/projects')}`}>Projects</Link>
            </li>
            <li className="nav-item">
              <Link href="/cv" className={`nav-link ${isLinkActive('/cv')}`}>CV</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className={`nav-link ${isLinkActive('/contact')}`}>Contact</Link>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center gap-4 order-1 order-lg-2">
          {/* Social Links - hidden on mobile */}
          <div className="header-social d-flex gap-4">
            <a className="hover-effect" href="https://github.com/Muhammadislam776" target="_blank" rel="noreferrer" style={{ color: 'rgb(125, 117, 117)' }} aria-label="GitHub">
              <i className="bi bi-github" />
            </a>
            <a className="hover-effect" href="https://linkedin.com/in/muhammad-islam-4878a9342" target="_blank" rel="noreferrer" style={{ color: 'rgb(125, 117, 117)' }} aria-label="LinkedIn">
              <i className="bi bi-linkedin" />
            </a>
            <a className="hover-effect" href="https://wa.me/923196590756" target="_blank" rel="noreferrer" style={{ color: 'rgb(125, 117, 117)' }} aria-label="WhatsApp">
              <i className="bi bi-whatsapp" />
            </a>
          </div>

          {/* Settings Panel Toggle */}
          <div className="settings-container position-relative">
            <button 
              id="theme-settings-toggle" 
              className="btn btn-link p-0 hover-effect" 
              onClick={togglePanel}
              style={{ color: 'var(--main-color)', fontSize: '20px', textDecoration: 'none' }}
              aria-label="Settings"
            >
              <i className="bi bi-gear-fill" />
            </button>

            {/* Panel Dropdown */}
            {isOpen && (
              <div 
                ref={panelRef}
                className="settings-panel" 
                style={{ 
                  position: 'absolute', 
                  right: 0, 
                  top: '100%', 
                  marginTop: '15px', 
                  background: '#111', 
                  border: '1px solid var(--main-color)', 
                  padding: '15px', 
                  borderRadius: '8px', 
                  boxShadow: '0px 5px 15px rgba(0,0,0,0.5)', 
                  width: '200px', 
                  zIndex: 1050 
                }}
              >
                <h6 style={{ color: 'white', marginBottom: '15px', fontWeight: 'bold' }}>Settings</h6>

                <div className="mb-3 text-start">
                  <label style={{ color: 'white', fontSize: '13px', display: 'block', marginBottom: '5px' }}>Theme Mode:</label>
                  <select 
                    value={mode} 
                    onChange={handleModeChange} 
                    className="form-select form-select-sm"
                    style={{ backgroundColor: '#222', color: 'white', borderColor: '#444' }}
                  >
                    <option value="dark">Dark Mode</option>
                    <option value="light">Light Mode</option>
                  </select>
                </div>

                <div className="mb-3 text-start">
                  <label style={{ color: 'white', fontSize: '13px', display: 'block', marginBottom: '5px' }}>Theme Color:</label>
                  <input 
                    type="color" 
                    value={color} 
                    onChange={handleColorChange} 
                    style={{ width: '100%', height: '35px', border: 'none', padding: '0', background: 'none', cursor: 'pointer' }}
                  />
                </div>

                <div className="mb-3 text-start">
                  <label style={{ color: 'white', fontSize: '13px', display: 'block', marginBottom: '5px' }}>Cursor Style:</label>
                  <select 
                    value={cursor} 
                    onChange={handleCursorChange} 
                    className="form-select form-select-sm"
                    style={{ backgroundColor: '#222', color: 'white', borderColor: '#444' }}
                  >
                    <option value="advanced">Advanced (Dot & Ring)</option>
                    <option value="simple">Simple (Default)</option>
                  </select>
                </div>

                <div className="d-flex justify-content-between mt-4">
                  <button 
                    onClick={handleClose} 
                    className="btn btn-sm btn-outline-light" 
                    style={{ fontSize: '12px' }}
                  >
                    Close
                  </button>
                  <button 
                    onClick={handleApply} 
                    className="btn btn-sm" 
                    style={{ background: 'var(--main-color)', color: '#000', fontSize: '12px', fontWeight: 'bold' }}
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </nav>
  );
}
