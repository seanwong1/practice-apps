const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS responses ( \
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, \
        LastName varchar(32), \
        FirstName varchar(32), \
        Email varchar(32), \
        Password varchar(32), \
        Addr1 varchar(32), \
        Addr2 varchar(32), \
        City varchar(32), \
        State varchar(2), \
        ZipCode varchar(16), \
        CardNumber varchar(16), \
        CardExpiration varchar(4), \
        CardCVV varchar(4), \
        CardBillingZipCode varchar(16), \
        SessionID varchar(64) \
        )"
    )
  )
  .catch((err) => console.log(err));

module.exports = db;
