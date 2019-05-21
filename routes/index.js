var express = require('express');
var router = express.Router();
const User = require('../models/user');
// const pool = require('../config/database')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
var bodyParser = require('body-parser'); 
router.use(bodyParser.json()); // to support JSON bodies
router.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies
//to hash password
// bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
//   // Store hash in your password DB.
// });
// //--end to hash password
// //to check password
// bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
//   // res == true
// });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
//-end to check password

/* GET home page. */
router.get('/',(req, res, next) => {
  res.render('index');
 
});
//===== login page
router.get('/login', (req,res) => {
  res.render('login');
});
router.post('/login',(req,res) =>{
  var email=req.body.email;
  var pw=req.body.password;
  
  if(email=='admin123@gmail.com' && pw=='123456789'){
    res.redirect('admin');
  }
  else {
    User.findOne({
      where: {
        email: email,
        password: pw
      },
      attributes: ['role']
  })
  .then(result => {
    // console.log(result.role)
    var rs=result.role;  
      if(rs===1){  
        res.redirect('admin/user')
      }
      else if(rs===2){
        res.redirect('admin')
      }
    })
    .catch(err => console.log(err))
  }
})
 //end login======== 

 //======page register
router.get('/register', (req,res) => {
  res.render('register')
});
router.post('/register',(req,res) =>{
  const data = {
    username: req.body.ten,
    ngsinh: req.body.ngsinh,
    address: req.body.diachi,
    phone:req.body.sdt,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
};
let { username,ngsinh,address, phone, email,password,role} = data;
//insert into table
User.create({ username,ngsinh,address,phone,email,password,role})
.then( result => res.redirect('login'))
.catch(err => console.log(err))
  
})
//end register=======

//======ql user
router.get('/admin/user',(req,res) => {
  User.findAll()
  .then(result => {
    res.render('admin/user',{result} );
  })
  .catch(err => console.log(err))
}
  
)
//end====

router.get('/admin', (req,res) => {
  res.render('admin')
})

//add user
router.get('/admin/user/add',(req,res) =>{
    const data = {
        username: 'Trần Ngọc Quế Lâm',
        ngsinh: '22/03/1997',
        address: 'Tiền Giang',
        phone:'0123456789',
        email: 'tnql@gmail.com',
        password: '123456789',
        role: 1
    };
    let { username,ngsinh,address, phone, email,password,role} = data;
    //insert into table
    User.create({ username,ngsinh,address,phone,email,password,role})
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
