import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CountryDetailsPage(props) {

    return (
        <header>
            <h1>Country Details</h1>
            <p>Name: {countryDetails.name.common}</p>
            <p>Region: {countryDetails.region}</p>
        </header>
    )
}

export default CountryDetailsPage;


