import React, {useState} from 'react'
import useForm from '../hooks/useForm'
import styled from 'styled-components'
import axios from 'axios';
import {useHistory} from "react-router-dom"

const BigGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1.5fr;
`
const BackToAdm = styled.button`
font-size: 25px;
margin: 50px;
margin-top: 200px;
width: 150px;
height: 100px;

font-family: monospace;
background-color: white;
:hover{
  cursor: pointer;
  color: blue;
}


@media (min-width:500px) and (max-width: 800px) {
  margin-top: 150px;

}

@media (max-width: 499px) {
  font-size: 15px;
  width: 100px;
  margin: 10px;
  margin-top: 150px;

}


`

const CreateTripForm = styled.div`
font-family: monospace;

`

const CreateTripButton = styled.button`
font-family: monospace;
font-family: monospace;
background-color: white;
margin-bottom: 10px;
margin-left: 27px;
:hover{
  cursor: pointer;
  color: blue;
  transform: scale(1.2);
}


`

function CreateTripPage() {

  const [form, onChange, clearFields] = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });
 
  const history = useHistory()

  const goBack = () =>{
    history.goBack()
  }

  const onClickButton = (event) => {
    event.preventDefault();
    console.log(form);
    clearFields();

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/marivone-araujo-epps/trips", form,{
      headers:{
        auth: localStorage.getItem("token")
      }
    })
    .then((res) =>{
      console.log(res.data.trip)
      alert ("Viagem criada")

    })
    .catch((err) =>{
        console.log(err)
    })
  };
  
  return (
    <BigGrid>

      

    <div><BackToAdm onClick={goBack}>Voltar para ADM</BackToAdm></div>
       
    <CreateTripForm>
      <h1>Crie uma viagem:</h1>
      <label for="name">Nome:</label>      

      <form onSubmit={onClickButton}>       
      <p><input 
      type="text"    
      id="name"      
      name="name"
      value={form.name}
      onChange={onChange}
      placeholder="Nome"
      required
      pattern={"^.{5,}"}
      title={"O nome deve ter no mínimo 5 caracteres"}    
        
      /></p>


      <label for="planeta">Planeta:</label>
      <p><select 
      id="planeta"      
      type="select"                 
      name="planet"
      value={form.planet}
      onChange={onChange}
      placeholder="planeta"
      required            
      >
        <option>Escolha</option>
        <option>Mercúrio</option>
        <option>Vênus</option>
        <option>Terra</option>
        <option>Marte</option>
        <option>Júpiter</option>
        <option>Saturno</option>
        <option>Urano</option>
        <option>Netuno</option>
        <option>Plutão</option>
      </select></p>

      
      <label for="date">Data (dias):</label>
      <p><input 
      type="date"
      title={"Escolha uma data futura"}
      min={"01-01-2022"}
      id="date"      
      name="date"
      value={form.date}
      onChange={onChange}
      required
      /></p>
     
      <label for="descricao">Descrição:</label>
      <p><textarea 
      type="text" 
      id="descricao"                   
      name="description"
      value={form.description}
      onChange={onChange}
      placeholder="Descrição"
      required
      pattern={"^.{30,}"}
      title={"O texto deve ter no mínimo 30 letras"}
      /></p>

      <label for="durationInDays">Duração (Dias):</label>
      <p><input 
      type="number" 
      min={50}
      id="durationInDays"    
      name="durationInDays"
      value={form.durationInDays}
      onChange={onChange}
      placeholder="Duração"
      required
     
      /></p>

      <CreateTripButton>Criar Viagem</CreateTripButton>
    
    </form>     
      
    </CreateTripForm>

      
    </BigGrid>
  );
}
  
export default CreateTripPage;
