require("dotenv").config();
const express = require("express");
const path = require("path");
const PDFDocument = require("pdfkit");

const app = express();

// =====================
// ROOT PATHS
// =====================
const ROOT = __dirname;
const FRONTEND = path.join(ROOT, "frontend");

// =====================
// MIDDLEWARE
// =====================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend public assets
app.use(express.static(path.join(FRONTEND, "public")));

// =====================
// VIEW ENGINE (EJS)
// =====================
app.set("view engine", "ejs");
app.set("views", path.join(FRONTEND, "views"));

// =====================
// PAGES ROUTES (EJS)
// =====================
app.get("/", (req, res) => res.render("home"));
app.get("/about", (req, res) => res.render("about"));
app.get("/experience", (req, res) => res.render("experience"));
app.get("/projects", (req, res) => res.render("projects"));
app.get("/contact", (req, res) => res.render("contact"));
app.get("/cv", (req, res) => res.render("cv"));

// =====================
// DOWNLOAD CV PDF ENDPOINT
// =====================
app.get("/download-cv", (req, res) => {
  try {
    const doc = new PDFDocument({ size: "A4", margin: 40 });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=MuhammadIslamCV.pdf");

    doc.pipe(res);

    // HEADER
    doc
      .fontSize(26)
      .fillColor("#1F4E79")
      .text("Muhammad Islam", { align: "center" });

    doc
      .fontSize(12)
      .fillColor("#000")
      .text("Email: muhammadislam6590.i@gmail.com")
      .text("Phone: +92 319 6590756")
      .text("Location: Pakistan");

    doc.moveDown();

    // EDUCATION
    doc
      .fontSize(18)
      .fillColor("#1F4E79")
      .text("Education");

    doc
      .fontSize(12)
      .fillColor("#000")
      .list([
        "BS Computer Science - COMSATS University Islamabad (6th Semester)",
        "Intermediate - KIPS College",
        "Matriculation - Local School"
      ]);

    doc.moveDown();

    // SKILLS
    doc
      .fontSize(18)
      .fillColor("#1F4E79")
      .text("Skills");

    doc
      .fontSize(12)
      .fillColor("#000")
      .list([
        "HTML5, CSS3, JavaScript",
        "Bootstrap",
        "Node.js, Express",
        "MongoDB",
        "Git & GitHub"
      ]);

    doc.moveDown();

    // PROJECTS
    doc
      .fontSize(18)
      .fillColor("#1F4E79")
      .text("Projects");

    doc
      .fontSize(12)
      .fillColor("#000")
      .list([
        "Portfolio Website - Node.js & Bootstrap",
        "Task Manager - Express + MongoDB",
        "Ecommerce UI - HTML/CSS/JS"
      ]);

    doc.moveDown();

    // EXPERIENCE
    doc
      .fontSize(18)
      .fillColor("#1F4E79")
      .text("Experience");

    doc
      .fontSize(12)
      .fillColor("#000")
      .list([
        "Frontend Developer - COMSATS University",
        "Web Development Intern - ABC Solutions",
        "Freelance Web Developer"
      ]);

    doc.end();
  } catch (error) {
    console.error("PDF generation error:", error);
    res.status(500).send("Error generating CV PDF");
  }
});

// =====================
// API ROUTES (backend folder)
// =====================
const contactRoutes = require("./backend/src/routes/contactRoutes");
const projectRoutes = require("./backend/src/routes/projectRoutes");

app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);

// =====================
// HEALTH CHECK
// =====================
app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

// =====================
// START SERVER
// =====================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Frontend: ${FRONTEND}`);
});