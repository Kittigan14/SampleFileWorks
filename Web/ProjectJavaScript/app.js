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
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/views/index.html'));
});

// Login Users
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './public/views/Login.html'));
});

app.post('/loginPost', (req, res) => {
    const data = req.body;
    const sqlSearch = "SELECT * FROM Users WHERE username = ? AND password = ?";

    db.get(sqlSearch, [data.username, data.password], (err, row) => {
        if (err) {
            return console.error(err.message);
        }

        if (row) {
            // Successful login
            console.log(`Login successfully for user: ${data.username}`);
            res.sendFile(path.join(__dirname, './public/views/index.html'));
        } else {
            // Failed login
            res.send("<script>alert('Login failed username or email.'); window.location='/login';</script>");
            return;
        }
    });
});

// Create Users
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views/Register.html'));
});

app.post("/registerPost", (req, res) => {
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

            const successPath = path.join(__dirname, "/public/views/index.html");
            return res.sendFile(successPath);
        });
    });
});

app.delete("/registerPost/:id", (req, res) => {
    const id = req.params.id;
    const sqlDelete = "DELETE FROM Users WHERE usersid = ?";

    db.run(sqlDelete, [id], (err) => {
        if (err) {
            return console.error(err.message);
        }

        console.log(`Row with ID ${id} has been deleted`);

        db.run("UPDATE Users SET usersid = usersid - 1 WHERE usersid > ?", [id], (updateErr) => {
            if (updateErr) {
                return console.error(updateErr.message);
            }

            console.log("Row IDs have been reorganized");

            db.run("UPDATE SQLITE_SEQUENCE SET seq = (SELECT MAX(usersid) FROM Users)", (sequenceUpdateErr) => {
                if (sequenceUpdateErr) {
                    return console.error(sequenceUpdateErr.message);
                }

                console.log("Sequence has been updated");
                res.status(200).json({
                    message: "Data deleted successfully"
                });
            });
        });
    });
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
});