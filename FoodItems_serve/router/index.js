const express = require('express')
const  router=express.Router()

const {getAddress,getFoodType,getShops}=require('../router-headler/takeOutFood')
const {sendcode,reqloginMassge,getreqloginUser}=require('../router-headler/login')
const {getSearchShop}=require('../router-headler/search')
//页面
router.get('/getAddress',getAddress)
router.get('/getFoodType',getFoodType)
router.get('/getShops',getShops)
//登入
router.get('/getSendcode',sendcode)//手机短信
router.post('/getIoginMassge',reqloginMassge)//登入信息
router.post('/getreqloginUser',getreqloginUser)//登入信息


//搜索
router.post('/getSearchShop',getSearchShop)//搜索列表
module.exports=router
