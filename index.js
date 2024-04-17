// var express= require('express');
// const mongoose = require('mongoose')
// const morgan = require('morgan')
// const bodyParser = require('body-parser')

// const AnimalRoute = require('./routes/animal')
// const AuthRoute = require('./routes/auth')


// mongoose.connect('mongodb://localhost:27017/apiRN')
// const db = mongoose.connection

// db.on('error',(err) => {
//     console.log(err)
// })

// db.once('open', () => {
//     console.log('Database Connexion established!')
// })

// const app= express()

// app.use(morgan('dev'))
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())
// app.use('/uploads', express.static('uploads'))

// const PORT = process.env.PORT || 3001

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`)
// })

// app.use('/api/animal', AnimalRoute)
// app.use('/api', AuthRoute)

// require("dotenv").config(); // Keep this for possible future use of environment variables
// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";

var express= require('express');
const mongoose = require('mongoose')
const cors = require('cors')


const authRoutes =require ('./routes/auth')

const morgan = require("morgan");

const app = express();

// Static connection URI (replace with your actual MongoDB connection details if needed)
mongoose.connect('mongodb://localhost:27017/apiRN')
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR:", err));

const db = mongoose.connection; // Create a constant to reference the connection

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// Route middlewares
app.use("/api", authRoutes);

app.listen(8800, () => console.log("Server running on port 8800"));
