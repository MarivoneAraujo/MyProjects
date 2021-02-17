import react, { useContext }from 'react'
import GlobalStateContext from '../global/GlobalStateContext';
import styled from 'styled-components'
import PokeCard from '../Components/PokeCard';

const MainColor = styled.div`
background-color: red; 
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr; 


@media (min-width:414px) and (max-width: 800px) {
background-color: red; 
display: grid;
grid-template-columns: 1fr 1fr; 
};


`

function Home() {

  const {pokemons} = useContext(GlobalStateContext)

  return (
    
        <MainColor>

          {
            pokemons.map((poke)=>{
              return  <PokeCard key = {poke.name} pokemon = {poke}/>
            })
          }                

        </MainColor>
    
  );
}

export default Home;
