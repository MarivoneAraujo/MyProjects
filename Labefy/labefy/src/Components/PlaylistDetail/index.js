
import axios from "axios";
import React from "react";
import styled from "styled-components";
import { axiosConfig, baseUrl } from "../../constants";
// import Playlists from "../PLaylists";
import TrackCard from "../TrackCard/TrackCard";

const PlaylistDetailContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const TrackCreationForm = styled.form`
border: 1px solid black;
width: 100vh;
height: 100px;
display: flex;
align-items: center;
justify-content: space-around;

div{

}
`

class PlaylistDetail extends React.Component{

    state = {
        tracks: [],
        trackName: "",
        artist: "",
        url: ""
    }

    componentDidMount = () =>{
        this.fetchTracks()
    }


    fetchTracks = () =>{
        axios.get(`${baseUrl}/${this.props.playlistId}/tracks`, axiosConfig).then(res =>{
            // console.log (res.data.result.tracks)
            this.setState({tracks: res.data.result.tracks})
        }).catch(err =>{
            console.log(err)
        })
    }

    removeTrackFromPlaylist = (trackId) =>{
        axios.delete(`${baseUrl}/${this.props.playlistId}/tracks/${trackId}`, axiosConfig).then(res =>{
            // console.log(res)
            this.fetchTracks()
        }).catch(err =>{
            console.log(err)
        })
    }

    changeInputValues = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    addTrackToPLaylist = (e) =>{
        e.preventDefault()

        const body = {
            name: this.state.trackName,
            artist:this.state.artist,
            url:this.state.url
        }

        axios.post(`${baseUrl}/${this.props.playlistId}/tracks`, body, axiosConfig).then(res =>{
            console.log(res)
            this.fetchTracks()
            this.setState({trackName: '', artist: '', url: ''})
        }).catch(err =>{
            console.log(err)
        })
    }
 

    render() {

        console.log(this.state)

        const tracks = this.state.tracks.map((track) =>{
            return <TrackCard 
                key={track.id}
                trackName = {track.name}
                artist = {track.artist}
                url={track.url}

                trackId = {track.id}
                removeTrackFromPlaylist = {this.removeTrackFromPlaylist}

            />
        })

        return(

            <PlaylistDetailContainer>


                <TrackCreationForm onSubmit={this.addTrackToPLaylist}>
                
                <div>
                <label for="songname">Nome da Música:</label>
                <input id="songname"
                    placeholder = 'Nome da música'
                    name="trackName"
                    value={this.state.trackName}
                    onChange={this.changeInputValues}
                />
                </div>

                <div>
                <label for="artist">Artista:</label>
                <input id="artist"

                    placeholder = 'Nome do artista'
                    name="artist"
                    value={this.state.artist}
                    onChange={this.changeInputValues}
                />
                </div>

                <div>
                <label for="url">URL da Música:</label>
                <input id="url" 
                
                placeholder = 'URL da música'
                name="url"
                value={this.state.url}
                onChange={this.changeInputValues}                
                
                
                />
                </div>

                <button type= "submit">Adicionar Música</button>
                
                </TrackCreationForm>

                {tracks}
        
                <button onClick={() => this.props.changePage("playlists", "")}>Voltar para playlists</button>
        
            </PlaylistDetailContainer>
          )
    }

  
}

export default PlaylistDetail


