const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ItemModel = require('./models/Ingredients');

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://phostings:parasite1@cluster0.7uvug1v.mongodb.net/newdatabase?retryWrites=true&w=majority"
);

app.get("/getItem", (req, res) => {
    ItemModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});



app.post("/createItem", async (req, res) => {
    const item = req.body;
    const newItem = new ItemModel(item);
    await newItem.save();

    res.json(item);
});

app.put("/")

app.listen(3001, () => {
    console.log("server is running");
});