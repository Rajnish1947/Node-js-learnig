
const express = require('express');
const router = express();


// ye code ko sort banata hai
router.get('/', (req, res) => {
    console.log('hey this is your GET request');
    res.send('this our blog express routre');
});

router.get('/about', (req, res) => {
    res.send('This is our about page');
});
router.get('/blog ', (req, res) => {
    res.send('This is our blog page');
});


module.exports=router

