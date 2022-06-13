const db=require('../db/index.js')
const getAddress = function (req, res) {
  const  sql='select * from address'
  db.query(sql,(err,data)=>{
    if(err){return console.log(err)}
    res.send({
      code:0,
      data:data[0],
    })
  })
}
const getFoodType=function (req,res){
  const  sqlImg='select * from getfoodtype'
  db.query(sqlImg,(err,data)=>{
    let img=[[],[]]
    let img1=[[],[]]
    let img2=[[],[]]
    for(let i=0;i<8;i++){
      if(i>=4){
        img[1].push(data[i])
      }else{
        img[0].push(data[i])
      }
    }
    for(let v=8;v<=15;v++){
      if(v>=12){
        img1[1].push(data[v])
      }else{
        img1[0].push(data[v])
      }
    }
    for(let f=16;f<=23;f++){
      if(f>19){
        img2[1].push(data[f])
      }else{
        img2[0].push(data[f])
      }
    }
    if(err){return console.log(err)}
    res.send({
      code:0,
      data:[
        img,
        img1,
        img2,
      ]


    })

  })
}
const getShops=function (req,res){
  const sqlShop='select * from shops'
  db.query(sqlShop,(err,data)=>{
    if(err){return  res.send(err)}
    res.send({
      code:0,
      data:{
        business:'附近商家',
        data
      }
    })

  })

}




module.exports = {
  getAddress,
  getFoodType,
  getShops,
}