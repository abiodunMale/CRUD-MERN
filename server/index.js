const express = require('express');
const bodyParser = require('body-parser');
const mongoose  = require('mongoose');
const cors = require('cors');

const postRoutes  = require('./routes/post.js');

const app = express();



app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://abiodunsamuel:abiodunsamuel123@cluster0.tithp.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000 ;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Sever running on port: ${PORT}`)))
    .catch((error) => console.log(error.message) );

mongoose.set('useFindAndModify', false);