let express = require('express');
let router = express.Router();
let homepage = require('../db/Schemas/homepageHeader');

router.get('/header',function(req, res){
    homepage.find().then(data=>{
        console.log(data);
        res.send(data);
    }).catch(error=>{
        console.log(error);
        res.send(error);
    });

});


router.get('/sidebar',function(req, res){
    
});

router.get('/footer',function(req, res){
    
});

module.exports=router;
