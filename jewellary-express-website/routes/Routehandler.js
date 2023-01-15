
const express=require('express');
const path=require('path');
const router=  express.Router();


router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../static/web3.html'));
});

router.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname,'../static/contact.html'));
});

router.get('/about', function(req, res) {

    res.sendFile(path.join(__dirname,'../static/about.html'));

});
router.get('/blog', function(req, res) {
    res.sendFile(path.join(__dirname, '../static/blog.html'));
});


router.use(express.static(path.join(__dirname,'../static')))
router.use(express.static(path.join(__dirname,'../views')))

// router.use(express.static(path.join(__dirname,'../views/images')))


// console.log(path.join(__dirname));
// console.log(__filename);


module.exports = router;


