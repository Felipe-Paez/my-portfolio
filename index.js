const express = require('express');
const app = express();

app.use(express.static('public'))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});


app.listen(3008, function () {
    console.log("Server is running on localhost3000");
});


console.log("andando");