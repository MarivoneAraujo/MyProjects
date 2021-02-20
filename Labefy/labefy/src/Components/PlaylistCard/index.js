
import React from "react";
import {PlaylistCardContainer, OpenButton, NameContainer, DeleteButton} from "../Styled/styledProject";

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


