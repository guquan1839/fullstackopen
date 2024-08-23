const mongoose = require('mongoose')

if(process.argv.length<3){

  console.log('give password as argument')
  process.exit(1)
}




const password= process.argv[2]

const url = `mongodb+srv://1029241313:${password}@cluster0.f1zim.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const person_schema = new mongoose.Schema({
  name: String,
  number: String,
})
const Person = mongoose.model('Person', person_schema)


if(process.argv.length === 3){
  Person.find({}).then(result => {
    console.log('PhoneBook:')
    result.forEach(pe => {

      // const na = pe.name
      // const nu = pe.number

      console.log(pe.name,'   ',pe.number)
    })

    mongoose.connection.close()
  })
}
else{

  const new_name =   process.argv[3]
  const new_number = process.argv[4]


  const person = new Person({
    name: new_name,
    number: new_number
  }
  )

  person.save().then(result => {
    console.log('person information saved')
    console.log(`added ${new_name} number ${new_number} to phonebook`)
    mongoose.connection.close()

  }
  )
}