const Persons = ({ persons, searchValue, handleDelete }) => {
  const personsToShow = searchValue
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(searchValue.toLowerCase()),
      )
    : persons;

  return (
    <>
      <ul>
        {personsToShow.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}{" "}
            <button onClick={() => handleDelete(person.id)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Persons;
