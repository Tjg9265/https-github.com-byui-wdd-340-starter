/******************************************
 * Main server file for CSE Motors
 ******************************************/

/* ***********************
 * Require Statements
 *************************/
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
require("dotenv").config();

/* ***********************
 * Express App Setup
 *************************/
const app = express();

/* ***********************
 * View Engine & Layout Setup
 *************************/
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // ensures Express knows where to find your EJS files
app.use(expressLayouts);
app.set("layout", "./layouts/layout"); // default layout file

/* ***********************
 * Static Files
 *************************/
app.use(express.static(path.join(__dirname, "public"))); // allows serving CSS, images, and JS

/* ***********************
 * Routes
 *************************/
const staticRoutes = require("./routes/static");
app.use("/", staticRoutes);

// -------------------------
// Index Rout
// -------------------------
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`App listening on http://${host}:${port}`);
});
