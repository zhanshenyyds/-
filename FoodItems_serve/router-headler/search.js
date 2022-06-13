const db=require('../db/index.js')
const getSearchShop=function (req,res){
  let keyword=Object.keys(req.body)[0]


  // let sql="select * from getfoodtype where title=?"
  let sql="select * from getfoodtype "
  db.query(sql,(err,data)=>{
    if(err){return console.log(err)}
   let filterCart=data.filter(n=>{
      return  n.title.includes(keyword)===true
    })
    res.send({
      code:0,
      data:filterCart
    })

  })
}
module.exports={
  getSearchShop
}