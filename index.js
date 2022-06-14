const express = require('express');
const app = express();
const PORT = process.env.PORT || 1100;
const mongoose = require("mongoose");
const studentDetails = require('./model/Studentdata')

//DB Connection
mongoose.connect("mongodb://0.0.0.0:27017/Detailstudents",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(`no connection`)
})

app.use(express.urlencoded({extended:true}));
app.use("/static",express.static(__dirname + "/static"));
app.use(express.json());

app.set("view engine","ejs");
app.set("views",__dirname + "/views");

app.get("/home", (req, res) => {
    res.render("home");
  });

  app.get("/submitted", (req, res) => {
    res.render("submitted");
  });

  
  app.get("/registration", (req, res) => {
    res.render("registration");
  });

  app.get("/", (req, res) => {
    res.render("main");
  });



app.post("/submitted", (req, res) => {
    const {
        first_name,
        last_name,
        collegename,
        roll_no,
        subject,
        phone,
        email,
        message,
    } = req.body;

    console.log(req.body);

    studentDetails({
        first_name : first_name,
        last_name : last_name,
        collegename : collegename,
        roll_no : roll_no,
        subject : subject,
        phone : phone,
        email : email,
        message : message,
    }).save((err,data)=>{
        res.redirect("/submitted");
    });

});


app.listen(PORT,()=>{
    console.log(`The port is running at ${PORT}`);
})