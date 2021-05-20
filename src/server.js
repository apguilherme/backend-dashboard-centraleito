const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const routes = require('./routes/index');

const app = express();

// database
const url = "mongodb+srv://centraleito:centraleito@firstcluster.fl9cj.mongodb.net/centraleito?retryWrites=true&w=majority";
const connectionParams = {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
mongoose.connect(url, connectionParams)
    .then(() => { console.log('Connected to database ') })
    .catch((err) => { console.error(`Error connecting to the database. \n${err}`) })

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);
