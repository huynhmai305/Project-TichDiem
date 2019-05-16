var express = require('express');
var router = express.Router();
const User = require('../models/user');

/* GET home page. */
router.get('/',(req, res, next) => {
  res.render('index');
 
});
router.get('/login', (req,res) => {
  res.render('login')
});
router.get('/register', (req,res) => {
  res.render('register')
});
router.get('/admin/user',(req,res) => 
  User.findAll()
  .then(result => {
      res.render('admin/user',{result} );
      // res.send(JSON.stringify(result))
  })
  .catch(err => console.log(err))
  );

//add user
router.get('/admin/user/add',(req,res) =>{
    const data = {
        username: 'Nguyễn Thị Huỳnh Mai',
        address: 'Bình Định',
        phone:'0378925783',
        email: 'nthm@gmail.com',
        password: '123456789',
        role: 3
    };
    let { username,address, phone, email,password,role} = data;
    //insert into table
    User.create({ username,address,phone,email,password,role})
    .then( result => res.redirect('/admin/user'))
    .catch(err => console.log(err))

    //delete from table
    // User.destroy({
    //     where: {
    //       id: 2
    //     }
    //   }).then(() => {
    //     console.log(`Delete complete user has id: ${id}`);
    //   });

    //   //alter table
    //   User.update({ 
    //     username: 'Nguyễn Thị Huỳnh Mai',
    //     email: 'nthm@gmail.com'
    //     }, {
    //     where: {
    //       id: 9
    //     }
    //   }).then(() => {
    //     console.log("Update complete");

    //   });
})

module.exports = router;
