
## 基于vue框架auth0验证登录获取node服务端对应用户的权限

### 项目设置

```bash
npm install
```

### 组态

需要使用个人的Auth0域和客户端ID配置该项目，以便身份验证流正常运行。

`auth_config.json`

```json
{
  "domain": "<YOUR AUTH0 DOMAIN>",
  "clientId": "<YOUR AUTH0 CLIENT ID>",
  "audience": "<YOUR AUTH0 API IDENTIFIER>",
}
```

### 编译启动开发

```bash
npm run serve
```

## 部署方式

### 编译并最小化生产

```bash
npm run build
```

### Docker构建

要构建和运行Docker映像，请在Windows exec.sh或exec.ps1Windows上运行。

### 运行 测试

```bash
npm run test
```

### 整理和修复文件

```bash
npm run lint
```

## 什么是Auth0?

Auth0可帮助您：

- 使用[多个身份验证源](https://docs.auth0.com/identityproviders)添加身份验证，这些身份验证源可以是社交身份（例如 Google，Facebook，Microsoft帐户，LinkedIn，GitHub，Twitter，Box，Salesforce等），也可以是企业身份系统（例如Windows Azure AD，Google Apps，Active Directory，ADFS或任何SAML身份）提供者。

- 通过更传统的 **[用户名/密码数据库](https://docs.auth0.com/mysql-connection-tutorial)**添加身份验证。

- 添加对 **[链接不同用户帐户](https://docs.auth0.com/link-accounts)** 和同一用户的支持。
- 支持生成签名的[Json Web Tokens](https://docs.auth0.com/jwt)以调用您的API并安全地传递用户身份。 
- 用户登录方式分析时间和地点的。
- 通过[JavaScript 规则](https://docs.auth0.com/rules)从其他来源提取数据并将其添加到用户个人资料中。




## Auth0官网

[Auth0](https://auth0.com)

