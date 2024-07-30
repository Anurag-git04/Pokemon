import axios from 'axios';
import React, { useEffect } from 'react'
import Display from './Display';

const PokeCard = ({name}) => {

   
    // const sample = []

    // for(let i=1;i<=50;i++){
    //     const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    //     sample.push(axios.get(url))
    // }
    // Promise.all(sample).then((results)=>{
    //     const pokemon = results.map((result)=> ({
    //         name:result.name,
    //         image:result.sprites['front_default'],
    //         type: result.types.map((type)=> type.type.name).join(', '),
    //         id: result.id
    //     }));
    //     console.log("h")
    //     console.log(pokemon)
    // })

    // console.log(sample)
    useEffect(() => {
        const promises = [];
        for (let i = 1; i <= 150; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            promises.push(fetch(url).then((res) => res.json()));
        }
        Promise.all(promises).then((results) => {
            const pokemon = results.map((result) => ({
                name: result.name,
                image: result.sprites['front_default'],
                type: result.types.map((type) => type.type.name).join(', '),
                id: result.id
            }));
            console.log(pokemon)
            <Display pokemon={pokemon}/>
        });
      
    }, [])

    // console.log(poken)
  return (
    <div>
        <div>
            {/* <img src={} alt="" /> */}
            anurag
        </div>
    </div>
  )
}

export default PokeCard