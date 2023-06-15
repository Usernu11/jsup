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

const app = (
    <div className="container">
        {title}
        {interfaceEl}
    </div>
)

ReactDOM.render(app, getRootEl)