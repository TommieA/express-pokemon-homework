const express           = require('express');
const bodyParser        = require('body-parser');
const methodOverride    = require('method-override');
const app               = express();

const port              = 3000;

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method', {methods: ['POST']}));
app.use(express.static('public'));

// db
const pokemon = require('./pokemon');

app.get('/', (req, res) => {
  res.send("Got pokemon");
});

// index route
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {'pokemon': pokemon});
});

// New route
app.get('/pokemon/new', (req, res) => {
  res.render('new.ejs', {});
});

app.post('/pokemon', (req, res) => {
	pokemon.push(req.body);
	res.redirect('/pokemon');
});

// Listener
app.listen(port, () => {
    console.log("App is running on port: ", port);
});
 
// Show route
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {'pokemon': pokemon[req.params.id], id:req.params.id});
});

// Edit route
app.get('/pokemon/:id/edit', (req, res) => {
    res.render('edit.ejs', {'pokemon': pokemon[req.params.id], id:req.params.id});
});

// Delete route
app.delete('/pokemon/:id', (req, res) => {
    pokemon.splice(req.params.id, 1);
	  res.redirect('/pokemon');
});

app.put('/pokemon/:id', (req, res) => {
	  pokemon[req.params.id] = req.body;
  	res.redirect('/pokemon');
});

module.exports = app;
