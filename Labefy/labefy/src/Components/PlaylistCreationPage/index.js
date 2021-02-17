
import React from "react";
import styled from "styled-components";
import axios from "axios"
import { axiosConfig, baseUrl } from "../../constants";

const PlaylistCreationFormContainer = styled.div`
height: 500px;
display: flex;
flex-direction: column;
align-items: center;
margin: 90px;
font-size: 40px;
`
const Input = styled.input`
width: 350px;
margin: 30px;
`

const PlaylistCreationForm = styled.form`
height: 100px;
display: flex;
flex-direction: column;
align-items: center;
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

        {/* <h1>Cadastrar Nova Playlist</h1> */}
  
        <PlaylistCreationForm onSubmit={this.createPlaylist}>
  
          <label>Cadastrar Nova Playlist</label>
          <Input placeholder="Nome da Playlist"
          type="text"
          value = {this.state.inputNameValue}
          onChange = {this.changeInputNameValue}
          />
          
          <button 
          
          src='https://img.flaticon.com/icons/png/512/48/48742.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF'

          type = "submit">Go!</button>
  
        </PlaylistCreationForm>
  
      </PlaylistCreationFormContainer>
    )
  }
  
}

export default PlaylistCreationPage
