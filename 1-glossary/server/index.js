require("dotenv").config();
const express = require('express');
var db = require('./db');
const path = require('path');
const app = express();

app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../client/dist/')));

app.get('/words', (req, res) => {
  db.find({ $or: [{word: {"$regex": req.query.search, "$options": "i"}}, {definition: {"$regex": req.query.search, "$options": "i"}}]}).exec((err, result) => {
    if (err) {
      // 404 or something
      res.status(404).send("Oops");
    } else {
      res.send(result);
    }
  })
});

app.post('/words', (req, res) => {
  db.create({ word: req.body.word, definition: req.body.definition }, (err, result) => {
    if (err) {
      if (err.code === 11000) {
        res.send("Word exists");
      } else {
        res.status(404).send("Oops");
      }
    } else {
      res.send(result);
    }
  })
});

app.put('/words', (req, res) => {
  console.log(req.body);
  db.findOneAndUpdate({ word: req.body.word }, { word: req.body.word, definition: req.body.definition }, (err, result) => {
    if (err) {
      console.log(err)
      res.status(404);
    } else {
      console.log('result', result);
      res.send(result);
    }
  })
});

app.delete('/words', (req, res) => {
  db.deleteOne({ word: req.body.word }, (err, result) => {
    if (err) {
      res.status(404);
    } else {
      // TODO UPDATE SCREEN UPON DELETE
      res.send('Word deleted');
    }
  })
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
});
