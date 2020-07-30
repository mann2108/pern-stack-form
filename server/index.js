const express = require("express");
const app = express();
const pool = require("./db");
const cors = require("cors");
const { response } = require("express");
const path = require('path');
const PORT=process.env.PORT||5000;
app.use(express.static(path.join(__dirname,'../frontend','build')));
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname,"../frontend",'build','index.html'));
});
app.use(express.json());
app.use(cors());
app.listen(PORT);
app.post("/user", async(req,res) => {
    try {
        const {firstName, lastName, phoneNo, email, dob, bio, password, securityQue, answer} = req.body;

        var query = "SELECT * from user_data WHERE email = $1";
        const checkValidity = await pool.query(query,[email]);
        
        if(checkValidity.rowCount!=0) {
            res.statusMessage = "USER ALREADY EXIST WITH THIS EMAIL ID ( " + email + " )"
            res.body="mann";
            res.status(403).end();
        }
        else {
            const newUser = await pool.query("INSERT INTO user_data (firstname,lastname,phoneno,email,dob,bio,pwd,securityque,answer) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *" ,
            [firstName, lastName, parseInt(phoneNo), email, dob, bio, password, securityQue, answer]);
            res.statusMessage = "Successfully data inserted !";
            res.status(200);
            res.body="mann";
            res.json(newUser.rows[0]);
        }
    } catch(err) {
        res.statusMessage = err.message;
        res.body="mann";
        res.status(400).end();
    }
});
