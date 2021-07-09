const mongoose = require("mongoose");

const DB_HOST = process.env.DB_HOST,
  DB_PORT = process.env.DB_PORT,
  DB_NAME = process.env.DB_NAME;

const URI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(URI, options, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Connected to MongoDB : ${DB_NAME}`);
  }
});

const connection = mongoose.connection;

module.exports = connection;