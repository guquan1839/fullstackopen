require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());
app.use(express.static("build"));
var morgan = require("morgan");

morgan.token("data", (request, response) => {
  const body = request.body;

  const per = {
    name: body.name,
    number: body.number,
  };

  return JSON.stringify(per) || "-";
});

morgan.format(
  "exercise",
  ":method :url :status :res[content-length] - :response-time ms :data"
);

app.use(morgan("exercise"));

const Person = require("./models/person");

app.get("/api/persons", (request, response, next) => {
  Person.find({})
    .then((persons) => {
      response.json(persons);
    })
    .catch((error) => next(error));
});

app.get("/api/persons/:id", (request, response, next) => {
  Person.findById(request.params.id)
    .then((person) => {
      response.json(person);
    })
    .catch((error) => next(error));
});

app.post("/api/persons", (request, response, next) => {
  const body = request.body;
  // if(body.name === undefined | body.number === undefined){
  //   return response.status(400).json({ error: 'content missing' })
  // }

  const person = new Person({
    name: body.name.trim(),
    number: body.number.trim(),
  });

  person
    .save()
    .then((save_person) => {
      response.json(save_person);
    })
    .catch((error) => next(error));
});

app.delete("/api/persons/:id", (request, response, next) => {
  console.log(request.params.id);
  Person.findByIdAndDelete(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

app.put("/api/persons/:id", (request, response, next) => {
  const body = request.body;

  const person = {
    name: body.name.trim(),
    number: body.number.trim(),
  };
  Person.findByIdAndUpdate(request.params.id, person, {
    new: true,
    runValidators: true,
    context: "query",
  })
    .then((updated_person) => {
      response.json(updated_person);
    })
    .catch((error) => next(error));
});

app.get("/info", (request, response) => {
  Person.estimatedDocumentCount({})
    .then((count) => {
      response.send(
        `<p>Phonebook has info for ${count} people</p><p>${new Date()}</p>`
      );
    })
    .catch((err) => {
      console.error(err);
      response.status(500).send("Error occurred while fetching the count");
    });
});

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

app.use(errorHandler);

const Port = process.env.PORT;

app.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});
