import { useState } from "react";
import './App.css'
const Country = ({country , handleVisitedCountry}) =>{
    const {name , flags , population , area} = country;
    const [visited ,setVisited] = useState(false);

    const visitCountry = () =>{
        setVisited(!visited);
    }
    return(
        <div className="">
             <div className={`country ${visited && 'visited'}`}>
                <h3>Name : {name?.common}</h3>
                <img src={flags.png} alt="" />
                <h3>Population : {population}</h3>
                <h3>Area : {area}</h3>
                <button style={{padding:"10px"}}>mark as visited</button>
                <br/>
                <button onClick={visitCountry} style={{padding:"10px"}}>{visited ? "visited" : "visit"}</button>
                {visited ? "I have visited that country " : "i want to visit that country"}
             </div>
        </div>
    )
}

export default Country;