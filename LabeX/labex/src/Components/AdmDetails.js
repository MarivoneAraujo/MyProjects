import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {useHistory} from "react-router-dom"
import {useParams} from "react-router-dom"
import AdmTripCandits from './AdmTripCandits'
import AdmTripInfo from './AdmTripInfo'
import axios from 'axios'


const MainGrid = styled.div`
display: grid;
grid-template-columns: 1fr 2fr;
`

const BackButton = styled.button`
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
  font-size: 15px;
  width: 100px;
  margin: 60px;
  margin-top: 150px;

}

@media (max-width: 499px) {
  font-size: 15px;
  width: 100px;
  margin: 10px;
  margin-top: 150px;

}




`

const CentralDetail = styled.div`
border: 1px solid black;
padding: 10px;
margin-top: 50px;
margin-right: 50px;
/* margin-bottom: 20px; */
`

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
      /* console.log(res.data.trip)       */
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
          /* tripId={params.tripId}  */
          decideCandidate={decideCandidate}
        />

       </CentralDetail> : <h3>Carregando...</h3>}

    </MainGrid>

    

  )
}

export default  AdmDetails;




