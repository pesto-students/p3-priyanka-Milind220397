const express = require("express");
const bodyparser = require("body-parser");
const router = express.Router();
const axios = require("axios");
const { application } = require("express");
require("dotenv").config();
const API_KEY = process.env.API_KEY;
const app = express();

//parse application urlencoded
app.use(bodyparser.urlencoded({extended:false}));
//parse application json
app.use(bodyparser.json());

router.get("/current", async (req, res) => {
  var promises = [];
  const result = [];
  const cities = req.query.city.split(",");
  console.log(cities);
  for (let city of cities) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
    promises.push(await axios.get(url));
  }

  try {
   
    console.log("Inside Try catch");
    const res1 = await Promise.all(promises);
    const data = res1.map((res1) => res1.data);
    console.log(""+cities.length);

    //Sending response required in format
    for (let i = 0; i < cities.length; i++) {
      console.log("Inside Loop")
      let temp = {
        City: JSON.stringify(data[i].name),
        Country: JSON.stringify(data[i].sys.country),
        Temperature: JSON.stringify(data[i].main.temp),
        Humidity: JSON.stringify(data[i].main.humidity),
        Pressure: JSON.stringify(data[i].main.pressure),
        Windspeed: JSON.stringify(data[i].wind.speed),
        Weather: JSON.stringify(data[i].weather[0].description)
      }
     console.log(temp);
     res.write("<br/>" + JSON.stringify(temp));

    }
    res.end();
  } catch (err) {
    console.log("Promise failed")
  }

  const page = !req.query.page ? 1 : parseInt(req.query.page);
  const limit = !req.query.limit ? 1 : parseInt(req.query.limit);
  const start = (page - 1) * limit;
  const end = page * limit;

  const resultp = result.slice(start, end);
  // res.send(resultp);
  // res.send(result)

});


router.get("/forecast", async (req, res) => {

  if (!req.query.city || !req.query.days) return [];
  const cities = req.query.city.split(",");
  const { days } = req.query;
  let promises = [];

  //Push all the promises in array
  for (let i = 0; i < cities.length; i++) {
    let url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY1}&q=${cities[i]}&days=${days}`;
    promises.push(await axios.get(url));
  }
  try {
    console.log("Inside Try catch");
    const res1 = await Promise.all(promises);
    const data = res1.map((res1) => res1.data);

    //Send Response In Proper Format  fpr all cities
    for (let i = 0; i < cities.length; i++) {
      res.write("<br/>" + JSON.stringify(data[i].location));
      for (let j = 0; j < days; j++) {
        res.write("<br/> {Date:" + data[i].forecast.forecastday[j].date + "}");
        res.write("" + JSON.stringify(data[i].forecast.forecastday[j].day));
      }
    }
    res.end();
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;

