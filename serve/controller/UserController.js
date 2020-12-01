
const express = require('express');
let router = new express.Router();

var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });   //处理post请求

const userDAO = require('../dao/UserDAO')
const url = require('url');

router.get('/login', (req, res) => {
  let promise = userDAO.login(req.query.courseName)
  promise.then((data)=>{
    res.json({
      errno: 0,
      data:data
    });
  },(err)=>{
    console.log('err:'+err);
  })

})


// router.post('/add',urlencodedParser,(req,res)=>{
//   console.log(req.body);
//   console.log(req.body.age);
//
//   let user = {};
//   user.age = req.body.age;
//   user.s_id=req.body.s_id;
//   let promise = userDAO.insert(user);
//   promise.then((data)=>{
//     res.json({
//       errno: 0,
//       data:data
//     });
//   },(err)=>{
//     console.log('err:'+err);
//   })
//
//
// })
module.exports=router;
