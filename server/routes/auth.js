var express = require('express');
var router = express.Router();
const Authenticate=require('../middleware/authenticate');

/* GET home page. */
router.get('/profile',Authenticate, function(req, res) {
  console.log("hello profile page");
    res.send(req.rootUser)
  });
  
 
  

module.exports = router;