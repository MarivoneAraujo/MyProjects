// import axios from 'axios'
import React from 'react'


function Candidate (props) {

  const approveCandidate = () =>{    
    props.decideCandidate(true, props.candidate.id)
  }
  const rejectCandidate = () =>{    
    props.decideCandidate(false, props.candidate.id)
  }

  return (   
    <div>       
      <p></p>          
        <div><i><strong>Nome:</strong> {props.candidate.name}</i> </div>
        <div><i><strong>Idade:</strong> {props.candidate.age} anos</i> </div>
        <div><i><strong>Profissão:</strong> {props.candidate.profession}</i> </div>
        <div><i><strong>País:</strong> {props.candidate.country}</i></div>
        <div><i><strong>Texto:</strong> "{props.candidate.applicationText}"</i></div>
        <button
          onClick={approveCandidate}
        >Aprova</button>
        <button
          onClick={rejectCandidate}       
        >Não Aprova</button>
        

    </div>
  )
}

export default  Candidate;




