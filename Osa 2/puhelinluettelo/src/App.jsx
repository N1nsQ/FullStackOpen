import { useEffect, useState } from "react";
import SearcrhBox from "./components/SearchBox";
import AddNew from "./components/AddNew";
import Persons from "./Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => setPersons(response.data));
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
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons(persons.concat(addPerson));
    setNewName("");
    setNewNumber("");
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
      <Persons persons={persons} searchValue={searchValue} />
    </div>
  );
};

export default App;
