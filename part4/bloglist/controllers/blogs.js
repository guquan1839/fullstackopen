const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const middleware = require('../utils/middleware');
// blogsRouter.get('/', async(request, response) => {
//     const blogs = await Blog.find({})
//       response.json(blogs)
// })



// const getTokenFrom = request => {
//   const authorization = request.get('authorization')
//   if (authorization && authorization.startsWith('Bearer ')) {
//     return authorization.replace('Bearer ', '')
//   }
//   return null
// }

blogsRouter.get('/', async(request, response) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
    response.json(blogs)
})

blogsRouter.get('/:id', async(request, response) => {
  const blogs = await Blog.findById(request.params.id)
      response.json(blogs)

})

// blogsRouter.post('/', async(request, response) => {
//     const blog = new Blog(request.body)

//     if(!blog.likes){
//       blog.likes = 0
//     }

//     if(!blog.title || !blog.url){
//       return response.status(400).end()
//     }


//     const result = await blog.save()
//     response.status(201).json(result)
// })


blogsRouter.post('/', middleware.userExtractor,async(request, response) => {

  const body = request.body
  // // const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET)
  // const decodedToken = jwt.verify(request.token, process.env.SECRET)
  // if (!decodedToken.id) {
  //   return response.status(401).json({ error: 'token invalid' })
  // }
  // const user = await User.findById(decodedToken.id)

    const user = request.user

    const blog = new Blog({
    title: body.title,
    author: body.author,
    url:body.url,
    likes: body.likes || 0,
    user:user._id
  })

  // const user = await User.findById(body.userId)

  // const blog = new Blog({
  //   title: body.title,
  //   author: body.author,
  //   url:body.url,
  //   likes: body.likes || 0,
  //   user:user.id
  // })

  // if(!blog.likes){
  //   blog.likes = 0
  // }

  if(!blog.title || !blog.url){
    return response.status(400).end()
  }
  

  const result = await blog.save()

  user.blogs = user.blogs.concat(result._id)
  await user.save()
  response.status(201).json(result)
})




blogsRouter.delete('/:id',middleware.userExtractor,async(request,response)=>{

  // const decodedToken = jwt.verify(request.token, process.env.SECRET)
  // if (!decodedToken.id) {
  //   return response.status(401).json({ error: 'token invalid' })
  // }
  // const user = await User.findById(decodedToken.id)
  const user = request.user

  const blog = await Blog.findById(request.params.id)

  if ( blog.user._id.toString() === user._id.toString() ){

    const result = await Blog.findByIdAndDelete(request.params.id)

    if(result){
      response.status(204).end()
    }
    else{
      response.status(404).end()
    }

  }


else{
  response.status(401).json({error:"token error!!! unauthirized"})
}

})



blogsRouter.put('/:id',async(request,response)=>{
  const body  = request.body
  const new_like  = {
    title: body.title,
    author: body.author,
    url:body.url,
    likes: body.likes
  }

  const result = await Blog.findByIdAndUpdate(request.params.id,new_like,{new:true})
  if(result){
      response.status(200).json(result)
    }
  else{
      response.status(404).end()
    }
})



module.exports = blogsRouter