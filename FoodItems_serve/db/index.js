const mysql=require('mysql')

const db=mysql.createPool({
  host:'127.0.0.1',
  user:'root',//用户名
  password:'123.aabb',//密码
  database:'clothing-vue项目'//数据库
})

module.exports=db