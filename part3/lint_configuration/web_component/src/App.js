import { useState, useEffect } from "react";
import Display from "./components/Display.js";
import Display_2 from "./components/Display_2.js";
import person_function1 from "./services/person_function1.js";

const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className="error">{message}</div>;
};

const Notification_mes = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className="mes">{message}</div>;
};

const del_content = (id) => {
  return person_function1.del(id);
};

const Filter = ({ persons, search_content, set_new_search }) => {
  const search_everything = (event) => {
    set_new_search(event.target.value);
  };

  const content = persons.filter((person) =>
    person.name.toLowerCase().includes(search_content.toLowerCase())
  );

  const empty_content = [];

  const final_content = search_content === "" ? empty_content : content;

  return (
    <div>
      <div>
        Search: <input onChange={search_everything} />
      </div>

      {final_content.map((person, id) => (
        <Display_2 key={id} name={person.name} number={person.number} />
      ))}
    </div>
  );
};

const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  new_number,
  set_new_number,
  set_error_message,
  set_good_message,
}) => {
  const sub_eve = (event) => {
    event.preventDefault();

    const middle_array = persons.map((person) => Object.values(person));
    const copy_name = newName.trim();

    for (let i = 0; i < persons.length; i++) {
      if (middle_array[i][0] === copy_name) {
        console.log("1111", middle_array[i][0]);
        console.log(copy_name);
        const id = `${persons[i].id}`;

        console.log(id);

        if (
          window.confirm(
            `${copy_name} is already added to phonebook,replace the old number with a new one?`
          )
        ) {
          const per = persons.find((p) => p.id === id);

          const change_value = {
            ...per,
            number: new_number,
          };

          person_function1
            .update(id, change_value)
            .then((return_person) => {
              setPersons(
                persons.map((person) =>
                  person.id !== id ? person : return_person
                )
              );
              setNewName(" ");
              set_new_number(" ");
            })
            .then((mes) => {
              set_good_message("we change the numebr successfully !");

              setTimeout(
                () => {
                  set_good_message(null);
                },

                5000
              );
            })
            .catch((error) => {
              set_error_message(error.response.data.error);

              setTimeout(
                () => {
                  set_error_message(null);
                },

                5000
              );
            });

          return 0;
        } else {
          setNewName(" ");
          set_new_number(" ");
          return 0;
        }
      }
    }

    const new_value = {
      id: `${Number(persons[persons.length - 1].id) + 1}`,
      name: newName,
      number: new_number,
    };

    person_function1
      .create(new_value)
      .then((return_person) => {
        setPersons(persons.concat(return_person));
        setNewName(" ");
        set_new_number(" ");
      })
      .then((mes) => {
        set_good_message("we add the new information successfully !");

        setTimeout(
          () => {
            set_good_message(null);
          },

          5000
        );
      })
      .catch((error) => {
        set_error_message(error.response.data.error);
        setTimeout(
          () => {
            set_error_message(null);
          },

          5000
        );
      });
  };

  const change_holder = (event) => {
    console.log("1111", event.target.value);

    setNewName(event.target.value);
  };

  const change_number = (event) => {
    console.log(event.target.value);
    set_new_number(event.target.value);
  };

  return (
    <div>
      <form onSubmit={sub_eve}>
        <div>
          name: <input onChange={change_holder} />
        </div>

        <div>
          number: <input onChange={change_number} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Helllas", number: "0352-5103510", id: 1 },
    { name: "LI Hua", number: "+86-13992381274", id: 2 },
  ]);

  const [newName, setNewName] = useState("");

  const [new_number, set_new_number] = useState("");

  const [search_content, set_new_search] = useState("");

  const [error_message, set_error_message] = useState(null);

  const [good_message, set_good_message] = useState(null);

  useEffect(() => {
    person_function1
      .get_all()
      .then((initial_person) => {
        setPersons(initial_person);
      })
      .catch((error) => {
        set_error_message(error.response.data.error);
        setTimeout(
          () => {
            set_error_message(null);
          },

          5000
        );
      });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification_mes message={good_message} />
      <Notification message={error_message} />

      <p>Note: please enter a name:</p>

      <Filter
        persons={persons}
        search_content={search_content}
        set_new_search={set_new_search}
      />

      <h2>Add a New:</h2>

      <div>
        <PersonForm
          persons={persons}
          setPersons={setPersons}
          newName={newName}
          setNewName={setNewName}
          new_number={new_number}
          set_new_number={set_new_number}
          search_content={search_content}
          set_error_message={set_error_message}
          set_good_message={set_good_message}
        />
      </div>

      <h2>Total person:</h2>
      <ul>
        {persons.map((person) => (
          <Display
            name={person.name}
            number={person.number}
            key={person.id}
            del={() => del_content(person.id)}
          />
        ))}
      </ul>
    </div>
  );
};
export default App;
