import React, { useState, useEffect } from 'react'
import Header from './Header'
import Search from './Search'
import PokeCard from './PokeCard'
import axios from 'axios'



const Home = () => {
    const pop = ['bulbasaur','squirtle','pikachu','charizard']
    const [pokemon, setPokemon] = useState([])
    const popular = []
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState(null)
    // const [dummy, setdummy] = useState(")
    const API = "https://pokeapi.co/api/v2/pokemon/";

    const fetchPokemon = async () => {
        setLoading(true)
        try{
            // const data = await axios.get(API)
            // console.log("data")
            // console.log(data)
            console.log('first')
            const a = await axios.get(`https://pokeapi.co/api/v2/pokemon/1/`);
            console.log(a)
            console.log('result')
            const d = a.data.id
            const define = [a.data.id , a.data.name , a.data.sprites.front_default]

            setPokemon( define)

            // const detailedPokemon = data.data.results.map(async (curPokemon) => {
            //     console.log(curPokemon.url)
            //     const res = await axios.get(curPokemon.url);
            //     return res
            // })
            // console.log("Detail")
            // console.log(detailedPokemon);

            // const detailedResponse = await Promise.all(detailedPokemon);
            // console.log("new")
            // console.log(detailedResponse);
            // // setPokemon(detailedResponse)
            // console.log('pokemon')
            // // console.log(pokemon)
            // const mydata = pop.map( async (po)=>{
            //     const a = axios(`https://pokeapi.co/api/v2/pokemon/${po}`)
            //     const obj = {}
            //     obj.name = po.data.name 
            //     obj.img= po.data.sprites.front_default
            //     popular.push(obj)
            // })
            // console.log(popular)

            pop.map(async (newItem) => {
                console.log(newItem);
                try {
                  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${newItem}`);
                  const data = response.data;
                  console.log(data);
                  console.log(data.name + " : " + data.sprites.front_default)
                  // Do something with the data here...
                } catch (error) {
                  console.error(error);
                }
              });
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

    // if(error){
    //     return <div>Error: {error.message}</div>;
    // }

  return (
    <>
        <Header />
        <div className='items-center justify-items-center'>
            <h1>Welcome to the home page</h1>
            <h1>Popular Page</h1>
            <div>
                {/* <ul>
                    <li>one</li>
                </ul> */}
                <h1>{pokemon[0]} : {pokemon[1]}</h1>
               
                <img src={pokemon[2]} alt="pokemon" />

            </div>
        </div>
    </>
  
  
  )
}

export default Home