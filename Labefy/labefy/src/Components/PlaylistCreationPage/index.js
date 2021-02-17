
import React from "react";
import styled from "styled-components";
import axios from "axios"
import { axiosConfig, baseUrl } from "../../constants";

const PlaylistCreationFormContainer = styled.div`
height: 500px;
display: flex;
flex-direction: column;
align-items: center;
`
const PlaylistCreationForm = styled.form`
height: 100px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
` 

class PlaylistCreationPage extends React.Component {

  state = {
    inputNameValue: ""
  }

  changeInputNameValue = (e) =>{
    this.setState({inputNameValue: e.target.value})
  }

  createPlaylist = (e) =>{
    e.preventDefault()

    const body = {

      name: this.state.inputNameValue
    }

    axios.post(baseUrl, body, axiosConfig).then(res =>{
      // console.log(res)
      alert ('Playlist cadastrada com sucesso!')
    }).catch(err =>{
      console.log(err)
    })
    this.setState({inputNameValue: ''})
  }


  render(){
    console.log(this.state.inputNameValue)

    return(
      <PlaylistCreationFormContainer>

        <h1>Cadastrar Nova Playlist</h1>
  
        <PlaylistCreationForm onSubmit={this.createPlaylist}>
  
          <label>Nova playlist</label>
          <input placeholder="Nome da Playlist"
          type="text"
          value = {this.state.inputNameValue}
          onChange = {this.changeInputNameValue}
          />
          <button type = "submit">Cadastrar Playlist</button>
  
        </PlaylistCreationForm>
  
      </PlaylistCreationFormContainer>
    )
  }
  
}

export default PlaylistCreationPage
