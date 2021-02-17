
import React from "react";
import styled from "styled-components";

const PlaylistCardContainer = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;

`

const NameContainer = styled.p`
margin: 10px;
`

const DeleteButton = styled.p`
color: red;
`

const PlaylistCard = (props) =>{
  return(
    <PlaylistCardContainer>
            <button onClick={() => props.changePage("playlistdetail", props.playlistId)}>Abrir Playlist</button>

            <NameContainer>{props.name}</NameContainer>
            <DeleteButton onClick={() => props.deletePlaylist(props.playlistId)}>X</DeleteButton>

    </PlaylistCardContainer>
  )
}

export default PlaylistCard


