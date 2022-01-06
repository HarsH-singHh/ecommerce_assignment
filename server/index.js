const express = require("express");
const mongoose = require("mongoose");
const app  = express();

const ItemModel = require("./models/Ecomm");

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/ecomm");

app.get("/", async(req, res) =>{
    const item = new ItemModel({
        imageURL: "abcd@gamil.com",
        title: "harsh harsh harsh",
        desc: "harsh harshharsh harsh harsh harsh harsh harsh"
    });

    try{
        await item.save();
        
        res.send("inserted data");

    } catch(error){
        console.log(error);
    }

});

app.listen(3001, () => {
    console.log("Server running on port 3001...");
});