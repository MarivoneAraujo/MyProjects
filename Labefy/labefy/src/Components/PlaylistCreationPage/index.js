
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
const Label = styled.label`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 70px;
color: white;
text-shadow: 2px 2px 2px black;
`

const Button = styled.button`
background-color: #43008D;
text-shadow: 2px 2px 2px black;
box-shadow: 1px 1px 1px black;
color: white;
padding: 4px 6px;
border: none;

:hover{
  cursor: pointer;
  color: yellow;
  transform: scale(1.2);
}

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
        <PlaylistCreationForm onSubmit={this.createPlaylist}>
            <Label>Crie sua Playlist!</Label>
          <Input placeholder="Nome da Playlist"
          type="text"
          value = {this.state.inputNameValue}
          onChange = {this.changeInputNameValue}
          />          
          <Button 
          
          src='https://img.flaticon.com/icons/png/512/48/48742.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF'

          type = "submit">go!</Button>
  
        </PlaylistCreationForm>
  
      </PlaylistCreationFormContainer>
    )
  }
  
}

export default PlaylistCreationPage
