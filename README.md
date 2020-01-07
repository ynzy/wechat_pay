# pay_share

## 微信授权流程
1. 用户同意授权，获取code
2. 通过code换取网页授权access_token
3. 拉去用户信息（需scope为snsapi_userinfo）
## JSSDK调用流程
1. 绑定域名
2. 引入js文件
3. 通过config接口注入权限验证配置（接口签名）
4. 通过ready接口处理成功验证
## H5接入微信
1. 定义请求地址
2. 微信授权，注入openid
3. 获取签名信息配置config
4. 定义分享公共信息
## express项目创建
### 初始化express项目
```js
npm install express-generator -g

express -h

express pay_server

npm i -g pm2

npm i & node bin/www || pm2 start bin/www

```

### 微信用户授权
* request、memory-cache（缓存，模拟readis）
* vue调用Node，Node调用微信

* 微信授权跳转
* 根据code获取openid信息
* 向客户端写入cookie