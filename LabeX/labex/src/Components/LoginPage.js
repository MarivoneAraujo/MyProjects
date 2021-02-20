import axios from 'axios'
import React from 'react'
import {useHistory} from "react-router-dom"
import useForm from '../hooks/useForm'
import { useProtectedPage } from '../hooks/useProtectedPage';
import { CentralLoginPage, Form, BoxLogin, ButtonDits} from './styled/styledProject.js';


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
      <CentralLoginPage>              
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
      </CentralLoginPage>
    </div>
  );
}

export default LoginPage;
