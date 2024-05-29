const express = require('express');
const app = express();
const path = require("path");
const port = 8080;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"./views"));
app.get("/",(req,res)=>{
    res.render("home.ejs");
})
app.get("/dice",(req,res)=>{
    let number = Math.floor(Math.random()*6) + 1;
    res.render("rolldice.ejs",{num:number});
});

app.get("/ig/:username",(req,res)=>{
    let { username } = req.params;
    const instdata = require("./data.json");
    const data = instdata[username];
    // console.log(instdata[username]);
    res.render("instagram.ejs",{ data });
});
app.listen(port,()=>{
    console.log("server started");
})