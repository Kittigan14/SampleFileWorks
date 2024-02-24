const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connection Database to File movieReviewsSystem.db
const db = new sqlite3.Database('movieReviewsSystem.db');

// Create Table Database
  db.run(`
    CREATE TABLE IF NOT EXISTS Users (
      UsersID INTEGER PRIMARY KEY AUTOINCREMENT,
      UserName TEXT,
      Email TEXT,
      Password TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS Movies (
      MoviesID INTEGER PRIMARY KEY AUTOINCREMENT,
      Title TEXT,
      ReleaseDate DATE,
      Genres TEXT,
      Rating REAL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS Reviews (
      ReviewsID INTEGER PRIMARY KEY AUTOINCREMENT,
      UsersID INTEGER,
      MovieID INTEGER,
      Content TEXT,
      TimeStamp DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(UsersID) REFERENCES Users(UsersID),
      FOREIGN KEY(MovieID) REFERENCES Movies(MoviesID)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS Genres (
      GenresID INTEGER PRIMARY KEY AUTOINCREMENT,
      Name TEXT
    )
  `);

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/views/index.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './public/views/Register.html'));
});

// Insert Users in Database, Table Uesrs
app.post('/register', (req, res) => {
    const data = req.body;
    const sqlInsert = "INSERT INTO Users (Username, Email, Password) VALUES (?, ?, ?)";
    db.run(sqlInsert, (data.Username, data.Email, data.Password), function (err) {
            if (err) {
                return console.error(err.message);
            }

            console.log(`A row has been inserted with rowid ${this.lastID}`);
            res.sendFile(path.join(__dirname, "/public/views/index.html"));
            // const thanksFilePath = path.join(__dirname, "/public/views/index.html");
        });
});

// Create Severs
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});