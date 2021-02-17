import react, { useContext } from "react"
import styled from "styled-components";
import Pokecard from "../Components/PokeCard";
import GlobalStateContext from "../global/GlobalStateContext";


const MainGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr; 

@media (min-width:414px) and (max-width: 800px) {
display: grid;
grid-template-columns: 1fr 1fr; 
};

`

function Pokelist() {  
  const {pokedex} = useContext(GlobalStateContext)
  
  return (

    <MainGrid>
    {
        pokedex && pokedex.map ((poke) =>{
          return( 
          <Pokecard
          key={poke.name} 
          
          isPokedex 

          pokemon={poke}

          />)
        })
      }

      </MainGrid>
  );
}

export default Pokelist;
