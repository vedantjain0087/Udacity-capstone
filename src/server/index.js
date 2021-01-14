var path = require('path')
const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser')

/* Middleware*/
const app = express()
dotenv.config();
app.use(cors());
app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/getData', function (req, res) {
    textapi.sentiment({
        'url': req.body.url
        }, function(error, response) {
        if (error === null) {
            res.send(response)
        }
        else {
            res.send(error)
        }
    });
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('app listening on port 8080!')
})
