var express = require('express');
var router = express.Router();
let request = require('request')
let cache = require('memory-cache');
let config = require('./config')
/* GET home page. */
router.get('/test', function (req, res, next) {
  res.json({
    code: 0,
    data: 'test',
    message: 'test'
  })
});

// 用户授权重定向
router.get('/redirect', function (req, res, next) {
  let redirectUrl = req.query.url, scope = req.query.scope, callback = 'http://m.51purse.com/api/wechat/getOpenId';
  cache.put('redirectUrl', redirectUrl);
  let authorizeUrl = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${config.appId}&redirect_uri=${callback}&response_type=code&scope=${scope}&state=STATE#wechat_redirect`;
  res.redirect(authorizeUrl)
});

// 根据code获取用户的OpenId
router.get('/getOpenId', async function (req, res) {
  let code = req.query.code;
  console.log("code:" + code);

})

module.exports = router;