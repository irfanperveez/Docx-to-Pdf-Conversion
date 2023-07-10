const express = require('express');
const router = express.Router();
const files = require('../controllers/files');
const middleware = require('../middlewares/middleware');



router.get('/', files.homepage);
router.post('/docxtopdf', middleware.uploadMiddleware, files.uploadfile);


 
module.exports = router;
