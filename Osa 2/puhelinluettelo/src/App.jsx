import { useEffect, useState } from "react";
import SearcrhBox from "./components/SearchBox";
import AddNew from "./components/AddNew";
import Persons from "./Persons";
import personServices from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    personServices.getAll().then((initialContent) => {
      setPersons(initialContent);
    });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const addPerson = { name: newName, number: newNumber };

    const isDuplicate = persons.some((person) => person.name === newName);

    if (isDuplicate) {
      const findPerson = persons.find((person) => person.name === newName);
      const updatedPerson = { ...findPerson, number: newNumber };
      if (
        window.confirm(
          `${newName} is already added to phonebook. Do you want to replace the old number with a new one?`,
        )
      ) {
        personServices
          .update(findPerson.id, updatedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id === findPerson.id ? returnedPerson : person,
              ),
            );
          });
      }
      setNewName("");
      setNewNumber("");
      return;
    }

    personServices.create(addPerson).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
    });
  };

  const deletePerson = (id) => {
    const findPerson = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${findPerson.name}?`)) {
      personServices.remove(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <SearcrhBox value={searchValue} onChange={handleSearchChange} />
      </div>
      <h2>Add new</h2>
      <AddNew
        addPerson={addPerson}
        name={newName}
        number={newNumber}
        nameChange={handleNameChange}
        numberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        searchValue={searchValue}
        handleDelete={deletePerson}
      />
    </div>
  );
};

export default App;
