import React, { useEffect, useState} from 'react'
import Main from './components/Main'
import PageMatches from './components/PageMatches'

function App() {

  const [page, setPage] = useState(false)
  const stayMain = () => {
    setPage (true)
  }
  const changeToMatches = () => {
    setPage (false)
  }
  const setScreen =() =>{
    if (page){
      return (
        <PageMatches changeToMatches = {changeToMatches} />
      ) 
    }else{
      return(
        <Main stayMain = {stayMain}/>
)}}

  useEffect (() =>{    
    setScreen()
  })
  return (
  <div>
    <div>{setScreen()}</div>
  </div>
  );
}

export default App;
