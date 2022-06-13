//手机短信
const sms_util = require('../util/sms_util')
const sendcode = function (req, res) {
  //1. 获取请求参数数据
  var phone = req.query.phone;
  //2. 处理数据
  //生成验证码(6位随机数)
  var code = sms_util.randomCode(6);

  sms_util.sendCode(phone, phonecode, function (success) {//success表示是否成功
    if (success) {
      console.log('保存验证码: ', phone, phonecode)
      res.send({"code": 0, phonecode: 123})
    } else {
      //3. 返回响应数据
      res.send({"code": 1, msg: '短信验证码发送失败'})
    }
  })

}
//登入信息
const formidable = require('formidable')
const reqloginMassge = function (req, res) {
  const form = new formidable.IncomingForm()
  form.parse(req, (err, fields, files) => {
    res.send({
      code: 0,
      data: fields,
      passwordcode: 456789
    })
  })
}
const getreqloginUser = function (req, res) {
    const data=req.query
   console.log(data)
    res.send({
      code: 0,
      data,
      passwordcode: 456789
    })


}
module.exports = {
  sendcode,
  reqloginMassge,
  getreqloginUser,
}