
import React from "react";
import PlaylistDetail from "../PlaylistDetail";
import Playlists from "../PLaylists";


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

            <>
        
                {renderCurrentPage()}
        
            </>
          )
    }

  
}

export default PlaylistManagerPage


