
import React from "react";
import styled from "styled-components";
import PlaylistCard from "../PlaylistCard"
import axios from "axios";
import { axiosConfig, baseUrl } from "../../constants";

const PlaylistsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`


class Playlists extends React.Component{

    state = {
        playlists: [
            
        ]
    }

    componentDidMount = () =>{
        this.fetchPlaylists()
    }

    fetchPlaylists = () =>{
        axios.get(baseUrl, axiosConfig).then(res =>{
            // console.log(res.data.result.list)
            this.setState({playlists: res.data.result.list})
        }).catch(err=>{
            console.log(err)
        })
    }

    deletePlaylist = (playlistId) =>{
        axios.delete(`${baseUrl}/${playlistId}`, axiosConfig).then(res =>{
            // console.log(res)
            this.fetchPlaylists()
            alert ('Playlist deletada com sucesso')
        }).catch(err =>{
            console.log(err)
        }) 
    }


    render() {

        const playlists = this.state.playlists.map((playlist) => {
            return (
                <PlaylistCard 
                
                key={playlist.id}
                changePage={this.props.changePage}
                name = {playlist.name}

                playlistId={playlist.id}
                deletePlaylist={this.deletePlaylist}

                />
            )
        })

        return(

            <PlaylistsContainer>

                {playlists}
        
            </PlaylistsContainer>
          )
    }

  
}

export default Playlists


