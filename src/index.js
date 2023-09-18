const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const publicacionRoutes= require("./routes/publicacion");

const app = express();
const port = process.env.PORT || 9000;

//Middleware
app.use(express.json());
app.use('/api', publicacionRoutes);

//Routes
app.get('/',(req,res)=>{
    res.send("welcome to my api")
});

//Mongodb connection
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("Connected to mongodb atlas"))
.catch((error)=>console.error(error));

app.listen(port, ()=> console.log("server listening on port ",port));