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
const imageFilter = function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

var upload = multer({storage: storage, fileFilter: imageFilter}).array('files', 3);
app.post('/upload', function (req, res, next) {
    upload(req, res, function (err) {
        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else{

            let result = "You have uploaded these images File";
            res.send(result);
        }
        
    });
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});