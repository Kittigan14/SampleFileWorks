const express = require('express');
const app = express();
const path = require('path');
const sqlite = require('sqlite3');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'));

const db = new sqlite.Database("DataSystem.Sqlite3");

// Create paramitor sqlite
db.run(`CREATE TABLE IF NOT EXISTS Genres (
    genresid INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT
  )`);

db.run(`CREATE TABLE IF NOT EXISTS Users (
    usersid INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    email TEXT UNIQUE,
    password TEXT
  )`);

db.run(`CREATE TABLE IF NOT EXISTS Movies (
    movieid INTEGER PRIMARY KEY AUTOINCREMENT,
    Title TEXT,			
    Release DATE,			
    genresid INTEGER,
    FOREIGN KEY (genresid) REFERENCES Genres(genresid)
  )`);

db.run(`CREATE TABLE IF NOT EXISTS Reviews (
    reviewsid INTEGER PRIMARY KEY AUTOINCREMENT,
    comment TEXT,			
    time TIMESTAMP,
    usersid INTEGER,
    movieid INTEGER,
    FOREIGN KEY (usersid) REFERENCES Users(usersid),
    FOREIGN KEY (movieid) REFERENCES Movies(movieid)
  )`);

// HomePage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/views/index.html'));
});

// Create Users
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views/Register.html'));
});

app.post("/registerPost", (req, res) => {
    const data = req.body;
    const sqlCheck = "SELECT * FROM Users WHERE username = ? OR email = ?";
    const sqlInsert = "INSERT INTO Users (username, email, password) VALUES (?, ?, ?)";

    db.get(sqlCheck, [data.username, data.email], (err, row) => {
        if (err) {
            return console.error(err.message);
        }

        if (row) {
            // console.log("Entry with the same username or email already exists.");
            res.send("<script>alert('Entry with the same username or email already exists.'); window.location='/register';</script>");
            return;
            // return res.sendFile(path.join(__dirname, "/public/views/Register.html"));
        }

        console.log("SQL Insert Statement:", sqlInsert);
        console.log("Data to be Inserted:", [data.username, data.email, data.password]);

        // Corrected the insertion statement
        db.run(sqlInsert, [data.username, data.email, data.password], function (err) {
            if (err) {
                return console.error(err.message);
            }

            console.log(`A row has been inserted with rowid ${this.lastID}`);
            const Success = path.join(__dirname, "/public/views/index.html");
            res.sendFile(Success);
        });
    });
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
});