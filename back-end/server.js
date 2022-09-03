require('dotenv').config();
const express = require('express')
const mongoose = require("mongoose");
const testRoutes = require('./routes/tests');
const userRoutes = require('./routes/user');
const trainerRoutes = require('./routes/trainers');
const testTakenRoutes = require('./routes/testTaken');

//express app
const app = express();

// middleware
app.use((req, res, next) => {
  //console.log(req.path, req.method)
  next()
})

app.use(express.json());

//Routes
app.use('/api/tests', testRoutes)
app.use('/api/users', userRoutes)
app.use('/api/trainers', trainerRoutes)
app.use('/api/testTaken', testTakenRoutes)

// connect to db 
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen to request 
    app.listen(process.env.PORT, () => {
      console.log('connected to db  listening for requests on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error);
  })



