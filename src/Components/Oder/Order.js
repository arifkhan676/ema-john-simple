import React, { useEffect, useState } from 'react'
import Country from './Country';

const Order = () => {

    const [country, setCountry] = useState([]);
    const [totalPop, setTotoalP] = useState([])
    console.log(totalPop);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])

    const addCountry = (num) => {
        const popNum = [...totalPop, num]
        setTotoalP(popNum);
    }

    const countryName = country.map(nation =>
        <Country name={nation}
            handleClick={addCountry}
            totalPopulation={totalPop}
        />
    )

    return (

        <div>

            {countryName}
        </div>
    )
}

export default Order
