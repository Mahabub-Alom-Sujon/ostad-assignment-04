const express = require('express');
const port = 3000;
const app = express();


app.get('/download', function (req, res) {
    res.download("./downloadFile/blog_02.jpg")
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
});