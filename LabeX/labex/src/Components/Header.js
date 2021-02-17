import React from 'react'
import styled from 'styled-components'
import {useHistory} from "react-router-dom"
import { goToLogin } from "../Routes/Coordinator";
import { goToHome } from "../Routes/Coordinator";
import { goToTripsList } from "../Routes/Coordinator";
import { goToApplication } from "../Routes/Coordinator";
import { goToAbout } from "../Routes/Coordinator";
import {goToADMTripDetails} from "../Routes/Coordinator"


const HeaderLayout = styled.div`
display: grid;
grid-template-rows: 1fr 0.3fr;
`
const Logo = styled.img`
width: 25%;
margin-left: 75%;
object-fit: cover;
:hover{
  cursor: pointer;
 }

@media (max-width: 499px) {
  width: 80px;
}

`

const Menu = styled.div`
display: grid;
grid-template-columns: 0.3fr 0.5fr 0.7fr 1fr 1fr 1fr 0.5fr 0.5fr;


@media (min-width:500px) and (max-width: 800px) {

display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

};

@media (max-width: 499px) {
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

`

const MenuButton = styled.button`
font-family: monospace;
background-color: white;
font-size: 20px;
border: none;
:hover{
  cursor: pointer;
  left: 9px;   
  color: blue;
  transform: scale(1.2);
}

`

  const Header = () => {
    const history = useHistory()
  

  function logout() {
      localStorage.removeItem('token')
      alert('Deslogado com sucesso')
      history.push('/Login')
    }  

  return (


    
    <HeaderLayout>
      
      <Logo src="https://i.imgur.com/z6an6rd.jpg" alt = "Logo" onClick={() => goToHome(history)}/>
       
      <div>

      <Menu>  
        
    

        <div><MenuButton onClick={() => goToHome(history)}>home</MenuButton></div>

        <div><MenuButton onClick={() => goToTripsList(history)}>destinos</MenuButton></div>

        <div><MenuButton onClick={() => goToApplication(history)}>candidate-se</MenuButton></div>

        <div><MenuButton onClick={() => goToAbout(history)}>sobre</MenuButton></div>

        
        <div></div>
        <div></div>

        <div><MenuButton onClick={() => goToLogin(history)}>login</MenuButton></div>

        <div><MenuButton onClick={() => logout()}>logout</MenuButton></div>

             
      </Menu>
      
      </div>
    </HeaderLayout>
  );
}

export default Header;
