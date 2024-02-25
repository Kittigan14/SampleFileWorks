const express = require('express');
const app = express();
const path = require('path');
const sqlite = require('sqlite3');
var bodyParser = require('body-parser');
const session = require('express-session');
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public', 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Corrected express.static middleware
app.use(express.static(path.join(__dirname, 'public')));

// Save Values Username
app.use(session({
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: true
}));

// Connection Database
const db = new sqlite.Database("movieSystem.sqlite");

// Create Table sqlite
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

// HomePage & Show Values Username
app.get('/', async (req, res) => {
    console.log('loggedInUsername from session:', req.session.loggedInUsername);
    res.render('index.ejs', {
        loggedInUsername: req.session.loggedInUsername || ''
    });
});

// Login Users & Show Values Username
app.get('/login', async (req, res) => {
    res.render('Login.ejs', {
        loggedInUsername: req.session.loggedInUsername || ''
    });
});

// Search User & Password , Login
app.post('/loginPost', async (req, res) => {
    const data = req.body;
    const sqlSearch = "SELECT * FROM Users WHERE username = ? AND password = ?";

    db.get(sqlSearch, [data.username, data.password], (err, row) => {
        if (err) return console.error(err.message);

        if (row) {
            // Successful login
            console.log(`Login successfully for user: ${data.username}`);
            // Set the username in the session
            req.session.loggedInUsername = data.username;
            // Redirect to the Home page
            res.redirect('/');
        } else {
            // Failed login
            res.send("<script>alert('Login failed username or email.'); window.location='/login';</script>");
        }
    });
});

// Create Users
app.get('/register', async (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views/Register.html'));
});

// Insert User to Database Table Users
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
            return res.send("<script>alert('username or email is already connected.'); window.location='/register';</script>");
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

            // Redirect to the login page with the username in the URL
            res.redirect('/login?username=' + data.username);
        });
    });
});

// movies route
app.get('/movies', (req, res) => {
    console.log('loggedInUsername from session:', req.session.loggedInUsername);

    // ดึงข้อมูลจากตาราง Genres
    db.all('SELECT GenresID, Title FROM Genres', (err, genres) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
            return;
        }

        console.log('Genres data:', genres); // เพิ่มบรรทัดนี้เพื่อตรวจสอบข้อมูลที่ถูกดึงมา

        // ดึงข้อมูลจากตาราง Movies
        db.all('SELECT * FROM Movies', (err, movies) => {
            if (err) {
                console.error(err.message);
                res.status(500).send('Internal Server Error');
                return;
            }

            console.log('Movies data:', movies); // เพิ่มบรรทัดนี้เพื่อตรวจสอบข้อมูลที่ถูกดึงมา

            // ส่งข้อมูลไปยัง EJS template
            res.render('Movie.ejs', {
                loggedInUsername: req.session.loggedInUsername || '',
                genres: genres, // ส่งข้อมูล genres ไปยัง EJS template
                movies: movies // ส่งข้อมูล movies ไปยัง EJS template
            });
        });
    });
});

app.get('/getMoviesByGenre/:genreId', (req, res) => {
    const genreId = req.params.genreId;

    db.all('SELECT * FROM Movies WHERE GenresID = ?', [genreId], (err, movies) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
            return;
        }

        // ส่งข้อมูล Movies กลับเป็น JSON
        res.json(movies);
    });
});


// Updated logout route to clear the session
app.post('/logout', (req, res) => {
    // Clear the session
    req.session.destroy();
    res.redirect('/login');
});

// Run Servers PORT 3000
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
});