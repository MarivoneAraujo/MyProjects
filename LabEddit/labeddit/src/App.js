import React, {useState} from 'react'
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Router from './Components/router'

function App() {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

  
  return (
    <div>
      <BrowserRouter>
      <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText}/>
      <Router setRightButtonText={setRightButtonText}/>     
      </BrowserRouter> 
    </div>
  );
}

export default App;
