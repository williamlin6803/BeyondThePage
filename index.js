const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/users');
const pinRoute = require('./routes/pins');
const app = express();

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("MongoDB connection successful!")
    })
    .catch ((err) => console.log(err));

app.use('/api/users', userRoute);
app.use('/api/pins', pinRoute);

app.listen(8000, () => {
    console.log("Server is running at 8000!");
})
