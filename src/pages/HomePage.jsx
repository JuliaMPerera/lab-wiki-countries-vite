import "../App.css";
import { Link } from 'react-router-dom';
import CountryDetails from './CountryDetailsPage';


function HomePage({ countries }) {
    return (
        <>
            <header>
                <h1>WikiCountries: Your Guide to the World</h1>
            </header>
            <ul>
                {
                    countries.map((country) =>
                        <li key={country.alpha3Code}>
                            <br />
                            <Link to={"/" + country.alpha3Code}>{country.name.common}</Link>
                            <br />
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default HomePage;


{/* <NavLink to={`/${country._id}`}>Country Details</NavLink> | */}



