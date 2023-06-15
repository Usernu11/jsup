// Variables
const getRootEl = document.querySelector('.root')

// JSX elements
const title = (
    <h1>World Countries Data</h1>
)

const interfaceEl = (
    <div>
        <input type="text" placeholder="Search country. . ."></input>

        <div className="buttuns">
            <button className="buttons__name">Name</button>
            <button className="buttons__capital">Capital</button>
            <button className="buttons__population">Population</button>
            <button className="buttons__stat"></button>
        </div>
    </div>
)

const countries = (
    <div className="countries">{countryCard}</div>
)

const stat = (
    <div className="stat">
        <div className="buttons">
            <button className="buttons__pop"></button>
            <button className="buttons__langs"></button>
        </div>
    </div>
)

const countryCard = (
    countriesObjects.map(country => {
        <div className="countryCard" key={country.name}>
            <img className="countryCard__flag" src={country.flag} alt={`country-flag-${country.name}`}></img>
            <span className="countryCard__name">{country.name}</span>
            <span className="countryCard__capital">{country.capital}</span>
            <span className="countryCard__languages">{country.languages}</span>
            <span className="countryCard__population">{country.population}</span>
        </div>
    })
)

const app = (
    <div className="container">
        {title}
        {interfaceEl}
        {countries}
        {stat}
    </div>
)

ReactDOM.render(app, getRootEl)