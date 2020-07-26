const express = require('express');
const mongoose = require('mongoose');

const db = "mongodb://172.17.0.4:27017/dbname";

mongoose
 .connect(db,{
     useNewUrlParser: true,
     useCreateIndex: true,
     useUnifiedTopology: true
 })
 .then(() => {
     console.log("DB Connected");
 })
 .catch(() => {
    console.log("Error in db connection");
})
 

const app = express();

app.get("/", (req, res) => {
    res.send('Node js running on node container');
})

app.listen(8000, () => {
    console.log("App running at 8000");
})

