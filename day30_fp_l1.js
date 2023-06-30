// Variables
const getRootEl = document.querySelector('.root')

// JSX elements
const title = (
  <h1>World Countries Data</h1>
)

const interfaceEl = (
  <div>
    <input type="text" placeholder="Search country..." />

    <div className="buttuns">
      <button className="buttons__name">Name</button>
      <button className="buttons__capital">Capital</button>
      <button className="buttons__population">Population</button>
      <button className="buttons__stat" />
    </div>
  </div>
)

const fetchData = async () => {
  try {
    const response = await fetch('https://raw.githubusercontent.com/Asabeneh/30-Days-Of-JavaScript/master/data/countries_data.js')
    const data = await response.text()    // long string of an array
    const countriesData = JSON.parse(data.slice(data.indexOf('[')))   // array of objects (remove assigning 'const' before - using slice method, for reading array)

    const countryCard = countriesData.map(country => (
      <div className="countryCard" key={country.name}>
        <img className="countryCard__flag" src={country.flag} alt={`country-flag-${country.name}`} />
        <span className="countryCard__name">{country.name}</span>
        <div className="countryCard__info">
          <span className="countryCard__capital">
            <b>Capital:</b> {country.capital}
          </span>

          <span className="countryCard__languages">
            <b>Languages:</b> {country.languages.toLocaleString()}
          </span>

          <span className="countryCard__population">
            <b>Population:</b> {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
             {/* // regex: search numbers to make a start point, after the point - find 3 numbers in a row, and there is no numbers after numbers group */}
          </span>
        </div>
      </div>
    ))

    const countries = (
      <div className="countries">{countryCard}</div>
    )

    const app = (
      <div className="container">
        {title}
        {interfaceEl}
        {countries}
      </div>
    )

    ReactDOM.render(app, getRootEl)
  } catch (error) {
    console.log('Error fetching data:', error)
  }
}

fetchData()
console.warn(`🔴 If some flags didn't load - please try to disable your AdBlocker on this site.`)