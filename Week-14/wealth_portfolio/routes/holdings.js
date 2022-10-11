const express = require("express");
const dbConnect = require('../mongodb');
const mongodb = require("mongodb");
const router = express.Router();
require("dotenv").config();





router.get("/", async (req, res) => {
    console.log(req.query);
    let db = dbConnect('Assets');

    let res1 = await (await db).find({ user_id: req.query.id}).toArray();
    if (res1.length == 0) {
        res.send({
            code: '404',
            error: "No Assets Found"
        }) 
    }
    else {
        res.send(res1);
    }

});


router.post("/add", async (req, res) => {
    console.log(req.body);
    let db = dbConnect('Assets');

    let result = await (await db).insertOne(req.body)
    if (result.acknowledged){
        console.log("Inserted Successfully");
    }
    res.send(result);  
});
   
router.delete("/delete", async (req, res) => {
    console.log("Inside Delete");
    let db = dbConnect('Assets');

    let result = await (await db).deleteOne({_id:new mongodb.ObjectId(req.query.id)})
    if (result.acknowledged){
        console.log("Deleted Successfully");
    }
    res.send(result);  
});



module.exports = router;
