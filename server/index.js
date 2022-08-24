const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://phostings:parasite1@cluster0.7uvug1v.mongodb.net/newdatabase?retryWrites=true&w=majority"
);

app.listen(3001, () => {
    console.log("server is running");
});