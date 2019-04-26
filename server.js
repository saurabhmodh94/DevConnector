const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

// DB Config
const keys = require('./config/keys');

// Connect to MongoDB
mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true // to get rid of warning
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
