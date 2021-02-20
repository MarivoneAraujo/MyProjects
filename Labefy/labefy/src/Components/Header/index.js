
import React from "react";
import {HeaderContainer,  Titulo, ButtonsContainer, ButtonHeader} from "../Styled/styledProject";


const Header = (props) =>{
  return(
    <HeaderContainer>

      <Titulo>Labefy</Titulo>

      <ButtonsContainer>
        <ButtonHeader 
        onClick = {() => props.changePage("playListCreationPage")}
        >Criar nova Playlist</ButtonHeader>
        
        <ButtonHeader
        onClick = {() => props.changePage("playlistManagerPage")}
        >Ver playlists</ButtonHeader>

      </ButtonsContainer>

    </HeaderContainer>
  )
}

export default Header


