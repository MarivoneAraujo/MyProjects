import React, {useEffect, useState} from 'react'
import axios from 'axios'
import GlobalStateContext from './GlobalStateContext'
import PokeCard from '../Components/PokeCard'


const GlobalState = (props) =>{
    const [pokemonNames, setPokemonNames] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])    

// console.log(pokemons)

useEffect (() =>{
  getPokemonNames ()
}, [])

useEffect(() =>{

  const totalList = []

  pokemonNames.forEach((item) =>{
    axios.get(item.url)
    .then((res) => {
      totalList.push(res.data)
      
      if(totalList.length === 20){

        const orderdList = totalList.sort ((a,b) =>{
          return a.id - b.id
        })
        setPokemons(orderdList)
        
      }
    })
    .catch((err) => 
      console.log(err.message))
      
    })

}, [pokemonNames])


const getPokemonNames = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        setPokemonNames(res.data.results)
      })
      .catch((err) => {
        console.log(err)
        window.alert("Erro get")
      })
    };

    const data = {pokemons, setPokemons, pokedex, setPokedex}
     

    return (
        <GlobalStateContext.Provider value ={data}>
          {props.children}
        </GlobalStateContext.Provider>
      );
    };
    
    export default GlobalState;

