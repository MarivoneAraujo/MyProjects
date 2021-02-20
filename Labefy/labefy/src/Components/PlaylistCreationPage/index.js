
import React from "react";
import axios from "axios"
import { axiosConfig, baseUrl } from "../../constants";
import { PlaylistCreationFormContainer, Input, PlaylistCreationForm, Label, Button } from "../Styled/styledProject";


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
