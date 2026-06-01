require("dotenv").config();
const express = require("express");
const path = require("path");

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