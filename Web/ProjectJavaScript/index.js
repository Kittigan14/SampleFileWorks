// const sqlite3 = require('sqlite3').verbose();

// const db = new sqlite3.Database('movieSystem.sqlite');

// // เพิ่มข้อมูลลงในตาราง Genres
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

// // เพิ่มข้อมูลลงในตาราง Movies
// const moviesData = [
//   [1, 'Avengers: Endgame', '2019-04-26', 1],
//   [2, 'The Lord of the Rings', '2001-12-19', 2],
//   [3, 'The Hangover', '2009-06-05', 3],
//   [4, 'Braveheart', '1995-05-24', 7],
//   [5, 'The Da Vinci Code', '2006-05-19', 9],
//   [6, 'Titanic', '1997-12-19', 10],
//   [7, 'The Matrix', '1999-03-31', 11],
//   [8, 'The Silence of the Lambs', '1991-02-14', 12],
//   [9, 'The Good, the Bad and the Ugly', '1966-12-29', 13]
// ];

// const moviesInsert = db.prepare('INSERT INTO Movies VALUES (?, ?, ?, ?)');
// moviesData.forEach(data => moviesInsert.run(data));
// moviesInsert.finalize();

// // ปิดการเชื่อมต่อ
// db.close();

// DELETE DATA TABLE MOVIES
// const sqlite3 = require('sqlite3').verbose();

// const db = new sqlite3.Database('movieSystem.sqlite');

// // ลบข้อมูลทั้งหมดในตาราง Movies
// db.run('DELETE FROM Movies');

// // ปิดการเชื่อมต่อ
// db.close();

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('movieSystem.sqlite');

// ข้อมูล Movies สำหรับ 20 รายการ
const moviesData = [
  [1, 'Inception', '2010-07-16', 11],
  [2, 'The Dark Knight', '2008-07-18', 1],
  [3, 'Interstellar', '2014-11-07', 11],
  [4, 'Forrest Gump', '1994-07-06', 3],
  [5, 'The Shawshank Redemption', '1994-09-10', 12],
  [6, 'The Godfather', '1972-03-24', 7],
  [7, 'Pulp Fiction', '1994-10-14', 12],
  [8, 'The Lord of the Rings: The Fellowship of the Ring', '2001-12-19', 2],
  [9, 'The Lion King', '1994-06-15', 1],
  [10, 'Schindler\'s List', '1993-12-15', 7],
  [11, 'Fight Club', '1999-10-15', 12],
  [12, 'The Matrix Reloaded', '2003-05-15', 11],
  [13, 'The Matrix Revolutions', '2003-11-05', 11],
  [14, 'Jurassic Park', '1993-06-11', 2],
  [15, 'The Terminator', '1984-10-26', 1],
  [16, 'Casablanca', '1942-11-26', 10],
  [17, 'Gone with the Wind', '1939-12-15', 10],
  [18, 'Citizen Kane', '1941-05-01', 10],
  [19, 'E.T. the Extra-Terrestrial', '1982-06-11', 11],
  [20, 'Avatar', '2009-12-18', 2],
];

// สร้างตาราง Movies ถ้ายังไม่มี
db.run('CREATE TABLE IF NOT EXISTS Movies (MoviesID INTEGER PRIMARY KEY, Title TEXT, ReleaseDate TEXT, GenresID INTEGER, FOREIGN KEY(GenresID) REFERENCES Genres(GenresID))');

// เพิ่มข้อมูลลงในตาราง Movies
const moviesInsert = db.prepare('INSERT INTO Movies VALUES (?, ?, ?, ?)');
moviesData.forEach(data => moviesInsert.run(data));
moviesInsert.finalize();

// ปิดการเชื่อมต่อ
db.close();