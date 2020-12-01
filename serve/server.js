/**
 *  cnpm install mysql --save
 *  cnpm install express --save
 *  cnpm install cors --save    跨越访问
 *  cnpm install nodemon -g     node热启动
* */
const express = require('express');//web框架
const cors = require('cors')//跨域框架
const app = new express();
const router_user = require('./controller/UserController')

app.use(cors());
app.use('/api/user',router_user);

app.listen(3000,(req,res)=>{
   console.log('server is running at 3000');
})

