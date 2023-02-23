require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

app.use(express.json());

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.post('/checkout', (req, res) => {
  req.body['SessionID'] = req.session_id;
  db.execute(
    'INSERT INTO responses (FirstName, LastName, Email, Password, Addr1, Addr2, City, State, ZipCode, CardNumber, CardExpiration, CardCVV, CardBillingZipCode, SessionID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [req.body.firstName, req.body.lastName, req.body.email, req.body.password, req.body.addrLineOne, req.body.addrLineTwo, req.body.addrCity, req.body.addrState, req.body.addrZipCode, req.body.cardNum, req.body.cardExpDate, req.body.cardCVV, req.body.billingZipCode, req.session_id],
    (err, result) => {
      if (err) {
        res.status(404);
      } else {
        res.send('Info received');
      }
    }
  );
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
