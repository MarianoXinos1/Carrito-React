import Filters from './Filters.jsx'


function Header ({setFilters}) {
    return (
        <header>
            <h1>React Shop</h1>
            <Filters setFilters = {setFilters} />    {/* onCHange es el nombre de la prop que viene de App.jsx como setFilters */}
        </header>
    )
}

export default Header