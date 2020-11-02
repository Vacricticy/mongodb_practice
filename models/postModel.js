/* 定义post的模型 */
const mongooes = require("mongoose");
const Schema = mongooes.Schema;
const postSchema = new Schema({
  user_id: String,
  title: String,
  content: String,
});
const PostModel = mongooes.model("post", postSchema);
// module.exports = PostModel;
module.exports = { PostModel, mongooes };
