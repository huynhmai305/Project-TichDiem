const express = require('express');
const router = express.Router();
const User = require('../models/user');
const cors = require('cors');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');


/* GET home page. */
router.get('/',(req, res, next) => {
  res.render('index');

});
router.use(cors())
process.env.SECRET_KEY = 'secret'
//===== login page
router.get('/login', (req,res) => {
  res.render('login');
});
router.post('/login',(req,res) =>{
  var email = req.body.email;
  var pw = req.body.password;
  
  if(email=='admin123@gmail.com' && pw=='123456789'){
    res.redirect('admin');
  }
  else {
    User.findAll({
      where: {
        email: email,
        // password: pw
      },

      attributes: ['role','id']
    })
    .then( result => {
      if(result){
          if(bcrypt.compare(pw,result.password)){
              var rs=result[0].role;
              if(rs===1){  
                res.redirect('store')
              }
              else if(rs===2){
                res.redirect('users')
              }
              req.session.id = result[0].id;
          } else {
              res.json({error: 'User does not exist'})
          }
      } else {
          res.send({error: 'User does not exist'})
      }
    })
    .catch(err => {
        res.send('error: '+err)
    })
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
  User.findOne({
    where: {
      email: data.email
    }
  })
  .then( user => {
    // console.log(user)
    if(!user){
        bcrypt.hash(req.body.password,10,(err,hash) => {
            data.password = hash;
            let { username,ngsinh,address, phone, email,password,role} = data;
            //insert into table
            User.create({ username,ngsinh,address,phone,email,password,role})
            .then( result => {
              res.redirect('login')
            })
            .catch(err => {
                res.send('error:' +err)
            })
        })
    } else {
        res.json({error: 'User already exists'})
    }
  })
  .catch(err => {
    res.send('error:'+ err)
  })
  
  
  
})
//end register=======

//=====load admin page

router.get('/admin', (req,res) => {
    res.render('admin/index')
})

//======load trang quan ly khach hang
router.get('/admin/user',(req,res) => {
  User.findAll({
    where: {role: 2},
    order:['id']
  })
  .then(result => {
    res.render('admin/user',{result} );
    
  })
  .catch(err => console.log(err))
})
//load trang quan ly cua hang
router.get('/admin/store',(req,res) => {
  User.findAll({
    where: {role: 1},
    order:['id']
  })
  .then(result => {
    res.render('admin/store',{result} );
    
  })
  .catch(err => console.log(err))
})

//add user
// router.get('/admin/user/edit/:id',(req,res) =>{ 
//   console.log(this.params.id)
//       //alter table
//       User.update({ 
//         ngsinh: '01/01/1997'
//         }, {
//         where: {
//           id: req.param.id
//         }
//       })
//       .then(result => {
//         console.log("Update complete");//NOTE:chưa lấy đc id của user
//         res.render('admin/user')
//       })
//       .catch(err => console.log(err))
// })
router.get('/admin/user/delete/:id', (req,res) => {
 
  //delete from table
    User.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(result => {
        console.log(`Delete completed `);
        res.redirect('/admin/user')
      })
      .catch(err => console.log(err))
})
//======load post admin page
router.get('/admin/post',(req,res) => {
  res.render('admin/post')
})
router.get('/post/add',(req,res) => {
  res.render('post/AddPost')
})
// router.get('/customer',(req,res) => {
//   res.render('customer/home')
// })
router.get('/store',(req,res) => {
  res.render('store/home')
})
module.exports = router;
