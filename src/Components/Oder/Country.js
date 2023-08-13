import React, { useState } from 'react'

const Country = (props) => {
    const { name, flags, population } = props.name;
    const totalPopulation = props.totalPopulation;

    /* let totalPeople = 0;
     for (let i = 0; i < totalPopulation.length; i++) {
         const sum = totalPopulation[i];
         totalPeople = sum + totalPeople;
     }
 */
    const totalPeople = totalPopulation.reduce((total, people) => total + people, 0)

    console.log(totalPeople);

    return (
        <div className="detail" style={{ textAlign: 'center', border: ' 1px solid' }}  >
            <p>Total Population: {totalPeople} and Card added : {totalPopulation.length} </p>
            <h2>  {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>populations: {population}</p>
            <button onClick={() => props.handleClick(population)} > add country </button>
        </div>
    )
}

export default Country
