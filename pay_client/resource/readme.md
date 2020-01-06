##公众号测试号注册链接
https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login

##开发者工具
###windows下载地址：
https://mp.weixin.qq.com/debug/cgi-bin/webdebugger/download?from=mpwiki&os=x64

###Mac下载地址：
https://mp.weixin.qq.com/debug/cgi-bin/webdebugger/download?from=mpwiki&os=darwin


# 授权流程
## 网页授权获取code
```
https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#wechat_redirect
```
## 根据code获取access_token

```
https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code
```

## 根据code获取access_token和openId

```
https://api.weixin.qq.com/sns/oauth2/access_token?appid=APPID&secret=SECRET&code=CODE&grant_type=authorization_code
```
```
{
  "access_token":"ACCESS_TOKEN",
  "expires_in":7200,
  "refresh_token":"REFRESH_TOKEN",
  "openid":"OPENID",
  "scope":"SCOPE" 
}
```

## 刷新access_token（如果需要）

```
https://api.weixin.qq.com/sns/oauth2/refresh_token?appid=APPID&grant_type=refresh_token&refresh_token=REFRESH_TOKEN
```
```
{
  "access_token":"ACCESS_TOKEN",
  "expires_in":7200,
  "refresh_token":"REFRESH_TOKEN",
  "openid":"OPENID",
  "scope":"SCOPE" 
}
```

## 拉取用户信息(需scope为 snsapi_userinfo)

```
https://api.weixin.qq.com/sns/userinfo?access_token=ACCESS_TOKEN&openid=OPENID&lang=zh_CN
```
```
{    
  "openid":" OPENID",
  "nickname": NICKNAME,
  "sex":"1",
  "province":"PROVINCE"
  "city":"CITY",
  "country":"COUNTRY",
  "headimgurl":     "http://thirdwx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/46",
  "privilege":[ "PRIVILEGE1" "PRIVILEGE2" ],
  "unionid": "o6_bmasdasdsad6_2sgVt7hMZOPfL"
}
```

## JSSDK调用流程
1. 绑定域名
2. 引入JS文件
3. 通过config接口注入权限验证配置
4. 通过ready接口处理成功验证


## 微信分享接口API
### 新版本分享使用官网提供的JS-API地址
<script src="http://res.wx.qq.com/open/js/jweixin-1.4.0.js"></script>

### 旧版本分享可使用npm包提供的插件进行集成

### 微信支付-商户平台申请地址
```https://pay.weixin.qq.com/index.php/apply/applyment_home/guide_normal#none```

### 微信支付-商户平台登录地址
```https://pay.weixin.qq.com/index.php/core/home/login?return_url=%2F```

### 域名、服务器、证书
```https://www.aliyun.com```
```https://cloud.tencent.com```
```https://cloud.baidu.com```

```https://ai.baidu.com```
```https://www.cloudxns.net```
```https://letsencrypt.org```

### 微信JS-SDK文档
```https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115```

### 微信支付文档
```https://pay.weixin.qq.com/wiki/doc/api/index.html```
