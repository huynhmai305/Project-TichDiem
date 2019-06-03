var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('customer/home');
});
router.get('/profile', (req, res, next) => {
  res.render('customer/profile');
  // res.send(req.session.id)
});

module.exports = router;
