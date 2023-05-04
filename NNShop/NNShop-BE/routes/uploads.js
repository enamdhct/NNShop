
let fs = require('fs');

const router = require("express").Router();

router.get("/open",  (req,res) =>{
    let imageName = "uploads/" + req.query.imageUrl;
    console.log(imageName);
    fs.readFile(imageName, (err, imageData) =>{
      if (err) {
        res.json({
          result: "failed",
          messege: `cannot: ${err}`
        })
      }
      // res.writeHead(200);
      res.end(imageData)
    })
})


module.exports = router;