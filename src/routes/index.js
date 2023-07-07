const express = require("express");
const path = require('path');
const bodyparser = require("body-parser");
const app = express();
const files = require('../controllers/files');
const middleware = require('../middlewares/middleware');

app.use(express.static("uploads"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get('/', files.homepage);
app.post('/docxtopdf', middleware.uploadMiddleware, files.uploadfile);

 
app.listen(5000, () => {
  console.log("App is listening on port 5000");
});