const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/studentDB")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const studentRoutes = require("./routes/students");
app.use("/api/students", studentRoutes);

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
