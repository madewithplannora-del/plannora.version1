const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
    res.status(200).json({ message: "Server is running", timestamp: new Date().toISOString() });
});

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
    console.error("Error:", err.message);
    res.status(500).json({
        message: "Internal server error",
        ...(process.env.NODE_ENV !== "production" && { error: err.message })
    });
});

module.exports = app;