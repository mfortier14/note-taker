// installed express and designated the port I want my server to listen on
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;


// tested that the server was listening on the appropriate PORT (8080) by returning this message 
app.listen(PORT);
console.log("The server is listening on port" + PORT);

// app.get('/', function(req, res) {
//     return ("public/assets/notes.html");
// })

// app.post('/', function (req, res) {

// })