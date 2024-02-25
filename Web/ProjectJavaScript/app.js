const express = require('express');
const app = express();
const path = require('path');
const sqlite = require('sqlite3');
var bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public', 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Corrected express.static middleware
app.use(express.static(path.join(__dirname, 'public')));

const db = new sqlite.Database("movieSystem.sqlite");

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
app.get('/', async (req, res) => {
    // Assuming data.username is obtained from somewhere
    const data = { username: "" };
    res.render('index.ejs', { loggedInUsername: data.username });
});

// Login Users
app.get('/login', async (req, res) => {
    const data = { username: "" };
    res.render('Login.ejs', { loggedInUsername: data.username });
});

app.post('/loginPost', async (req, res) => {
    const data = req.body;
    const sqlSearch = "SELECT * FROM Users WHERE username = ? AND password = ?";

    db.get(sqlSearch, [data.username, data.password], (err, row) => {
        if (err) {
            return console.error(err.message);
        }

        if (row) {
            // Successful login
            console.log(`Login successfully for user: ${data.username}`);
            // Pass the logged-in username to the index.ejs template
            res.render('index.ejs', { loggedInUsername: data.username });
        } else {
            // Failed login
            res.send("<script>alert('Login failed username or email.'); window.location='/login';</script>");
            return;
        }
    });
});

app.post('/logout', (req, res) => {
    res.redirect('/login');
});

// Create Users
app.get('/register', async (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views/Register.html'));
});

app.post("/registerPost", async (req, res) => {
    const data = req.body;
    const sqlCheck = "SELECT * FROM Users WHERE username = ? OR email = ?";
    const sqlInsert = "INSERT INTO Users (username, email, password) VALUES (?, ?, ?)";

    // Check if username or email already exists
    db.get(sqlCheck, [data.username, data.email], (err, row) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send("Internal Server Error");
        }

        if (row) {
            return res.send("<script>alert('Entry with the same username or email already exists.'); window.location='/register';</script>");
        }

        // Insert user into the database
        db.run(sqlInsert, [data.username, data.email, data.password], function (err) {
            if (err) {
                console.error(err.message);
                return res.status(500).send("Internal Server Error");
            }

            // Retrieve the last inserted rowid
            const lastInsertId = this.lastID;

            console.log(`A row has been inserted with rowid ${lastInsertId}`);
            console.log(`The corresponding userid is ${lastInsertId}`);

            const successPath = path.join(__dirname, "/public/views/Login.ejs");
            return res.sendFile(successPath);
        });
    });
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
});