const express = require("express");
const app = express();
const cors = require("cors");
const poll = require("./db");

//minddleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log("Server started on port 5000");
});

// ROUTES

/// create user data in a TABLE
app.post("/user", async(req,res) => {
    try {
        console.log(req.body);      
    } catch(err) {
        console.log(err.message);
    }
})

app.get("/user", async(req,res) => {
    try {
        console.log(req.body);      
    } catch(err) {
        console.log(err.message);
    }
});