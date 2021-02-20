
import axios from "axios";
import React from "react";
import { axiosConfig, baseUrl } from "../../constants";
import TrackCard from "../TrackCard/TrackCard";
import { TrackCreationForm,H1, ButtonDetailPage, ButtonReturn} from "../Styled/styledProject";

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

            <>


                <TrackCreationForm onSubmit={this.addTrackToPLaylist}>
                
                <div>
                    <h2>Agora, insira uma música:</h2>
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

                <ButtonDetailPage type= "submit">Add Música</ButtonDetailPage>
                
                </TrackCreationForm>

                

                <div>

                <H1> Suas músicas!</H1>

                {tracks}

                <ButtonReturn 
                
                src="https://www.svgrepo.com/show/54336/return-button.svg"
                
                onClick={() => this.props.changePage("playlists", "")} />
                </div>
        
            </>
          )
    }

  
}

export default PlaylistDetail


