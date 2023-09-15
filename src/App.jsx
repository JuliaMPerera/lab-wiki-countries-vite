import "./App.css";
import Navbar from "./components/Navbar";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';


function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        setCountries(response.data);
        console.log(response.data);
      })
      .catch(e => console.log(e))
  }, []);

  return (
    <>

      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage countries={countries}/>} />
        <Route path='/countries/alpha3Code' element={<CountryDetailsPage />} />
      </Routes>

    </>
  )
}

export default App;
