## protocol 协议

OSI Model (5, 7)

tcp (transmission control protocol) 传输控制协议
udp (user datagram protocol) 用户数据报协议

http (5 versions)
0.9
1.0
1.1 (persistent connection)
2 http(s) secure
3

url (uniform resource locator) 统一资源定位符
```js
<a href="https://google.com"/>
```


https -> 443
http -> 80
mongodb -> 27017
ftp -> 21
smtp -> 25

ip whitelist

DNS

query param

http method
GET
POST
PUT
DELETE
PATCH

## API
  - API defines the methods and data structures that developers can use to interact with a service, library, or software component without needing to understand its internal implementation. (加强开发效率)

## Web API
  - Web API specifically refers to an API that is accessible over the internet using the HTTP protocol. Web APIS provide a way for applications to communicate with each other over the web, typically using standard HTТР methods like GET, POST, PUT, and DELETE.

## REST（Representational State Transfer）
 REST is an architectural style for designing networked applications. It emphasizes a set of constraints to create scalable and stateless web services.

> 1. **Resources:**  Everything is a resource identified byaURL (Uniform Resource Locator).
> 
> 2. **Stateless:** Each request from a client to the server must contain all necessary information for the server to understand and process it. 
> 3. **HTTP Methods:** Utilizing standard HTTP methods(GET, POST, PUT, DELETE) for CRUD operations on resources
> 4. **Representation:** Resources can be represented in various formats like JSON, XML, HTML
> 5. **Uniform Interface:** A uniform way to interact with resources using standard methods and representations

 - RESTful API is a subset of WEB API
 - url structure:
```
OPTIONS

CRUD
create, read, update, delete
增删改查

Headers

body

mime type
 
status code

root path

client, server
cs model
```
## API Authentication and Authorization



## CORS (cross origin resource sharing) 跨域资源共享

token

serialization
de-serilization

// trailing comma
{
"a": 1
}

stateless
stateful

## Restful API 设计规范

**1. versioning (版本)**
```
   example: /api/v1/users
   example: api.example.com/v1/users (deprecate)
   example: api.example.com/v2/users
```

**2. 用名词来描述资源，并且使用复数形式**
```
   example: /api/v1/users
```

**3. 使用贴切的 HTTP 方法来描述操作**
```
   GET -> 获取数据
   POST -> 创建数据
   。。。
```

**4. url 设计上，可以使用嵌套结构**
```
   /api/v1/users/{userId}/posts/{postId}
   example: /api/v1/users/1/posts/2
```

**5. 使用合适的 HTTP 状态码来表示请求的结果**
```
   200 -> OK
   201 -> Created
   400 -> Bad Request
   401 -> Unauthorized
   403 -> Forbidden
   404 -> Not Found
   500 -> Internal Server Error
```


**6. 注意数据返回的大小，尽量进行分页**
```
   /api/v1/users?page=1&pageSize=10 (page_size)
  总users 10000 数据
  一次返回1页, 每页10、100个


  返回第一页的10个 user
  GET / users?page=1&pageSize =10
  返回第二页的100个 user
  GET /users?page=2&pageSize=100
  default: page=1, pageSize=10/100
```


**7. 返回可读的错误信息**
```
   {
   "code": 400,
   "message": "password is too week"
   }
```


## API authorization
fe page  /news
/api/news   + token
redirect -> /login
token 

## Other webAPIs
- SOAP(Simple Object Access Protocol)
- GraphQL  (指定得到什么数据)
- WebSocket （）
- gRPC (google 开发的通讯协议)

## Semantic versioning 版本号语义化规范
> **^**: latest version with the current major version fixed (major.x.x)
> - 使用 ^ 符号意味着你愿意接受该版本及该主版本号（major version）下的所有更新。这包括次版本号（minor versions）和补丁版本号（patch versions）的更新。
>
> - Example： ^1.2.3 会匹配所有 1.x.x 的版本，但最低是 1.2.3。所以它可以更新到 1.3.0，1.4.0 等，但不会更新到 2.0.0。


> **~**: latest version with the current major and minor version fixed (major.minor.x)
> - 使用 ~ 符号意味着你愿意接受补丁级别（patch-level）的更新。主版本号（major）和次版本号（minor）都会保持不变。
> - Example： ~1.2.3 会匹配所有 1.2.x 的版本，但最低是 1.2.3。所以它可以更新到 1.2.4，1.2.5 等，但不会更新到 1.3.0 或 2.0.0。

> (blank) exact version match


这些符号允许开发者更灵活地管理依赖，同时也尽量减少因依赖更新导致的问题. `major.minor.patch`
  - 主版本号变更通常意味着有破坏性的 API 变更；
  -  次版本号变更通常意味着有向后兼容的新功能；
  - 补丁版本号变更则通常是向后兼容的修复。


## package-lock.json
- 装一个package的时候，package-lock.json会自动记录所有关联于这个 package 的东西。包括他们的版本号(固定版本号)
- 但是当 npm i时候, npm会安装package.json指定的版本, 并改变package-lock.json


sequence diagram
时序图

serverless

FE
fetch
axios
XMLHttpRequest

BE
axios

{id}
:id
