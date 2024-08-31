const { test, after ,beforeEach,describe} = require('node:test')
const assert  = require('assert')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require("../models/blog")
const helper = require('./test_helper')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const { response } = require('express')
const { title } = require('process')
//初始化数据库

// const initialBlogs = [
//     {
//       title: 'HTML is easy',
//       author: "a",
//       url:"2222",
//       likes: 111
//     },
//     {
//       title: 'Browser can execute only JavaScript',
//       author: "b",
//       url:"22111221619",
//       likes: 13
//     },
//   ]



  beforeEach( async() =>{
    await Blog.deleteMany({})

    const blogObjects = helper.initialBlogs.map(blog => new Blog(blog))

    const promiseArray = blogObjects.map(blog => blog.save())

    await Promise.all(promiseArray)
}

)

//测试
// test('exercise 4-8-json', async () => {
//     await api
//       .get('/api/blogs')
//       .expect(200)
//       .expect('Content-Type', /application\/json/)
//   })


// test('exercise 4-8-blogs-number', async ()=>{
//     const response = await api.get('/api/blogs')
//     assert.strictEqual(response.body.length, helper.initialBlogs.length)
// })
  



// test('exercise 4-9',async () =>{


//   const response = await api.get('/api/blogs')
//   .expect(200)
//   .expect('Content-Type', /application\/json/)
//   //console.log(response.body)
//   assert(response.body[0].id)
// })

// test('exercise 4-10',async()=>{
//   const new_blog = {

//       title: 'the journey to the west',
//       author: "c",
//       url:"221113243242",
//       likes: 33
//   }

//   await api.post('/api/blogs')
//   .send(new_blog)
//   .expect(201)
//   .expect('Content-Type',/application\/json/)

//   const current_content = await helper.blogsInDb()
//   assert.strictEqual(current_content.length,helper.initialBlogs.length+1)

//   const current_total_titles = current_content.map((blog)=>blog.title)
//   // console.log(current_total_titles)
//   // console.log(new_blog.title)
//   assert(current_total_titles.includes(new_blog.title))


// })



// test('exercise 4-11',async()=>{
//   const new_blog = {

//     title: '12315',
//     author: "c",
//     url:"221112",
// }
// const response = await api.post('/api/blogs')
// .send(new_blog)
// .expect(201)
// .expect('Content-Type',/application\/json/)

// const current_content = await helper.blogsInDb()

// // console.log(response.body)
// const find_new_blog = current_content.find((blog) => blog.id === response.body.id)
// assert.strictEqual(find_new_blog.likes,0)



// })


// test('exercise 4-12',async()=>{
//   const new_blog = {
//     author:"a",
//     url:"111111111111111111111111"
//   }

// await api.post('/api/blogs')
// .send(new_blog)
// .expect(400)

// const current_content = await helper.blogsInDb()
// assert.strictEqual(current_content.length,helper.initialBlogs.length)

// })


// test('exercise 4-13',async()=>{
//   const blogs_at_start = await helper.blogsInDb()

//   const test_blog = blogs_at_start[0]

//   await api.delete(`/api/blogs/${test_blog.id}`)
//   .expect(204)

//   const current_content = await helper.blogsInDb()
//   assert.strictEqual(current_content.length,helper.initialBlogs.length-1)

//   const current_total_titles = current_content.map((blog)=>blog.title)
//   assert(!current_total_titles.includes(test_blog.title))

// })


// test('exercise 4-14',async()=>{
//   const blogs_at_start = await helper.blogsInDb()

//   const test_blog = blogs_at_start[0]

//   const changed_blog = {
//     ...test_blog,
//     likes : test_blog.likes +1
//   }
  
//   await api.put(`/api/blogs/${test_blog.id}`).send(changed_blog)
//   .expect(200)

//   const current_content = await helper.blogsInDb()
//   assert.strictEqual(current_content.length,helper.initialBlogs.length) 


