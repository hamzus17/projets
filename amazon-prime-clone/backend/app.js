// Placeholder for app.js
const express = require('express');
const mongoose = require('mongoose');
const videos = require('./routes/videos');

const app = express();
app.use(express.json());
app.use('/videos', videos);

mongoose.connect('mongodb://mongo:27017/prime', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(5000, () => console.log('Backend running on port 5000'));
