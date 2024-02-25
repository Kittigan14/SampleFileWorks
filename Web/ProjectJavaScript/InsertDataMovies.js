// >> INSERT TABLE GENRES <<
// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('movieSystem.sqlite');

// const genresData = [
//   [1, 'Action'],
//   [2, 'Adventure'],
//   [3, 'Comedy'],
//   [7, 'History'],
//   [9, 'Mystery'],
//   [10, 'Romance'],
//   [11, 'Sci-fi'],
//   [12, 'Thriller'],
//   [13, 'Western']
// ];

// const genresInsert = db.prepare('INSERT INTO Genres VALUES (?, ?)');
// genresData.forEach(data => genresInsert.run(data));
// genresInsert.finalize();

// db.close();


// >> DELETE DATA TABLE MOVIES <<
// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('movieSystem.sqlite');

// db.run('DELETE FROM Movies');
// db.run('DELETE FROM Genres');

// db.close();


// >> INSERT TABLE MOVIES <<
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('movieSystem.sqlite');

const moviesData = [
  [1, 'Inception', '2010-07-16', 11, '../images/MoviesImg/Inception.jpg'],
  [2, 'The Dark Knight', '2008-07-18', 1, '../images/MoviesImg/The Dark Knight.jpg'],
  [3, 'Interstellar', '2014-11-07', 11, '../images/MoviesImg/Interstellar.jpg'],
  [4, 'Forrest Gump', '1994-07-06', 3, '../images/MoviesImg/Forrest Gump.jpg'],
  [5, 'The Shawshank Redemption', '1994-09-10', 12, '../images/MoviesImg/The Shawshank.jpg'],
  [6, 'The Godfather', '1972-03-24', 7, '../images/MoviesImg/The Godfather.jpg'],
  [7, 'Pulp Fiction', '1994-10-14', 12, '../images/MoviesImg/Pulp Fiction.jpg'],
  [8, 'The Lord of the Rings: The Fellowship of the Ring', '2001-12-19', 2, '../images/MoviesImg/The Lord of the Rings.png'],
  [9, 'The Lion King', '1994-06-15', 1, '../images/MoviesImg/The Lion King.jpg'],
  [10, 'Schindler\'s List', '1993-12-15', 7, '../images/MoviesImg/Schindler s List.jpg'],
  [11, 'Fight Club', '1999-10-15', 12, '../images/MoviesImg/Fight Club.jpg'],
  [12, 'The Matrix Reloaded', '2003-05-15', 11, '../images/MoviesImg/The Matrix Reloaded.jpg'],
  [13, 'The Matrix Revolutions', '2003-11-05', 11, '../images/MoviesImg/The Matrix Revolutions.jpg'],
  [14, 'Jurassic Park', '1993-06-11', 2, '../images/MoviesImg/Jurassic Park.jpg'],
  [15, 'The Terminator', '1984-10-26', 1, '../images/MoviesImg/The Terminator.jpg'],
  [16, 'Casablanca', '1942-11-26', 10, '../images/MoviesImg/Casablanca.jpg'],
  [17, 'Gone with the Wind', '1939-12-15', 10, '../images/MoviesImg/Gone with the Wind.jpg'],
  [18, 'Citizen Kane', '1941-05-01', 10, '../images/MoviesImg/Citizen Kane.jpg'],
  [19, 'E.T. the Extra-Terrestrial', '1982-06-11', 11, '../images/MoviesImg/E.T. the Extra-Terrestrial.jpg'],
  [20, 'Avatar', '2009-12-18', 2, '../images/MoviesImg/Avatar.jpg'],
];

db.run('CREATE TABLE IF NOT EXISTS Movies (MoviesID INTEGER PRIMARY KEY, Title TEXT, ReleaseDate TEXT, Image IMAGE NOT NULL, FOREIGN KEY(GenresID) REFERENCES Genres(GenresID))');

const moviesInsert = db.prepare('INSERT INTO Movies VALUES (?, ?, ?, ?, ?)');
moviesData.forEach(data => moviesInsert.run(data));
moviesInsert.finalize();

db.close();