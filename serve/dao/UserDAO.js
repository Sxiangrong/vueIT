const mysql   = require('mysql');
const dbUtil = require('../util/DBUtil')


  function  login(courseName,) {
   const login = 'select * from learnResource where courseName=?';
   const params=new Array();
   params.push(courseName);
 /*  params.push(teacher);*/
   sql= mysql.format(login,params);
   console.log('sql:%s',sql);

   return   dbUtil.query(sql);

}

// function insert(user){
//
//   let  sql="insert into user (id,name,age,sex,s_id) VALUES(?,?,?,?,?)";
//   const params=new Array();
//
//   params.push(user.name);
//   if (!user.age) {
//      user.age=29;
//   }
//   params.push(user.name);
//   params.push(user.age);
//   params.push(user.s_id);
//
//   sql= mysql.format(sql,params);
//   console.log(sql);
//   console.log('sql:s%',sql);
//
//   return   dbUtil.query(sql);
//
// }


module.exports ={
  login:login,
 // insert:insert
}


