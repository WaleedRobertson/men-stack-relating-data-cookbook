const express = require('express');
const router = express.Router();
const User = require('../models/user.js');


router.get('/', async(req, res) => {
  try{
    const currentUser = await User.findById(req.session.user._id)
    res.render('foods/index.ejs', {user: currentUser, pantrys: currentUser.pantrys})
  }
  catch (error){
    console.log(error)
    res.redirect('/')
  }
})


router.get('/users/:userId/foods', (req, res) => {
    res.render('foods/index.ejs')
  });

router.get('/users/:userId/foods/new', (req, res) => {
    res.render('views/new.ejs')
  });


router.get()
  


module.exports = router;
