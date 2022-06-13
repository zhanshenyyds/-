const express = require('express')
const cors = require('cors')
const session = require('express-session')

const router = require('./router/index')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//配置session
app.use(session({
  secret:'keybord cat',//可以任意字符
  resave:false,//国定写法
  saveUninitialized:true,//国定写法
  cookie: {maxAge: 10000*60*60*24,domain:"127.0.0.1" },
}))

app.use(router)


app.listen(80, () => {
  console.log("express server run at http://127.0.0.1")
})