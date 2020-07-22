const express = require("express");
const app = express();
const pool = require("./db");

//minddleware
app.use(express.json());

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
// ROUTES

/// Post
app.post("/user", async(req,res) => {
    try {
        const {fname, lname, phno, email, dob, pwd, gender, languages, dateadded} = req.body;
        var query = "SELECT * from user_data WHERE email = $1";
        const checkValidity = await pool.query(query,[email]);
        
        if(checkValidity.rowCount!=0) {
            err = new Error();
            err.message = "USER ALREADY EXIST WITH THIS EMAIL";
            throw err;
        }
        else {
            const newUser = await pool.query("INSERT INTO user_data (fname,lname,phno,email,dob,pwd,gender,languages,dateadded) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *" ,
            [fname, lname, phno, email, dob, pwd, gender, languages, dateadded]);
            res.statusCode = 200;
            res.json(newUser.rows[0]);          
        }
        
    } catch(err) {
        res.json(err);
    }
});
