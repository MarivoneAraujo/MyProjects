import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import axios from "axios"
import {useHistory} from "react-router-dom"
import {useParams} from "react-router-dom"
import {goToAdmDetails} from '../Routes/Coordinator'
import {goToCreate}from '../Routes/Coordinator'
import AdmDetails from './AdmDetails'

const MainGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1.4fr 1fr;

`
const ButtonCreate = styled.button`
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
`
const CardGrid = styled.div`
font-family: monospace;
width: 300px;
height: 150px;
margin: 50px;
padding: 30px;
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
`
const Titulo = styled.div`
font-family: monospace;
font-size: 25px;
width: 300px;
margin: 30px;
padding-left: 75px;
`
const Trips = styled.div`
font-size: 20px;
color: white;
`
const ButtonTripDetails = styled.button`
font-family: monospace;
background-color: white;

:hover{
  cursor: pointer;
  color: blue;
  transform: scale(1.2);
}
`
function TripDetails() {

  const [trips, setTrips] = useState([])
  const history = useHistory() 
 
  const pathParams = useParams()

  useEffect (() => {
    axios.get ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/marivone-araujo-epps/trips')
    .then((response) =>{
      // goToAdmDetails()
      setTrips(response.data.trips)
      console.log(response.data.trips)
    })
    .catch((err) =>{
          console.log(err)
          alert ("Aconteceu um probleminha..." + err)
        })

  }, [])

  

  const goToAdmDetails = (history, trip) => {
    history.push (`/trips/AdmDetails/${trip}`)
  }

  return (

    <MainGrid>

    <div><ButtonCreate onClick={()=>goToCreate(history)}>Criar Viagem</ButtonCreate></div>
    
    <div>
    <Titulo><strong> Lista de Viagens </strong></Titulo>
      <Trips >
   {trips.map((trip) => {
            return (
            <div>
              <CardGrid onClick={()=>goToAdmDetails(history, trip.id)}>{trip.name}
              <p></p>              
              +Clique para detalhes
              </CardGrid>
              
            </div>              
        )})}     
      
       </Trips>
      </div>


    </MainGrid>


  );
}

export default TripDetails;
