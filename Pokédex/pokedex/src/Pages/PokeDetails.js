import react, { useContext, useEffect, useState } from "react"
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import GlobalStateContext from "../global/GlobalStateContext";
import { goToHome } from '../Routes/Coordinator'

const MiniGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 

`
const BackButton = styled.button`
margin:10px;
padding: 5px;
background-color: yellow;
color: black;
font-family: 'Press Start 2P', cursive;
font-size: 10px;
text-shadow: 3px 1px 4px gray;
:hover{
  cursor: pointer;
}
`
const PokemonDetails = styled.h1`
text-transform: capitalize;
font-family: 'Press Start 2P', cursive;
margin-left: 30px;
`
const GridDetails = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;

@media (min-width:100px) and (max-width: 800px) {
display: grid;
grid-template-columns: 1fr; 
};

`
const FirstColumn = styled.div`
border: 1px solid black;
font-family: 'Press Start 2P', cursive;
width: 50%;
margin-left: 200px;
color: black;
text-align: center;
justify-content: center;
box-shadow: 1px 1px 6px black;
border-radius: 10px;
height: 73.5vh;

@media (min-width:414px) and (max-width: 800px) {
margin: 10px;
justify-content: 10px}

`
const SecondColumn = styled.div`
border: 1px solid black;
font-family: 'Press Start 2P', cursive;
color: black;
/* justify-content: center; */
box-shadow: 1px 1px 6px black;
border-radius: 10px;
padding-top: 10px;
height: 72vh;
`
const StatsInfo = styled.div`
display: grid;
margin: 50px;

`
const StatsTitle = styled.h2`
text-align: center;

`
const ThirdColumn = styled.div`
font-family: 'Press Start 2P', cursive;
display: grid;
grid-template-rows: 1fr 1fr 1fr;
color: black;
text-align: center;
margin-left: 10px;
width: 50vh;
height: 70vh;
`
const TypesGrid = styled.div`
border: 1px solid black;
box-shadow: 1px 1px 6px black;
border-radius: 10px;
margin-top: 20px;
padding-top: 10px;
`
const Typeslist = styled.p`
font-size: 13px;
`
const MovesGrid = styled.div`
border: 1px solid black;
box-shadow: 1px 1px 6px black;
border-radius: 10px;
margin-top: 10px;
padding-top: 10px;
`
const MovesFullList = styled.div`
overflow:scroll;
overflow-x:hidden;
height: 35vh;
`
const Moveslist = styled.p`
font-size: 13px;
`

function PokeDetails() {
  const [selectedPokemon, setSelectedPokemon] = useState({})
  const {name} = useParams()
  // const {pokemons, pokedex} = useContext(GlobalStateContext)
  
  const history = useHistory()
  // console.log(selectedPokemon)

  useEffect (() =>{
    getDetailsPokemon()
  }, [])
  
  const getDetailsPokemon = () => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    .then((res) => {
      setSelectedPokemon(res.data)
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
      window.alert("Erro get")
    })

  };

  return (

    <div>

<MiniGrid> 

      <PokemonDetails>{selectedPokemon && selectedPokemon.name}</PokemonDetails>

      <div></div>
      <div></div>
      <div></div>
      <div></div>

      <div><BackButton onClick={() => goToHome(history)} >Home</BackButton></div>

</MiniGrid>


    <GridDetails>

      <FirstColumn>
         <h3>Sprites</h3>

         <p>Default</p>
         <img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.front_default}/>
         
         <p></p>
         <img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.back_default}/>

         <p>Shiny</p>
         
         <img src={selectedPokemon && selectedPokemon.sprites && selectedPokemon.sprites.front_shiny}/>
         
      </FirstColumn>


      <SecondColumn>

        <StatsTitle>Stats</StatsTitle>

        <StatsInfo>

        {
          selectedPokemon && selectedPokemon.stats &&
          selectedPokemon.stats.map((stat) =>{
            return(
              <p key={stat.stat.name}>
                <strong> {stat.stat.name}: </strong> {stat.base_stat}
              </p>
            )
          })
        }

      </StatsInfo>
        
      </SecondColumn>


      <ThirdColumn>


        <TypesGrid>
         <h3>Types</h3>

        <div>
        {
          selectedPokemon && selectedPokemon.types &&
          selectedPokemon.types.map((type) =>{
            return(
              <Typeslist key={type.type.name}>
                <strong> {type.type.name} </strong> 
              </Typeslist>
            )
          })
        }
        </div>
        
        </TypesGrid>        

        <MovesGrid>

          <h3>Moves</h3>


          <MovesFullList>
          {
          selectedPokemon && selectedPokemon.moves &&
          selectedPokemon.moves.map((move) =>{
            return(
              <Moveslist key={move.move.name}>
                <strong> {move.move.name} </strong> 
              </Moveslist>
            )
          })
        }
          </MovesFullList>
        
        </MovesGrid>
        
      </ThirdColumn>

    </GridDetails>
  </div>
  );
}

export default PokeDetails;

