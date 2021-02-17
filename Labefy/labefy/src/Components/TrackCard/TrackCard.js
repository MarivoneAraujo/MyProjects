
import React from "react";
import styled from "styled-components";

const TrackCardContainer = styled.div`
  /* border: 1px solid black; */
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
`

const ArtistContainer = styled.p`
margin-right: 10px;
`

const DeleteButton = styled.img`

width: 20px;
height: 20px;

`

const TrackCard = (props) =>{
  return(
    <TrackCardContainer>
    
            <div>

                <TrackContainer>{props.trackName} - </TrackContainer>
                <ArtistContainer>{props.artist}</ArtistContainer>

                

                <DeleteButton
                
                src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf_y_jUG_xXygEFXpZEOG1jzfsAOcIR0oyEw&usqp=CAU'

                  onClick={() => props.removeTrackFromPlaylist(props.trackId)}

                />

            </div>

            <audio controls="controls">
                <source src={props.url} type="audio/ogg"/>
            </audio>

    </TrackCardContainer>
  )
}

export default TrackCard


