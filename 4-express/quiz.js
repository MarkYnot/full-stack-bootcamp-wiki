const express = require('express');
const app = express();
function m1(req, res, next) {
  console.log('m1');
  next();
}
function m2(req, res, next) {
  console.log('m2');
  next();
}
function m3(req, res, next) {
  console.log('m3');
  next();
}
function m4(req, res, next) {
  console.log('m4');
  next();
}

function m5(req, res, next) {
  console.log('m5');
  res.json({msg:'m5'}) //res.json（）就返回了 没有执行next（）(j就算执行了next（）, 也会报错，所以一般不建议返回 client 之后再继续调用 next()
}

app.use(m1); // M1是全局注册
app.use('/v1', m2);  // 所有 v1开头的都会触发m2
app.get('/v1/tasks', m3, m4); // m1,m2,m3,m4
app.get('/v1/tasks/:id', m5, (req, res) => {
  res.json(req.params);  
});

app.listen(3000, () => console.log('listen on 3000'));
// quiz (what's get logged in the terminal and what's the response?)
// GET /v1     m1, m2
// GET /v1/tasks  m1, m2, m3, m4
// GET /v1/tasks/1    m1, m2, m5, msg: m5
// GET /v1/tasks/2/description   m1,m2(get 必须是绝对路径，全符合才行)

// all
