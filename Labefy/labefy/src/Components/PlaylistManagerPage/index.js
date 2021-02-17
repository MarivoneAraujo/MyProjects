
import React from "react";
import styled from "styled-components";
import PlaylistDetail from "../PlaylistDetail";
import Playlists from "../PLaylists";

const PlaylistManagerContainer = styled.div`

`


class PlaylistManagerPage extends React.Component{

    state = {
        currentPage: "playlists",
        playlistId: ''
    }

    changePage = (currentPage, playlistId) =>{
        this.setState({
            currentPage: currentPage,
            playlistId: playlistId
        })
      }


    render() {

        // console.log(this.state.playlistId)

        const renderCurrentPage = () =>{
            if (this.state.currentPage === "playlists"){
                return <Playlists 
                
                changePage={this.changePage}

                /> 
            } else if (this.state.currentPage === "playlistdetail"){
                return <PlaylistDetail 
                
                changePage={this.changePage}
                playlistId ={this.state.playlistId}

                /> 
            }
        } 

        return(

            <PlaylistManagerContainer>
        
                {renderCurrentPage()}
        
            </PlaylistManagerContainer>
          )
    }

  
}

export default PlaylistManagerPage


