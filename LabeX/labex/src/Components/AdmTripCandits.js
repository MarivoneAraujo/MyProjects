import React from 'react'
import Candidate from './Candidate'


function AdmTripCandits (props) {

  return (   

    <div> 
      
      <p></p>
    
       <div><strong><i>Lista de Candidatos(as):</i></strong></div>
       <p></p>        

        {props.candidates.map(candidate=>{
            return  <Candidate 
            candidate ={candidate} 
            // tripId={props.tripId} 
            decideCandidate={props.decideCandidate}/>
        })}


        
        
    </div>
  )
}

export default  AdmTripCandits;




