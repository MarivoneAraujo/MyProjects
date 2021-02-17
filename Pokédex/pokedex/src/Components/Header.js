import react, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom"
import { goToPokeList } from '../Routes/Coordinator'
import { goToHome } from '../Routes/Coordinator'


const HeaderGrid = styled.div`
border-bottom: 4px solid white;
background-color: red;
height: 15vh;
text-align: center;
color: white;
display: grid;
grid-template-columns: 1fr 1fr 1fr;

@media (min-width:414px) and (max-width: 800px) {
  grid-template-columns: 20% 79% 1%;    
};
`
const Title = styled.div`
font-family: 'Press Start 2P', cursive;
line-height: 15vh; 
font-size: 35px;
text-shadow: 3px 1px 4px black;

`
const ButtonPokeList = styled.button`
width:50%;
height:40%;
margin:auto;
background-color: darkblue;
color: white;
font-family: 'Press Start 2P', cursive;
font-size: 10px;
text-shadow: 3px 1px 4px black;
:hover{
  cursor: pointer;
}

@media (min-width:414px) and (max-width: 800px) {
width:100%;
height:45%;
margin-left: 20px;  
};

`



function Header() {

    const history = useHistory()
    const [changePage, setchangePage] = useState(false);


    return (
        
    <HeaderGrid>

        {changePage? <ButtonPokeList onClick={() => goToHome(history) ||setchangePage(!changePage)}> Ir para a Home </ButtonPokeList>
        :
        <ButtonPokeList onClick={() => goToPokeList(history) || setchangePage(!changePage)}> Ir para a Pokédex </ButtonPokeList>}
    

        <Title>Pokédex</Title>
        
      
    </HeaderGrid>
  );
}

export default Header;
