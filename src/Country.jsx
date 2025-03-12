import { useState } from "react";
import "./Country.css";

export default function Country ({country, handleVisitedCountry, handleCountryFlags}){
    const {name, flags, cca3, population } = country;

    const [visited, setVisited] = useState (false);

    const handleVisited = () => {
        setVisited(!visited);
    }
    
    return(
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3>Country Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <h3>Country Code: {cca3}</h3>
            <h3>Country Population: {population}</h3>
            <button onClick={() => handleCountryFlags(country.flags.png)}>Add Flag</button>
            <button onClick={() => handleVisitedCountry(country)}>Visited Country</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country' : 'I want to visit'}
            
        </div>
    )
}