
import React from "react";
import { TrackCardContainer, TrackContainer, ArtistContainer, DeleteButtonCard, Audio} from "../Styled/styledProject";


const TrackCard = (props) =>{
  return(
    <TrackCardContainer>
              <div>

                <TrackContainer>{props.trackName} - </TrackContainer>
                <ArtistContainer>{props.artist}</ArtistContainer>                

                <DeleteButtonCard                
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


