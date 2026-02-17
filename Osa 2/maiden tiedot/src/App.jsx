import { useState, useEffect } from "react";
import axios from "axios";

const CountryDetails = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital[0]}</p>
      <p>Area: {country.area} km²</p>
      <h3>Languages:</h3>
      <ul>
        {Object.values(country.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} width="200" />
    </div>
  );
};

const App = () => {
  const [value, setValue] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (value) {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/all/`)
        .then((response) => {
          const filtered = response.data.filter(
            (country) =>
              country.name.common.toLowerCase().includes(value.toLowerCase()),
            console.log(response.data),
          );
          setCountries(filtered);
        });
    }
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
    if (!event.target.value) {
      setCountries([]);
    }
  };

  const renderResults = () => {
    if (countries.length > 10) {
      return <p>Too many matches, specify another filter</p>;
    }
    if (countries.length === 0 && value) {
      return <p>No matches found</p>;
    }
    if (countries.length === 1) {
      return <CountryDetails country={countries[0]} />;
    }
    return countries.map((country) => (
      <div key={country.name.common}>{country.name.common}</div>
    ));
  };

  return (
    <div>
      find countries <input value={value} onChange={handleChange} />
      {renderResults()}
    </div>
  );
};

export default App;
