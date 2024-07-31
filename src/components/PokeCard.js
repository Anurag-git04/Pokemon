import axios from 'axios';
import React, { useEffect } from 'react'
import Display from './Display';

const PokeCard = ({data}) => {

  return (
    <li className="pokemon-card">
        {/* <figure>
            <img 
              src={data.sprites.front_default} 
              alt={data.name} 
              className="pokemon-image"
            />
        </figure> */}
        <h1 className='pokemon-name'>{data.name}</h1>
    </li>
  )
}

export default PokeCard