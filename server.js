const express    = require('express');
const bodyParser = require('body-parser');
const app        = express();

const port       = 3000;

// app.get('/pokemon', (req, res) => {
//     res.send("Got pokemon");
// });

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))

// db

const pokemon = require('./pokemon');

// index route
app.get('/pokemon', (req, res) => {
    res.render('index.ejs', {
        'pokemon': pokemon
      })
  });
 
// show route
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {'pokemon': pokemon[req.params.id]
    });
  });
 
// Listener

app.listen(port, function() {
  console.log("App is running on port: ", port);
});

//module.exports = app;
