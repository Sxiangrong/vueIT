const userDao  = require('../dao/UserDAO')


let user={
  courseName:'MySQL',
  /*teacher:'宋丽丽'*/
}

userDao.login(user).then((data)=>{
  console.log(data);
})
