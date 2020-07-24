const express = require("express");
const app = express();
const pool = require("./db");
const cors = require("cors");
const { response } = require("express");

//minddleware
app.use(express.json());

// Handling cross origin resource sharing (localhost:3000 and localhost:5000)
app.use(cors());

app.listen(5000, () => {
    console.log("Server started on port 5000");
});

// localhost:5000/user Post Route
app.post("/user", async(req,res) => {
    try {
        const {firstName, lastName, phoneNo, email, dob, bio, password, securityQue, answer} = req.body;

        var query = "SELECT * from user_data WHERE email = $1";
        const checkValidity = await pool.query(query,[email]);
        
        if(checkValidity.rowCount!=0) {
            res.statusMessage = "USER ALREADY EXIST WITH THIS EMAIL ID ( " + email + " )"
            res.status(403).end();
        }
        else {
            const newUser = await pool.query("INSERT INTO user_data (firstname,lastname,phoneno,email,dob,bio,pwd,securityque,answer) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *" ,
            [firstName, lastName, parseInt(phoneNo), email, dob, bio, password, securityQue, answer]);
            res.statusMessage = "Successfully data inserted !";
            res.status(200);
            res.json(newUser.rows[0]);
        }
    } catch(err) {
        res.statusMessage = err.message;
        res.status(400).end();
    }
});
