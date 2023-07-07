const path = require ('path');
var docxConverter = require("docx-pdf");
const homepage =  (req, res) => {
     res.sendFile(path.join(__dirname, "../../client/public/index.html"));
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

  module.exports = {homepage, uploadfile};