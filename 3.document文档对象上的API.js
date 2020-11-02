const mongooes = require("mongoose");
mongooes.connect("mongodb://localhost/mongooes_test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongooes.Schema;
const postSchema = new Schema({
  user_id: String,
  title: String,
  content: String,
});
const PostModel = mongooes.model("post", postSchema);

// PostModel.create({ user_id: 100, title: "标题1", content: "内容1" }, function (
//   err,
//   data
// ) {
//   if (!err) {
//     console.log(data);
//   }
// });

PostModel.findOne({}, function (err, data) {
  if (!err) {
    /*    
    文档对象本身的API，用于操作当前文档对象：
        document.update(update,[options],[callback])
        document.remove([callback]);
        document.get(name) 获取文档对应的属性值 -----可以直接通过document.name获取。但这里需要注意的是这里不是普通的对象，而是document对象
        document.set(name,value) 设置文档对应的属性值 ----可以直接通过docuemnt.name=xxx来设置 
    
    */
    // 1.1修改文档对象本身-----方式1：
    // data.update({ $set: { title: "title 1" } }, function (err, newData) {
    //   console.log(newData);
    // });
    // 1.2修改文档对象本身-----方式2：
    // data.title = "title 101";
    // data.save(function (err, data) {
    //   console.log(data);
    // });
    // 2.删除该文档对象：
    // data.remove(function (err, data) {
    //   console.log(data);
    // });
    console.log(data);
  }
});
