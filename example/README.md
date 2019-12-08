# example
this example is forked from [email-example on viron](https://github.com/cam-inc/viron/tree/develop/example-email) repository.  

An Example for Viron API Server.  
This project most simply start to development.

# QuickStart

## Requirements

- [Docker for Mac](https://docs.docker.com/docker-for-mac/)

## Start on Docker

```
$ cp -ip .env.template .env
$ npm run dressup
```

> 初回起動時はMySQLの初期化が必要なため数十秒〜数分かかる。  
> その間DB接続エラーが出続けるが、初期化完了後、正常に起動する。

## Add to Viron

1. [Viron](https://cam-inc.github.io/viron/latest) を開く
1. 管理画面の追加フォームに [https://localhost:3000/swagger.json](https://localhost:3000/swagger.json) を入力

  > 初回アクセス時はSSL自己証明書の警告が出るため、別タブでアクセスし警告を無視しておく必要がある。

1. ログインフォームでID/Passwordの入力を求められるが、1人目のユーザーは自由なID/Passwordでログインできる

# Structure

```
.
├── Dockerfile
├── README.md
├── app.js
├── config
│   └── default.yaml
├── controllers
│   ├── root.js
│   ├── stats.js
│   ├── swagger.js
│   ├── user.js
│   ├── viron.js
│   ├── viron_account.js
│   ├── viron_admin_role.js
│   ├── viron_admin_user.js
│   ├── viron_audit_log.js
│   ├── viron_auth.js
│   └── viron_authtype.js
├── docker-compose.all.yml
├── docker-compose.db.yml
├── fittings
│   ├── error_handler.js
│   ├── middlewares.js
│   └── swagger_validator.js
├── mysql.env
├── package-lock.json
├── package.json
├── shared
│   ├── config
│   │   ├── index.js
│   │   └── local.js
│   ├── constant.js
│   ├── context.js
│   ├── index.js
│   ├── pages
│   │   ├── account
│   │   │   ├── components.js
│   │   │   └── index.js
│   │   ├── adminrole
│   │   │   ├── components.js
│   │   │   └── index.js
│   │   ├── adminuser
│   │   │   ├── components.js
│   │   │   └── index.js
│   │   ├── auditlog
│   │   │   ├── components.js
│   │   │   └── index.js
│   │   ├── index.js
│   │   ├── quick_view
│   │   │   ├── components.js
│   │   │   └── index.js
│   │   └── user
│   │       ├── components.js
│   │       └── index.js
│   └── stores
│       ├── index.js
│       └── mysql
│           ├── index.js
│           └── models
│               └── index.js
├── swagger
│   └── swagger.yaml
└
```

# Tools

```
$ npm run
```
