import React, { useState, useEffect } from 'react'
import {useHistory} from "react-router-dom"
import {useParams} from "react-router-dom"
import AdmTripCandits from './AdmTripCandits'
import AdmTripInfo from './AdmTripInfo'
import axios from 'axios'
import { MainGrid, BackButton, CentralDetail} from './styled/styledProject.js';


function AdmDetails() {
const history = useHistory()
const goBack = () =>{
  history.goBack()
}

const [trip, setTrip] = useState()
const params = useParams()
const getTripDetail =() =>{
  axios.get (`https://us-central1-labenu-apis.cloudfunctions.net/labeX/marivone-araujo-epps/trip/${params.tripId}`, {
      headers: {
        auth: window.localStorage.getItem
        ('token')
      }
    }).then((res) =>{
      setTrip(res.data.trip)

    })
}

useEffect (() => {
  getTripDetail()  
  }, [])

 const decideCandidate = (approve, candidateId) =>{

const body = {  
    approve: approve      
}

axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/marivone-araujo-epps/trips/${params.tripId}/candidates/${candidateId}/decide`, body,{
  headers: {
    auth: localStorage.getItem('token')
  }
}).then((res) =>{
  alert("Sucesso")
  console.log(res)
  getTripDetail()
}).catch((err)=>{
  console.log(err)
})
}

  return (   

    <MainGrid> 
      
      <div><BackButton onClick={goBack}>Retornar</BackButton></div>
      { trip ? <CentralDetail>
        <AdmTripInfo info={trip}/>
        <AdmTripCandits 
          candidates={trip.candidates} 
          decideCandidate={decideCandidate}
        />
       </CentralDetail> : <h3>Carregando...</h3>}
    </MainGrid>   

  )
}

export default  AdmDetails;




