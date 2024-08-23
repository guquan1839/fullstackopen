// console.log("hello world")

// //下面我们将创建一个服务器
// const http = require('http')


// const app = http.createServer(


// (request,response) =>{

//     response.writeHead(200, {   'Content-Type' : 'text/plain'  })
//     response.end('Hello world')


// }
// )


// const PORT = 3001
// app.listen (PORT)
// console.log(`Server running on port ${PORT}`)


// const http = require('http')


// let notes = [
//   {
//     id: 1,
//     content: "HTML is easy",
//     date: "2022-05-30T17:30:31.098Z",
//     important: true
//   },
//   {
//     id: 2,
//     content: "Browser can execute only Javascript",
//     date: "2022-05-30T18:39:34.091Z",
//     important: false
//   },
//   {
//     id: 3,
//     content: "GET and POST are the most important methods of HTTP protocol",
//     date: "2022-05-30T19:20:14.298Z",
//     important: true
//   }
// ]
// const app = http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'application/json' })
//   response.end(JSON.stringify(notes))
//   //notes
// })

// const PORT = 3001
// app.listen(PORT)
// console.log(`Server running on port ${PORT}`)




//Web and express

// const express = require('express')

// const app = express()


// app.use(express.json())

// let notes = [
//   {
//     id: 1,
//     content: "HTML is easy",
//     date: "2022-05-30T17:30:31.098Z",
//     important: true
//   },
//   {
//     id: 2,
//     content: "Browser can execute only Javascript",
//     date: "2022-05-30T18:39:34.091Z",
//     important: false
//   },
//   {
//     id: 3,
//     content: "GET and POST are the most important methods of HTTP protocol",
//     date: "2022-05-30T19:20:14.298Z",
//     important: true
//   }
// ]


// app.get('/', (request,response) => {
//     response.send('<h1>Hello World </h1>')
//     }
// )
// //这个事件处理函数有两个参数。第一个request参数包含http请求的全部信息。第二个response参数定义如何对请求进行响应

// app.get('/api/notes',(request,response) =>{
//     response.json(notes)

// })

// app.get('/api/notes/:id',(request,response) =>{

//     const id = Number(request.params.id)
//     const note = notes.find(note => note.id === id)
//     // response.json(note)

//     if(note){//undefined是false
//         response.json(note)
//     }
//     else{
//         response.status(404).end()//status（） 设置状态. end()相应请求
//     }

// })


// //deleting resources
// app.delete('api/notes/:id',(request,response)=>{
//     const id =Number(request.params.id)
//     notes = notes.filter(note=>note.id!==id)

//     response.status(204).end()
// })

// // app.post('api/notes',(request,response) =>{
// //     const note = request.body
// //     console.log(note)
// //     response.json(note)
// // })


// const generate_id = () =>{
//   const max_id = notes.length > 0 ? Math.max(...notes.map(n => n.id)) :0
//   return max_id + 1
// }


// //Math.max返回传递给他的数字的最大值，因为notes.map()是一个数组。所以通过...转化为单个数字



// app.post('/api/notes', (request, response)  =>{
//   const body = request.body

//   if(!body.content){
//     return response.status(400).json(

//       {
//         error:"content missing"
//       }
//     )
//   }

//   const note = {
//     content: body.content,
//     important: body.important || false,
//     date: new Date(),
//     id: generate_id(),
//   }

//   notes = notes.concat(note)
//   response.json(note)






// })


// const Port = 3001
// app.listen(Port, ()=>
// {
//     console.log(`Server running on port ${Port}`)
// }
// )

 
//Exercise 3.1 phonebook backend step 1
//实现一个node应用，从地址http://localhost:3001/api/persons返回一个硬编码的电话簿条目列表

//exercise 3.9
const express = require("express")

const app = express()
app.use(express.json())

var morgan = require("morgan")


const cors = require('cors')
app.use(cors())

app.use(express.static('build'))

morgan.token("data", (request,response)=>{
      const  body  = request.body

      const per ={
        name: body.name,
        number: body.number
      }

      return JSON.stringify(per) || "-"
})


morgan.format('exercise',':method :url :status :res[content-length] - :response-time ms :data')



app.use(morgan('exercise'))





let persons = [
  {
    "id": 1,
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": 2,
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": 3,
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": 4,
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
]


app.get('/api/persons',(request,response) =>{
  response.json(persons)


  }
)

app.get('/info',(request,response)=>{

  const value = persons.length
  const t = new Date()

  response.send(`<p> Phonebook has info for ${value} people </p>   <p> ${t} </p>`)
})



app.get('/api/persons/:id',(request,response) =>{
    const id = Number(request.params.id)

    const person = persons.find(person => person.id === id)


    if(person){
      response.json(person)
    }
    else{
      response.status(400).end()
    }

})


app.delete('/api/persons/:id',(request,response) =>{

    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()

  }

)


// app.post('/api/notes', (request, response)  =>{
//   const body = request.body

//   if(!body.content){
//     return response.status(400).json(

//       {
//         error:"content missing"
//       }
//     )
//   }

//   const note = {
//     content: body.content,
//     important: body.important || false,
//     date: new Date(),
//     id: generate_id(),
//   }

//   notes = notes.concat(note)
//   response.json(note)



app.post('/api/persons',(request,response) =>{

  const body =request.body

  const old_name = persons.find(person => person.name === body.name)
  if(!body.name | !body.number){
    return response.status(400).json(


      {
        error:"content missing"
      }
    )
  }
  else if(old_name){

    return response.status(400).json(
      {
        error:"name must be unique"
      }
    )
  }





  const person = {
    id: Math.floor(Math.random()*10000),
    name :  body.name,
    number: body.number,
  }


  persons = persons.concat(person)
  response.json(person)
})

const Port = 3001
app.listen(Port,()=>{

  console.log(`Server running on port ${Port}`)

})

//morgan是express的默认日志组件！

//下面重点了解Morgan的 自定义日志格式

//首先我们要了解morgan中的两个概念format和token

//format:日志格式，本质是代表日志格式的字符串
//比如::method :url :status :res[content-length] - :response-time ms
//token : format的组成部分，比如前面的 :method :url

//下面分别是自定义日志格式的关键API
//morgan.format(name,format);
//morgan.token(name,fn);


