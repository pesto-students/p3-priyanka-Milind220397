const express = require("express");
const cors = require('cors')
//const routes = require('./routes/routes')
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const dbConnect = require('./mongodb');
//app.use(cors())
app.use(express.json())

//Route to Signup
const sign = require('./routes/signup')
app.use('/signup',sign)
    
const login = require('./routes/login')
app.use('/login',login);      

const holdings = require('./routes/holdings')
app.use('/assets',holdings);

const income = require('./routes/income')
app.use('/income',income);
  
const expense = require('./routes/expense')
app.use('/expense',expense);

app.listen(PORT, () => {
  console.log(`server running at 127.0.0.1:${PORT}`);
});