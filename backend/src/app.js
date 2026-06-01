// Express App Setup
const express = require("express");
const cors = require("cors");
const PDFDocument = require("pdfkit");
const errorHandler = require("./middleware/errorHandler");
const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing Endpoints
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes);

// Base Route
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP", message: "API server is healthy" });
});

// DOWNLOAD CV PDF ENDPOINT
app.get("/download-cv", (req, res) => {
  try {
    const doc = new PDFDocument({ size: "A4", margin: 40 });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "inline; filename=MuhammadIslamCV.pdf");

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

// Error handling middleware
app.use(errorHandler);

module.exports = app;
