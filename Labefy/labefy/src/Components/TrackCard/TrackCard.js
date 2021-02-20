
import React from "react";
import styled from "styled-components";

const TrackCardContainer = styled.div`
  margin: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div{
    display: flex;
    align-items: center;
  }

`

const TrackContainer = styled.h4`
margin: 10px;
margin-left: 20px;
margin-right: 20px;
font-size: 20px;
padding: 3px 10px;
background-color: #43008D;
color: white;
box-shadow: 2px 2px 1px black;
text-shadow: 2px 2px 1px black;
`

const ArtistContainer = styled.p`
margin-right: 10px;
margin-left: 20px;
margin-right: 20px;
font-size: 16px;
padding: 3px 10px;
background-color: black;
color: white;
box-shadow: 2px 2px 1px black;
text-shadow: 2px 2px 1px black;
`

const DeleteButton = styled.img`
width: 20px;
height: 20px;
`
const Audio = styled.audio`
width: 500px;
height: 30px;

`

const TrackCard = (props) =>{
  return(
    <TrackCardContainer>
    
            <div>

                <TrackContainer>{props.trackName} - </TrackContainer>
                <ArtistContainer>{props.artist}</ArtistContainer>

                

                <DeleteButton
                
                  src='https://icons-for-free.com/iconfiles/png/512/delete+remove+trash+icon-1320086060903288495.png'

                  onClick={() => props.removeTrackFromPlaylist(props.trackId)}

                />

            </div>

            <Audio controls="controls">
                <source src={props.url} type="audio/ogg"/>
            </Audio>

    </TrackCardContainer>
  )
}

export default TrackCard


