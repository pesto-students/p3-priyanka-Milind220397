const express = require("express");
const dbConnect = require('../mongodb');
const router = express.Router();
require("dotenv").config();





router.get("/", async (req, res) => {
    console.log(req.query);
    let db = dbConnect('Stats');

    let res1 = await (await db).find({ user_id: req.query.id,D_C:'C'}).toArray();
    if (res1.length == 0) {
        res.send({
            code: '404',
            error: "No income Found"  
        }) 
    }
    else {
        res.send(res1);
    }

});



module.exports = router;
