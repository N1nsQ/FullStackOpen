const Persons = ({ persons, searchValue }) => {
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
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Persons;