//   const find_updated_blog = current_content.find((blog) => blog.id === test_blog.id)
//   assert.strictEqual(find_updated_blog.likes,test_blog.likes+1)


// })


describe('code in course: when there is initially one user in db', () => {
  beforeEach(async () => {
    await User.deleteMany({})

    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'root', passwordHash })

    await user.save()
  })

  test('creation succeeds with a fresh username', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'mluukkai',
      name: 'Matti Luukkainen',
      password: 'salainen',
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await helper.usersInDb()
    assert.strictEqual(usersAtEnd.length, usersAtStart.length + 1)

    const usernames = usersAtEnd.map(u => u.username)
    assert(usernames.includes(newUser.username))
  })
})

describe('exercise 4-16 and 4-17', () => {
test('exercise 4-16 username.len < 3',async()=>{
  const usersAtStart = await helper.usersInDb()

  const illegal_user = {
    username: "1",
    name:"test",
    password:"1111111111111"
  }

  await api.post('/api/users')
  .send(illegal_user)
  .expect(400)

  const usersAtEnd = await helper.usersInDb()
  assert.strictEqual(usersAtEnd.length, usersAtStart.length)

  const usernames = usersAtEnd.map(u => u.username)
  assert(!usernames.includes(illegal_user.username))


  })

  test('exercise 4-16 password.len < 3',async()=>{
    const usersAtStart = await helper.usersInDb()
  
    const illegal_user = {
      username: "1111",
      name:"test",
      password:"1"
    }
  
    await api.post('/api/users')
    .send(illegal_user)
    .expect(400)
  
    const usersAtEnd = await helper.usersInDb()
    assert.strictEqual(usersAtEnd.length, usersAtStart.length)
  
    const usernames = usersAtEnd.map(u => u.username)
    assert(!usernames.includes(illegal_user.username))
  
  
    })

    test('exercise 4-16 username.len < 3 and password.len < 3',async()=>{
      const usersAtStart = await helper.usersInDb()
    
      const illegal_user = {
        username: "1",
        name:"test",
        password:"1"
      }
    
      await api.post('/api/users')
      .send(illegal_user)
      .expect(400)
    
      const usersAtEnd = await helper.usersInDb()
      assert.strictEqual(usersAtEnd.length, usersAtStart.length)
    
      const usernames = usersAtEnd.map(u => u.username)
      assert(!usernames.includes(illegal_user.username))
    
    
      })


      // test('exercise 4-17',async()=>{
      //   const usersAtStart = await helper.usersInDb()
      //   const select_root = usersAtStart[0]

      //   const new_blog = {
      //     title: '123123',
      //     author: 'ewrwer',
      //     url: '111111111111111111',
      //     likes: 8,
      //     userId: select_root.id
      // }

      // const response = await api.post('/api/blogs')
      // .send(new_blog)
      // .expect(201)
      // .expect('Content-Type', /application\/json/)






// })
})

describe("exercise 23 revised post blogs", ()=>{

  test('revised post blog',async()=>{

    const name_pass = {
      username:"root",
      password: "sekret"
    }

    const response = await api.post('/api/login')
    .send(name_pass)
    .expect(200)
    .expect('Content-Type', /application\/json/)

    const token = "Bearer " + response.body.token

    console.log(token)

    const new_blog = {
      title: "one world one dream",
      author:"liu huan",
      url:"www.olympics.com",
      likes:10086
    }

    const res2 = await api.post('/api/blogs')
      .send(new_blog)
      .set({Authorization: token})
      .expect(201)
      .expect('Content-Type', /application\/json/)
    
  const current_content = await helper.blogsInDb()
  assert.strictEqual(current_content.length,helper.initialBlogs.length+1)

  const current_total_titles = current_content.map((blog)=>blog.title)
  assert(current_total_titles.includes(new_blog.title))

  })

})






after(async () => {
  await mongoose.connection.close()
})