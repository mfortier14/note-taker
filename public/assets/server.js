// installed express and designated the port I want my server to listen on
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;


// tested that the server was listening on the appropriate PORT (8080) by returning this message 
app.listen(PORT);
console.log("The server is listening on port" + PORT);

