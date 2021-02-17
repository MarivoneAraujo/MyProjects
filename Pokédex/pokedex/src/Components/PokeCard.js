import react from "react"
import axios from 'axios';
import styled from 'styled-components'
import { useHistory } from "react-router-dom"
import GlobalStateContext from '../global/GlobalStateContext'
import {goToPokeDetails} from '../Routes/Coordinator'
import React, { useContext, useEffect, useState } from 'react'

const PokeCardItem = styled.div`
display: grid;
margin: 10px;
background-color: white;
color: black;
text-align: center;
justify-content: center;
box-shadow: 1px 1px 6px black;
border-radius: 10px;
margin-top: 30px;
:hover{
  transform: scale(1.1)
}

@media (min-width:414px) and (max-width: 800px) {
 
};

`
const PokeName = styled.h2`
text-transform: capitalize; 
font-family: 'Press Start 2P', cursive;
font-size: 15px;
color: black;
text-shadow: 1px 1px 1px yellow; 
margin-bottom: 20px;

`
const PokeImg = styled.img`
width: 70%;
height: 70%;
align-self: center;
margin-left: 35px;
border: 1px solid black;
box-shadow: 1px 1px 1px black;
margin-bottom: 15px;


@media (min-width:400px) and (max-width: 800px) {
width: 50%;
height: 50%;
margin-bottom: 20px;
margin-left: 45px;

};
`
const ButtonAdd = styled.button`
background-color: yellow;
color: black;
border: none;
margin: 6px;
padding: 4px;
font-family:'Press Start 2P', cursive;
font-size: 10px;
padding: 5px 10px;
box-shadow: 1px 1px 1px gray;
:hover{
  cursor: pointer;
}
`
const ButtonDetail = styled.button`
background-color: darkgreen;
color: white;
border: none;
padding: 4px;
font-family:'Press Start 2P', cursive;
font-size: 10px;
padding: 5px 10px;
box-shadow: 1px 1px 1px gray;
:hover{
  cursor: pointer;
}

@media (min-width:414px) and (max-width: 800px) {

  margin-bottom: 10px;
 
};

`

function Pokecard ({pokemon, isPokedex}) {
  const {pokemons, setPokemons, pokedex, setPokedex} = useContext(GlobalStateContext)

  const history = useHistory()

  const addToPokedex =() =>{
    const pokeIndex = pokemons.findIndex((item) => item.name === pokemon.name)    
      const newPokemonsList = [...pokemons]
      newPokemonsList.splice(pokeIndex, 1)
      const orderedPokemons = newPokemonsList.sort((a,b) =>{
        return a.id = b.id
      })  
      const newPokedexList = [...pokedex, pokemon]
      const orderedPokedex = newPokedexList.sort((a,b) =>{
        return a.id = b.id
      })
      setPokedex (orderedPokedex)
      setPokemons (orderedPokemons)
  }
  
  const removeFromPokedex =() =>{
    const pokeIndex = pokedex.findIndex((item) => item.name === pokemon.name)
      const newPokedexList = [...pokedex]
      newPokedexList.splice(pokeIndex, 1)
      const orderedPokedex = newPokedexList.sort((a,b) =>{
        return a.id = b.id
      })
      const newPokemonsList = [...pokemons, pokemon]
      const orderedPokemons = newPokemonsList.sort((a,b) =>{
        return a.id = b.id
      })
      setPokedex (orderedPokedex)
      setPokemons (orderedPokemons)
  }
  
  return (
    <PokeCardItem>
        <PokeName> {pokemon.name} </PokeName>
        <PokeImg 
        src={ pokemon.sprites && pokemon.sprites.front_default}
        alt={pokemon.name}
        />
       <div>
            <ButtonAdd onClick={isPokedex? removeFromPokedex : addToPokedex}>            
            {isPokedex ? "Remover" : "Adicionar"}
            </ButtonAdd>           

            <ButtonDetail onClick={() =>goToPokeDetails(history, pokemon.name)}>Detalhes</ButtonDetail>

        </div>
    </PokeCardItem>
  );
}

export default Pokecard;
