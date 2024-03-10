import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

const Countries = () =>{
    const [countries , setCountries] = useState([]);
    const [visitedCountries , setVisitedCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);

    const handleVisitedCountry = country =>{
        console.log('visited to that country');
        console.log(country);
    }
    return(
        // <h3>Returned something</h3>
        
        <div className="">
            <h3>Countries : {countries.length}</h3>
            <div>
                <h5>Visited Countries</h5>
                <ul></ul>
            </div>
            <div className="condition">
            {
                countries.map(country => <Country country ={country}
                     key={country.cca3}
                     handleVisitedCountry ={handleVisitedCountry}
                     ></Country>)

            }
            </div>
        </div>
    )
}

export default Countries;