import React from 'react'
import {useHistory} from "react-router-dom"
import { goToLogin } from "../Routes/Coordinator";
import { goToHome } from "../Routes/Coordinator";
import { goToTripsList } from "../Routes/Coordinator";
import { goToApplication } from "../Routes/Coordinator";
import { goToAbout } from "../Routes/Coordinator";
import { HeaderLayout,Logo, Menu, MenuButton} from './styled/styledProject.js';


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
