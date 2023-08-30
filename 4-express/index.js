const express = require('express');


/*
 现在使用 nodemon 都会 npm i nodemon --save --dev, 不会全局安装
 因为每个合作者的本机环境不同，而且现在都是用 npx
*/


/*
Express:
Alternatives: Koa,
Framework build from express(Loopback, KeystoneJS)
功能很少，都是必备功能
*/

/**
 * Middleware functions are functions that have access to the request object (req), the response
 * object (res), and the next middleware function in the application's request-response cycle. The
 * next middleware function is commonly denoted by a variable named next.
 * 
 * task:
 *   - end the request - respond function
 *   - make changes to the request and the response function
 *   - Execute any code
 *   - call the next middleware function in the stack
 * 
 * 
 * 每个middleware除了能返回和执行下一个 middleware之外， 如果既不返回和不调用 next的话， middleware就 lost了
 * 
 * 传入 middleware 方法：
 *   - app.use() - all methods, all path(start with) example: app.use("/users") //匹配所有以/users 开头的 api(这个是因为)
 *   - app.get() - only get method, only exact path
 * 
 * error handling
 *
 */


/*
res.send()和res.json()的区别:
   唯一区别就是send()会检测内容格式
*/
 
const app = express();
// global middleware
app.use(express.json());//监听完整的数据，
// app.use(express.urlencoded());

// GET localhost:3000/
// application  http method  (path , callback function => route handler) => middleware



app.get('/', (req, res) => {
  res.send([1, 2, 3, 4]);
});



// req -> request
// res -> response
/**
 * 如何从 request中获取数据
 * 1. req.query (url 中的变量 /:id, example: /4 -> id: "4")
 *     GET, PUT, DELETE, PATCH
 * 
 * 2. req.params (url 中的变量 ?id=4 -> id: "4")
 * 3. req.body(body 的数据)  // app.use(express.json());//监听完整的数据，并且转换数据(一定需要这个才能直接调用 req。body)
 * 
 * 4. from req.headers(authorization token)
*/


app.post('/users', (req, res) => {
  // check if req.body exists
  // data validation
  // res.send('post /users');
  // res.json([1, 23, 4]);
  // res.sendStatus(201);
  res.status(201).json(req.body);
});

// :id -> 变量名为id -> req.params.id
app.put('/users/:id', (req, res) => {
  console.log(req.body)
  res.send(req.params.id);
});

app.get('/users/:id/posts/:postId', (req, res) => {
  res.send(req.params);
});

/**
 * 如何从request获取数据
 * 1. req.params (url中的变量)   -> GET, PUT, DELETE, PATCH
 *    /users/:id (id)
 * 2. req.query (query param)   -> GET  -> filtering, pageSize, Page, q
 *    /users?page=1&pageSize=10
 * 
 * 
 * 3. req.body (body)           -> POST, PUT, PATCH
 *                    (app.use(express.json())) -> middleware
 *
 * from headers (authorization)
 */
app.get('/users', (req, res) => {
  res.send(req.query);
});
// app.delete('/', (req, res) => {});
// app.put('/', (req, res) => {});
// app.patch('/', (req, res) => {});

app.listen(3000);

// cli command line interface
// 脚手架工具
// create-react-app

// alias

// npm init -y
// npm i {package}
// npm i -D {package}
// npm uninstall {package}
// npm run {script}

// package, module, library, framework

// 匹配所有以 /users 开头的请求，包含任意method
// GET /users
// POST /users
// GET /users/1/posts/123
// app.use('/users',middleware1);

// 只能匹配 GET /users
// app.get('/users', middleware)

// const tasks = [{
//   id: 1,
//   description: 'task 1',
//   done: false,
// },{
//   id: 2,
//   description: 'task 2',
//   done: false,
// }];
