import { useEffect, useState } from "react"
import axios from "axios"


/* Filter component to filter the list of persons */
const Filter = ({ filterText, handleFilterTextChange }) => {
  return (
    <div className='filterInput'>
      <label>Filter shown with:</label>
      <input value={filterText} onChange={handleFilterTextChange} placeholder="Country's name" />
    </div>
  )
}

/* Component to display a single country */
const Country = ({ country }) => {
  const [weather, setWeather] = useState(null);
  const api_key = import.meta.env.VITE_SOME_KEY

  useEffect(() => {
    if (!country.capital) return
      const capital = country.capital[0];
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`)
        .then(response => {
          setWeather(response.data);
        })
        .catch(error => {
          console.error("Failed to fetch weather data", error);
        });
      }, [country, api_key]);

  return (
    <div className='countryCard'>
      <h3>{country.name.common}</h3>
      <p>Capital: {country.capital?.[0]}</p>
      <p>Area: {country.area} km²</p>
      <p>Population: {country.population}</p>
      <p>Languages: {Object.values(country.languages).join(', ')}</p>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="150" />

      {weather && (
        <div className="weatherInfo">
          <h4>Weather in {country.capital[0]}</h4>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Wind: {weather.wind.speed} m/s</p>
          <img 
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
            alt={weather.weather[0].description} 
            title={weather.weather[0].description} 
          />
        </div>
      )}
    </div>
  )
}

/* Component to display the list of countries */
const CountriesList = ({ countries, shownCountry, handleShowCountry }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  }
  if (countries.length === 0) {
    return <p>No matches found</p>
  }
  if (countries.length === 1) {
    return (
      <div className='countriesList'>
        {countries.map((country) => (
          <Country key={country.cca3} country={country} />))}
      </div>
  )}
  return (
    <ul className='countriesList'>
      {countries.map((country) => (
        <li key={country.cca3}>{country.name.common} 
          <button onClick={() => handleShowCountry(
            shownCountry?.cca3 === country.cca3 ? null : country)}>
            {shownCountry?.cca3 === country.cca3 ? "Hide" : "Show detail"}
          </button>
          {shownCountry?.cca3 === country.cca3 && <Country country={country} />}
        </li>
      ))}
    </ul>
  )
  
  
}


const App = () => {
  const [countries, setCountries] = useState([]); // all countries (obtained from API)
  const [filterText, setFilterText] = useState('');// текст з input
  const [shownCountry, setShownCountry] = useState(null); // country to show in detail

  /* useEffect to load initial data from the server */
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all?fields=name,flags,area,languages,population,region,capital,cca3')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error("Failed to fetch initial data from server", error);
      });
  }, []);

  /* Function to handle filter text change */
  const handleFilterTextChange = (event) => {
    setFilterText(event.target.value);
  };

  const handleShowCountry = (country) => {
    setShownCountry(country);
  }

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(filterText.trim().toLowerCase())
  );

    return (
    <>
      <h2>Data of Countries</h2>
      <Filter filterText={filterText} handleFilterTextChange={handleFilterTextChange} />
      {filterText && <CountriesList 
          countries={filteredCountries} 
          handleShowCountry={handleShowCountry} 
          shownCountry={shownCountry}/>
      } 
      
    </>
  )
}


export default App
