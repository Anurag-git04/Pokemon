import React, { useState, useEffect } from 'react'
import Header from './Header'
import Search from './Search'
import PokeCard from './PokeCard'
import axios from 'axios'



const Home = () => {
    const [pokemon, setPokemon] = useState([])
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState(null)
    const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

    const fetchPokemon = async () => {
        setLoading(true)
        try{
            const data = await axios.get(API)

            console.log(data)

            const detailedPokemon = data.results.map(async (curPokemon) => {
                const res = await axios.get
                return data
            })
            // console.log(detailedPokemon);

            const detailedResponse = await Promise.all(detailedPokemon);
            console.log("new")
            console.log(detailedResponse);
            setPokemon(detailedResponse)
            console.log('pokemon')
            console.log(pokemon)
            setLoading(false)
        }catch(error){
            console.log(error);
            setLoading(false);
            setError(error);
        }
    }

    useEffect(() => {
      fetchPokemon();
    }, [])
    
    if (loading){
        return <div>Loading...</div>;
    }

    if(error){
        return <div>Error: {error.message}</div>;
    }

  return (
    <>
        <Header />
        <div className='items-center justify-items-center'>
            <h1>Welcome to the home page</h1>
            <h1>Popular Page</h1>
            <div>
                <ul>
                    <li>one</li>
                </ul>
            </div>
        </div>
    </>
  
  
  )
}

export default Home