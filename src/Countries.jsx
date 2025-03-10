import { useEffect } from "react";
import { useState } from "react"
import Country from "./Country";

export default function Countries () {
    const [countries, serCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => serCountries(data))
    },[])
    console.log(countries[0]);
    
    return (
        <div>
            <h3>Rest Countries</h3>
            <hr />
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    )
}