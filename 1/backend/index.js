const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
app.use(bodyParser.json());
app.use(cors())

mongoose.connect('mongodb://localhost:27017/top-products', { useNewUrlParser: true, useUnifiedTopology: true });





const productRouter = require('./routes/productRouter');
app.use('/', productRouter);


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});