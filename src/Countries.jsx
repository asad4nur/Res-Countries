import { useEffect } from "react";
import { useState } from "react"
import Country from "./Country";
import "./Countries.css"

export default function Countries() {
    const [countries, serCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
    const [countryFlags, setCountryFlags] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => serCountries(data))
    }, [])

    const handleCountryFlags = flag => {
        const newCountryFlags = [...countryFlags, flag];
        setCountryFlags(newCountryFlags);
    }
    const handleVisitedCountry = country => {
        const newVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountry)
    }

    return (
        <div>
            <h3>Rest Countries</h3>
            <hr />
            <div>
                <h4>Visited Country: {visitedCountry.length} </h4>
                <ul>
                    {
                        visitedCountry.map(country => <li>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
               {
                countryFlags.map(flag => <img src={flag}></img>)
               }
            </div>
            <div className="countries-container">
                {
                    countries.map(country => <Country country={country} key={country.cca3} handleVisitedCountry={handleVisitedCountry} handleCountryFlags={handleCountryFlags}></Country>)
                }
            </div>
        </div>
    )
}