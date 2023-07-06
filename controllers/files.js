
var docxConverter = require("docx-pdf");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`); //Appending extension
  },
});
 
const upload = multer({ storage: storage });

const homepage =  (req, res) => {
    //  res.sendFile(__dirname + "/index.html");
     res.sendFile(path.join(__dirname, "../views/index.html"));
  };

  const uploadfile =  (req, res) => {
      let outputpath = Date.now() + "output.pdf";
      docxConverter(req.file.path, outputpath, function (err, result) {
        if (err) {
          console.log(err);
        }
        
        res.download(outputpath)
      });
    };

  module.exports = {homepage, uploadfile, upload};