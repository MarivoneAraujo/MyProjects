
import React from "react";
import styled from "styled-components";
// import iconTrash from "../IMGS/iconTrash.jpg"


const PlaylistCardContainer = styled.div`
  
  display: flex;
  align-items: center;
  /* border: 1px solid black; */
  margin-bottom: -30px;
  
`

const OpenButton = styled.img`

width: 40px;
height: 40px;
:hover{
  cursor: pointer; 
}
`

const NameContainer = styled.p`
margin-left: 20px;
margin-right: 20px;
font-size: 30px;
`

const DeleteButton = styled.img`
width: 20px;
height: 20px;


:hover{
  cursor: pointer;
 
}

`

const PlaylistCard = (props) =>{
  return(
    <PlaylistCardContainer>
            
            <OpenButton
            
            src='https://www.iconpacks.net/icons/1/free-click-icon-1263-thumb.png'

            onClick={() => props.changePage("playlistdetail", props.playlistId)} />

            <NameContainer>{props.name}</NameContainer>

            <DeleteButton 
            
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4NTX2DR1UclF2aRRX7guvANvLEzLAk-wmMQ&usqp=CAU'
                        
            onClick={() => props.deletePlaylist(props.playlistId)}/>

    </PlaylistCardContainer>
  )
}

export default PlaylistCard


