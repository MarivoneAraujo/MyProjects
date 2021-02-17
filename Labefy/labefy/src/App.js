import React from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import PlaylistCreationPage from "./Components/PlaylistCreationPage";
import PlaylistManagerPage from "./Components/PlaylistManagerPage";


const AppContainer = styled.div`
width: 100vw;
height: 100vh;
/* background-color: green; */
display: flex;
flex-direction: column;

font-family: 'Poppins', sans-serif;
`

class App extends React.Component {

  state ={
    currentPage: "playListCreationPage"
  }

  changePage = (currentPage) =>{
    this.setState({currentPage: currentPage})
  }

  render (){
    
    const renderCurrentPage = () =>{
      if (this.state.currentPage === "playListCreationPage"){
        return <PlaylistCreationPage />
      } else if (this.state.currentPage === "playlistManagerPage"){
        return <PlaylistManagerPage /> 
      }
    }

    return (

    <AppContainer>
      <Header changePage={this.changePage}/>        
        {renderCurrentPage()}
    </AppContainer>
  );
}
}

export default App;


