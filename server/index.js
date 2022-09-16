const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ItemModel = require('./models/Ingredients');
const cors = require("cors");
const UserModel = require('./models/Users');
const passport = require('passport');
const passportlocal = require('passport-local').Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");


// Middleware
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3001",
    credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
}));

app.use(cookieParser("secretcode"))
// Routes
app.post("/login", (req, res) => {
    console.log(req.body);
});
app.post("/register", (req, res) => {
    console.log(req.body);
})



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

app.get("/getUser", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        
        }else {
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

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user)
    await newUser.save();

    res.json(user)
})

app.put("/")

app.listen(3001, () => {
    console.log("server is running");
});