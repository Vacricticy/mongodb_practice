const mongooes = require("mongoose");
mongooes.connect("mongodb://localhost/mongooes_test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 1.创建Schema模式对象
const Schema = mongooes.Schema;
const userSchema = new Schema({
  user_id: String,
  name: String,
  age: Number,
  gender: {
    type: Number,
    default: 0,
  },
});

// 2.通过Schema创建模型对象
const UserModel = mongooes.model("user", userSchema); //返回的是一个构造函数

// 3.添加文档
// UserModel.create({ user_id: 100, name: "liu1" }, function (err) {
//   if (!err) {
//     console.log("插入成功");
//   } else {
//     console.log(err);
//   }
// });

// let data = [
//   { user_id: 101, name: "liu2", age: 22 },
//   { user_id: 102, name: "liu3" },
// ];
// UserModel.create(data, function (err) {
//   console.log(arguments[1]); //第二个值表示的是所添加的文档对象,是一个数组
// });

/* 
    4.查询:
    model.find(conditions,[projection],[options],callback)
    conditions:查询的条件 
    projection:投影  { name: 1, gender: 1, _id: 0 } 或 'name gender -_id'
    options:查询选项  { skip: xx, limit: xx }   
 
    model.findOne(...)
    model.findById(...)

    model.countDocuments(conditions,callback) 查询文档的数量
 */

// UserModel.find({}, function (err, data) {
//   console.log(data);
// });
// UserModel.find(
//   { name: /liu/i },
//   "name gender -_id",
//   { skip: 2, limit: 1 },
//   function (err, data) {
//     console.log(data); //返回的是一个文档对象数组
//   }
// );

// UserModel.findById("5f9fbfba14319e492c0f5bc4", function (err, data) {
//   console.log(data);
//   console.log(data instanceof UserModel); //true 返回的文档对象属于模型对象（即集合）的实例对象
// });

UserModel.countDocuments({}, function (err, data) {
  console.log(data);
});

/* 5.修改：
    model.update(conditions,[doc],[options],callback)
        doc:修改后的文档对象
    model.updateMany(...)
    model.uodateOne(...)
*/
UserModel.updateOne({ name: "liu1" }, { $set: { age: 22 } }, function (
  err,
  data
) {
  if (!err) {
    console.log("修改成功");
  }
});

UserModel.find({ name: "liu1" }, function (err, data) {
  console.log(data);
});

/* 
6.删除：
model.remove(conditions,callback)
model.deleteOne(...)
model.deleteMany(...)
*/
// UserModel.remove(
//   {
//     name: "liu2",
//   },
//   function (err, data) {
//     console.log("删除成功");
//   }
// );
// UserModel.find({}, function (err, data) {
//   console.log(data);
// });
