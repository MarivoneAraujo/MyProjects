import React from 'react'


function AdmTripCandits(props) {

    const {name, planet, description, date, durationInDays} = props.info

  return (   

    <div> 
      
        <h1><strong>Detalhes da viagem:</strong></h1>
        <p></p>
        <h2><i><strong>{name}</strong></i></h2>
        <div><i><strong>Planeta:</strong> {planet}</i></div>
        <div><i><strong>Duração:</strong> {durationInDays} dias</i></div>
        <div><i><strong>Data:</strong> {date}</i></div>  
        <div><i><strong>Descrição:</strong> {description}</i> </div>
        
        <hr />
        
        </div>
  )
}

export default AdmTripCandits;




