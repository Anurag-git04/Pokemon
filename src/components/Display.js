import React from 'react'

const Display = ({pokemon}) => {
  return (
    <div>
        <img src={pokemon.image}  />
        <h2>{pokemon.name}</h2>
        <p>{pokemon.type}</p>
    </div>
  )
}

export default Display