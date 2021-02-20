
import axios from "axios";
import React from "react";
import styled from "styled-components";
import { axiosConfig, baseUrl } from "../../constants";
import TrackCard from "../TrackCard/TrackCard";

const PlaylistDetailContainer = styled.div`
display: grid;
grid-template-columns: auto 3fr;
align-items: center;
`
const TrackCreationForm = styled.form`
text-align: center;
background-color: black;
color: white;
text-shadow: 1px 1px 1px black;
height: 200px;
border: 1px solid black;
margin-left: 40px;
padding: 10px;
box-shadow: 1px 1px 6px black; 
`

const H1 = styled.h1`
color: white;
text-shadow: 1px 1px 1px black;
text-align: center;
`
const Button = styled.button`
background-color: #43008D;
text-shadow: 2px 2px 2px black;
box-shadow: 1px 1px 1px black;
color: white;
padding: 6px 8px;
border: none;
margin: 10px;
:hover{
  cursor: pointer;
  transform: scale(1.2);
}
`

const ButtonReturn = styled.img`
margin-top: 110px;
margin-left: 750px;
width: 30px;
height: 30px;
:hover{
  cursor: pointer; 
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
            this.setState({tracks: res.data.result.tracks})
        }).catch(err =>{
            console.log(err)
        })
    }

    removeTrackFromPlaylist = (trackId) =>{
        axios.delete(`${baseUrl}/${this.props.playlistId}/tracks/${trackId}`, axiosConfig).then(res =>{
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
                    <h2>Agora, insira mais uma música:</h2>
                <label for="songname">Nome da Música: </label>
                <input id="songname"
                    placeholder = 'Nome da música'
                    name="trackName"
                    value={this.state.trackName}
                    onChange={this.changeInputValues}
                />
                </div>

                <div>

                <label for="artist">Artista: </label>
                <input id="artist"

                    placeholder = 'Nome do artista'
                    name="artist"
                    value={this.state.artist}
                    onChange={this.changeInputValues}
                />
                </div>

                <div>
                <label for="url">URL da Música: </label>
                <input id="url" 
                placeholder = 'URL da música'
                name="url"
                value={this.state.url}
                onChange={this.changeInputValues}           
                />
                </div>

                <Button type= "submit">Add Música</Button>
                
                </TrackCreationForm>

                

                <div>

                <H1> Suas músicas!</H1>

                {tracks}

                <ButtonReturn 
                
                src="https://www.svgrepo.com/show/54336/return-button.svg"
                
                onClick={() => this.props.changePage("playlists", "")} />
                </div>
        
            </PlaylistDetailContainer>
          )
    }

  
}

export default PlaylistDetail


