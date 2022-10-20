const express = require("express");
const dbConnect = require('../mongodb');
const router = express.Router();
require("dotenv").config();

router.get("/", async (req, res) => {
    res.send("Inside SignUP");
});

router.post("/", async (req, res) => {
    console.log("Inside Post");

    let db = dbConnect('Users');

    let res1 = await (await db).find({ user_id:req.body.user_id }).toArray();
    console.log(res1);
    if (res1.length == 0) { 
        let result = await (await db).insertOne(req.body)
        if (result.acknowledged) {
            console.log("Signed Up Successfully");
        }
        res.send({
            code:'200',
            success:"Signed Up Successfully"
        });
    }
    else {
        res.send({
            code:'404',
            error:"User ID already Present"
        });
        console.log("User ID already Present");

    }
    

});

module.exports = router;