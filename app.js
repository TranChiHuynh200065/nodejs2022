// Importing express module
const express = require('express');
const app = express();

// Getting Request
// app.get('/', (req, res) => {

//     // Sending the response
//     res.send('Hello World!')

//     // Ending the response
//     res.end()
// });

add.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});

add.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
});

add.get('/sitemap', function(req, res) {
    res.sendFile(path.join(__dirname + '/sitemap.html'));
});

// Establishing the port
const PORT = process.env.PORT || 5000;

// Executing the server on given port number
app.listen(PORT, console.log(
    `Server started on port ${PORT}`));