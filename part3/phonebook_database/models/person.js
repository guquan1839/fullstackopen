// const mongoose = require('mongoose')

// mongoose.set('strictQuery', false)


// const url = process.env.MONGODB_URI


// console.log('connecting to', url)

// mongoose.connect(url)

//   .then(result => {
//     console.log('connected to MongoDB')
//   })
//   .catch(error => {
//     console.log('error connecting to MongoDB:', error.message)
//   })

// const noteSchema = new mongoose.Schema({
//   content: String,
//   important: Boolean,
// })

// noteSchema.set('toJSON', {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString()
//     delete returnedObject._id
//     delete returnedObject.__v
//   }
// })


// module.exports = mongoose.model('Note', noteSchema)


//exercise 13 exercise 13 exercise 13 exercise 13

const mongoose = require('mongoose')

mongoose.set('strictQuery',false)

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url).then(result => {
  console.log('connected to mongoDB')
})
  .catch(error => {
    console.log('error connecting to mongodb:', error.message)
  })

const person_Schema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true
  },
  number: {
    type: String,
    validate: {
      validator: v => {
        return  /^\d{2,3}-\d+$/.test(v)
      }
    },
    minLength: 8,
    required: true
  }
})

person_Schema.set('toJSON',{
  transform:(document,returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject._v

  }

})

module.exports = mongoose.model('Person', person_Schema)

