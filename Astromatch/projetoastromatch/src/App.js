import React, { useEffect, useState} from 'react'
import Main from './Main'
import PageMatches from './components/PageMatches'

function App() {

  const [page, setPage] = useState(false)
  // const [view, setView] = useState (true)
  
  // const changePage = ()=>{
  //   setView (false)
  // }

  // const definePage = ()=>{
  // {view?<Main/>:<PageMatches/>}
  // }

  // useEffect (() =>{    
  //   definePage()
  // })

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
   
    {/* <button onClick={definePage}>Duas Páginas</button>     */}

    <div>{setScreen()}</div>
        
  </div>
  );
}

export default App;
