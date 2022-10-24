require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//middleware para servir contenido estático
app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.render('home', {
//     nombre: 'JOHN WILLIAM REYES',
//     titulo: 'Curso de node',
//   });
// });
// app.get('/generic', (req, res) => {
//   res.render('generic', {
//     nombre: 'JOHN WILLIAM REYES',
//     titulo: 'Curso de node',
//   });
// });
// app.get('/elements', (req, res) => {
//   res.render('elements', {
//     nombre: 'JOHN WILLIAM REYES',
//     titulo: 'Curso de node',
//   });
// });
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
app.listen(port, () => {
  console.log(`Aplicación corriendo en http://localhost:${port}`);
});
