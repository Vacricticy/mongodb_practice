// 1.引入mongoose
const mongooes = require("mongoose");
// 2.连接mongodb数据库
mongooes.connect("mongodb://localhost/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 3.监听mongodb数据库的连接状态
// 绑定数据库连接成功事件
mongooes.connection.once("open", function () {
  console.log("连接成功");
});
// 绑定数据库连接失败事件
mongooes.connection.once("close", function () {
  console.log("数据库连接已经断开");
});

// 4.断开数据库连接(一般不用)
mongooes.disconnect();
