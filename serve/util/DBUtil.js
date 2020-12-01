/**
 * cnpm install mysql --save
* */
var mysql = require('mysql');
let connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'taxr'
})


const promise_query = function(sql) {
  return new Promise(function(resolve, reject) {
    connection.getConnection((err,connection)=>{
      connection.query(sql, function(error, results, fields) {
        if (error){
          console.log('err:'+error);
        }
        resolve(results);
        connection.release();
      })
    })
  })
}
module.exports = {
     query :promise_query
}

