import React from 'react'
import Header from './Header'
import Search from './Search'
import PokeCard from './PokeCard'

const Home = () => {
    const popular = ['pikachu','bulbasaur','squirtle','charizard'];
  return (
    <>
        <Header />
        <div className='items-center justify-items-center'>
            <h1>Welcome to the home page</h1>
            <h1>Popular Page</h1>
            <div>
                {
                    popular.map((pokemon)=>{ 
                        return <PokeCard key={pokemon} name={pokemon} />
                    })
                }
            </div>
        </div>
    </>
  
  
  )
}

export default Home