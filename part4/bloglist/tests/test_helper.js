const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
    {
      title: 'HTML is easy',
      author: "a",
      url:"2222",
      likes: 111
    },
    {
      title: 'Browser can execute only JavaScript',
      author: "b",
      url:"22111221619",
      likes: 13
    },
  ]

  const nonExistingId = async () => {
    const blog = new Blog({ content: 'willremovethissoon' })
    await blog.save()
    await blog.deleteOne()
  
    return blog._id.toString()
  }
  
  const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
  }

  const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
  }


module.exports = {
    initialBlogs,nonExistingId, blogsInDb, usersInDb
} 