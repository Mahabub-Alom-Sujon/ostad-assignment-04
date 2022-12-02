const express = require('express');
const port = 3000;
const app = express();
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        var dir = './uploads';
        callback(null, dir);
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});
var upload = multer({storage: storage}).array('files', 3);
app.post('/upload', function (req, res, next) {
    upload(req, res, function (err) {
        if (err) {
            return res.end("Something went wrong");
        }
        res.end("Upload completed.");
    });
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});