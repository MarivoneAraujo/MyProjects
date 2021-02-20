
import React from "react";
import styled from "styled-components";
// import iconTrash from "../IMGS/iconTrash.jpg"


const PlaylistCardContainer = styled.div`
  
  display: flex;
  align-items: center;
  margin-bottom: -30px;
  
`

const OpenButton = styled.img`
width: 35px;
height: 35px;
margin-bottom: 9px;
:hover{
  cursor: pointer; 
}
`

const NameContainer = styled.p`
margin-left: 20px;
margin-right: 20px;
font-size: 30px;
padding: 3px 10px;
background-color: #43008D;
color: white;
box-shadow: 2px 2px 1px black;
text-shadow: 2px 2px 1px black;
`

const DeleteButton = styled.img`
width: 25px;
height: 25px;


:hover{
  cursor: pointer; 
}

`

const PlaylistCard = (props) =>{
  return(
    <PlaylistCardContainer>
            
            <OpenButton
            
            src='https://image.flaticon.com/icons/png/512/1160/1160439.png'

            onClick={() => props.changePage("playlistdetail", props.playlistId)} />

            <NameContainer>{props.name}</NameContainer>

            <DeleteButton 
            
            src='https://icons-for-free.com/iconfiles/png/512/delete+remove+trash+icon-1320086060903288495.png'
                        
            onClick={() => props.deletePlaylist(props.playlistId)}/>

    </PlaylistCardContainer>
  )
}

export default PlaylistCard


