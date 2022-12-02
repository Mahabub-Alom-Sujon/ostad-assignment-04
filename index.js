const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
// parse application/json
app.use(bodyParser.json());

app.post('/', function (req, res) {
    res.send('Hello World')
});
app.post('/query', function (req, res) {
    let fistName = req.query.fistName;
    let lastName = req.query.lastName;
    res.send(`${fistName} ${lastName}`);
});
app.post('/header', function (req, res) {
    let usertName = req.header("userName");
    let passWord =req.header("passWord");
    res.send(`userName:${usertName} passWord:${passWord}`);
});
app.post('/body', function (req, res) {
    let jsonData = req.body;
    let jsonSting = JSON.stringify(jsonData);
    res.send(jsonSting);
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
});

