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
    const data = await response.text()
    const countriesData = JSON.parse(data.slice(data.indexOf('[')))

    const countryCard = countriesData.map(country => (
      <div className="countryCard" key={country.name}>
        <img className="countryCard__flag" src={country.flag} alt={`country-flag-${country.name}`} />
        <span className="countryCard__name">{country.name}</span>
        <span className="countryCard__capital">{country.capital}</span>
        <span className="countryCard__languages">{country.languages}</span>
        <span className="countryCard__population">{country.population}</span>
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