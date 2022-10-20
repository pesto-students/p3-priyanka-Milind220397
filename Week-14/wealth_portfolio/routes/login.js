const express = require("express");
const dbConnect = require('../mongodb');
const router = express.Router();
require("dotenv").config();





router.get("/", async (req, res) => {
    console.log("Hello");
    let db = dbConnect('Users');

    let res1 = await (await db).find({ user_id: req.body.user_id, pwd: req.body.pwd }).toArray();
    if (res1.length == 0) {
        res.send({
            code: '404',
            error: "User Id or Password is Incorrect"
        })
    }
    else {

        res.send({
            code: '200',
            success: "Logged In Successfully"
        })
    }

});



module.exports = router;
