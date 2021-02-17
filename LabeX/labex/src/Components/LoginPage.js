import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import {useHistory} from "react-router-dom"
import useForm from '../hooks/useForm'
import { useProtectedPage } from '../hooks/useProtectedPage';

const Central = styled.div` 
width: 100%;
height: 700px;
background-image: url('https://arquitetoexpert.com/wp-content/uploads/2019/01/rocket.jpg');
background-repeat: no-repeat;
background-size:100%;
color: white;


@media (min-width:500px) and (max-width: 800px) {

background-image: url('https://i.ytimg.com/vi/NtOwzU5Rpp8/maxresdefault.jpg');
background-repeat: repeat;
background-size:100%  
}

@media (max-width: 499px) {
background-image: url('https://i.ytimg.com/vi/NtOwzU5Rpp8/maxresdefault.jpg');
background-repeat: repeat;
background-size:100% 

}

`
const Form = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
padding-left: 350px;
padding-top: 150px;
font-family: monospace;
font-size: 20px;

`
const BoxLogin = styled.div`
font-family: monospace;
width: 250px;
height: 350px;
margin: 25px;
padding: 5px; 

padding-left: 50px;
background-color: white;
color: black;
top: 10px;
left: 30px;
border-radius: 10px;
opacity: 0.7;
box-shadow: 0px 0.5px 15px gray;

:hover{
  cursor: pointer;
  color: blue;

} 


@media (min-width:500px) and (max-width: 800px) {

  margin-left: -400px;
  margin-top: -40px;

}

@media (max-width: 499px) {

  margin-left: -330px;
  margin-top: -50px;

}


`
const ButtonDits = styled.button`
font-family: monospace;
background-color: white;
:hover{
  cursor: pointer;
  color: blue;
  transform: scale(1.2);
}
`
function LoginPage() {
  const [form, onChange, clearFields] = useForm({
    email: "",
    password: "",    
  });
  const history = useHistory()
  useProtectedPage()
  

  const onClickButton = (event) => {
    event.preventDefault();
    console.log(form);
    clearFields();    
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/marivone-araujo-epps/login", form)
      .then((res) =>{
        localStorage.setItem("token", res.data.token)
        history.push('/trips/details')
      }).catch((err) =>{
        console.log(err.message)
        alert (err.message)
      })
}
  return (
    <div>
      <Central>              
      <Form>
        <div></div>
        <div></div>
      <BoxLogin>
        <h1>Login</h1>

        <form onSubmit={onClickButton}>
          <label for="email">Email:</label>      
          <p><input 
          id="email"
          type="email"
          name="email"
          value={form.email} 
          onChange={onChange}
          required 
          /></p>
          <label for="password">Senha:</label>      
          <p><input 
          type = "password"
          id="password"
          name="password"
          value={form.password} 
          onChange={onChange}
          title={"A senha deve ter no mínimo 3 caracteres"}
          pattern={"^.{3,}"}
          required 
        
          /></p>

          <ButtonDits>Enviar</ButtonDits>
        </form>      
      
      </BoxLogin>        

      </Form>
      </Central>
      
    </div>
  );
}

export default LoginPage;
