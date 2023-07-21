const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const nodemailer = require("nodemailer");
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  var name = req.body.Name;
  var email = req.body.email;
  var message = req.body.message;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "siddhantkankaria122@gmail.com",
      pass: "lstidijkqjjmcauw",
    },
  });
  var mailoptions = {
    from: req.body.email,
    to: "siddhantkankaria122@gmail.com",
    subject: "Hello this is " + name,
    text: req.body.message,
  };
  transporter.sendMail(mailoptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      res.send("mail submitted");
      console.log("email sent" + info.response);
    }
  });
});

app.listen(8000, function (req, res) {
  console.log("server run at 8000");
});
