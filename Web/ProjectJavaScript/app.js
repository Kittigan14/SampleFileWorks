const express = require('express');
var bodyParser = require('body-parser');
const session = require('express-session');
const sqlite = require('sqlite3');
const path = require('path');
const app = express();
const port = process.env.PORT || 5500;

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

    db.all('SELECT GenresID, Title FROM Genres', (err, genres) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
            return;
        }

        // console.log('Genres data:', genres);

        db.all('SELECT * FROM Movies', (err, movies) => {
            if (err) {
                console.error(err.message);
                res.status(500).send('Internal Server Error');
                return;
            }

            // console.log('Movies data:', movies);

            res.render('Movie.ejs', {
                loggedInUsername: req.session.loggedInUsername || '',
                genres: genres,
                movies: movies
            });
        });
    });
});

app.get('/getMoviesByGenre/:genresid', (req, res) => {
    const genreId = req.params.genresid;

    db.all('SELECT * FROM Movies WHERE genresid = ?', [genreId], (err, movies) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
            return;
        }
        // Return Data to Json
        // console.log('Movies from database:', movies);
        res.json(movies);
    });
});

app.get('/detailMovie/:movieId', (req, res) => {
    const movieId = req.params.movieId;

    if (isNaN(movieId)) {
        res.status(400).send('Invalid movie ID');
        return;
    }

    db.get('SELECT * FROM Movies WHERE movieid = ?', [movieId], (err, movie) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
            return;
        }

        if (!movie) {
            res.status(404).send('Movie not found');
            return;
        }

        res.render('detailMovie.ejs', {
            movie
        });
    });
});

// Updated logout route to clear the session
app.post('/logout', (req, res) => {
    // Clear the session
    req.session.destroy();
    res.redirect('/login');
});

// Forget password & UPDATE PASSWORD
app.get('/forgetPassword', (req, res) => {
    res.render('forgetPassword.ejs');
});

// Update Password
app.post('/editPassword', (req, res) => {
    const {
        email,
        newPassword,
        confirmPassword
    } = req.body;

    // Check if email already exists
    db.get('SELECT * FROM Users WHERE email = ?', [email], (err, user) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
            return;
        }

        if (!user) {
            res.status(404).send('User not found');
            return;
        }

        if (newPassword !== confirmPassword) {
            res.status(400).send('Passwords do not match');
            return;
        }

        // Update Password for Table Users Where email
        db.run('UPDATE Users SET password = ? WHERE email = ?', [newPassword, email], (err) => {
            if (err) {
                console.error(err.message);
                res.status(500).send('Internal Server Error');
                return;
            }
            res.send("<script>alert('Password updated successfully.'); window.location='/login';</script>");
        });
    });
});

// Run Servers PORT 3000
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
});