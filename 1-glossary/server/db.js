require("dotenv").config();
const mongoose = require("mongoose");
const { Schema } = mongoose;

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/' + process.env.DB_NAME);

// 2. Set up any schema and models needed by the app
const glossarySchema = new Schema({
  word: {
    type: String,
    unique: true
  },
  definition: String
});

const Glossary = mongoose.model('Glossary', glossarySchema);

// 3. Export the models
module.exports = Glossary;

// 4. Import the models into any modules that need them