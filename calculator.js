import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

/******************** CALCULATOR **********************/
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var num1 = parseFloat(req.body.num1);
  var num2 = parseFloat(req.body.num2);
  var result = num1 + num2;
  res.send("The result of Calculation is : " + result);
});

/******************** BMI CALCULATOR **********************/
app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight / (height * height);
  res.send("The calculated BMI is : " + bmi);
});

/******************** Server listening on port 3000 ***********************/
app.listen(3000, function () {
  console.log("Server is listening on port 3000");
});
