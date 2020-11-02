const mongooes = require("./1.连接数据库");
const { PostModel, mongooes: mongooes2 } = require("./models/postModel");

PostModel.findOne({}, function (err, data) {
  if (!err) {
    console.log(data);
  }
});
console.log(mongooes == mongooes); //true 原因:两个文件所引入的mongooes是一样的，因为引用数据类型在引用的时候引用的是地址。
// 注意：先会打印true，然后才会打印data，因为数据库操作的API是异步的
