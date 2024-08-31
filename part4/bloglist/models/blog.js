const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

blogSchema.set('toJSON',{
  transform:(document,returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject._v

  }

})

module.exports = mongoose.model('Blog', blogSchema)


//与关系型数据库的惯例形成鲜明对比的是，引用现在被存储在两个文件中：笔记引用了创建它的用户，而用户有一个数组，引用了他们创建的所有笔记。