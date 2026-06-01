# Folder Structure - CV Portfolio Website

This document provides a comprehensive overview of the directories and files within the project.

## Overview

```
cv_portfolio/
│
├── server.js               # EJS Template express entry point
├── package.json            # Root Node dependencies
├── package-lock.json
├── .env                    # Shared configuration keys
├── .gitignore
├── README.md
│
├── frontend/               # Next.js React Frontend Application
│   ├── .next/              # Next.js build cache
│   ├── components/         # Global React UI Layout elements
│   │   ├── Footer.js
│   │   └── Header.js
│   ├── public/             # Next.js static asset folder
│   │   ├── css/
│   │   │   └── styles.css
│   │   ├── js/
│   │   │   └── main.js
│   │   └── cv/
│   ├── src/                # Next.js pages and React source files
│   │   ├── components/     # UI Component definitions
│   │   │   ├── ContactForm.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   └── SkillCard.jsx
│   │   ├── context/
│   │   │   └── ThemeContext.jsx
│   │   ├── pages/          # React route views
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Home.jsx
│   │   │   └── Projects.jsx
│   │   ├── services/       # Front-end API integration scripts
│   │   │   ├── contactService.js
│   │   │   └── projectService.js
│   │   └── utils/
│   │       └── validators.js
│   └── styles/
│       └── globals.css
│
├── views/                  # EJS Templates (Express UI Pages)
│   ├── home.ejs
│   ├── about.ejs
│   ├── contact.ejs
│   ├── cv.ejs
│   ├── experience.ejs
│   ├── projects.ejs
│   └── partials/           # EJS Sub-templates and headers
│       ├── header.ejs
│       ├── footer.ejs
│       └── social-icons.ejs
│
├── public/                 # EJS Static Assets
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   ├── cv/
│   └── images/
│
├── backend/                # Express API Backend Server
│   ├── src/
│   │   ├── app.js          # Express app routing and settings
│   │   ├── routes/         # API Endpoint controllers mapping
│   │   │   ├── contactRoutes.js
│   │   │   └── projectRoutes.js
│   │   ├── controllers/    # API Route request handlers
│   │   │   ├── contactController.js
│   │   │   └── projectController.js
│   │   ├── models/         # In-memory local data sources
│   │   │   ├── Contact.js
│   │   │   └── Project.js
│   │   ├── middleware/     # Global error catching logic
│   │   │   └── errorHandler.js
│   │   ├── config/         # Unused (offline fallback mode active)
│   │   ├── services/       # Future extension hooks
│   │   └── validators/     # Middleware data payload checking
│   │       └── formValidator.js
│   └── package.json
│
├── assets/                 # Brand resources and design files
├── database/               # Reserved for database setups
├── docs/                   # Documentation files
│   ├── API.md
│   ├── Architecture.md
│   └── Folder-Structure.md
│
├── tests/                  # Automated integration testing
│   ├── e2e/
│   └── integration/
│
└── deployment/             # Nginx and container setups
    ├── Dockerfile
    ├── nginx.conf
    └── kubernetes/
```
