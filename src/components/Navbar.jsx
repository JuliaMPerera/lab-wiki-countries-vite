import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
        <header>
            <h1>WikiCountries</h1>
        </header>
        <NavLink to="/">Home</NavLink> |
      </nav>
    )
}

export default Navbar;
