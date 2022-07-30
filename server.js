const express = require("express");

const bodyParser = require("body-parser");

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    var hight = Number(req.body.hight);
    var weight = Number(req.body.weight);

    res.send("your BMI is " + (weight / (hight * hight)));
});

app.listen(3010, function () {
    console.log("server started in 3010");
});