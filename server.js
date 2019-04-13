const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.get('/pokemon', (req, res) => {
    res.send("I'm wearing panties");
});

app.listen(port, function() {
    console.log("App is running on port: ", port);
  });




module.exports = app;