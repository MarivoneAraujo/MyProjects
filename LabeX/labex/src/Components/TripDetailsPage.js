import React, { useState, useEffect } from 'react'
import axios from "axios"
import {useHistory} from "react-router-dom"
import {useParams} from "react-router-dom"
import {goToCreate}from '../Routes/Coordinator'
import { MainGridTripDetailsPage, ButtonCreate, CardGridTripDetailsPage, Titulo, Trips} from './styled/styledProject.js';

function TripDetails() {
  const [trips, setTrips] = useState([])
  const history = useHistory()  
  const pathParams = useParams()

  useEffect (() => {
    axios.get ('https://us-central1-labenu-apis.cloudfunctions.net/labeX/marivone-araujo-epps/trips')
    .then((response) =>{
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
    <MainGridTripDetailsPage>
    <div><ButtonCreate onClick={()=>goToCreate(history)}>Criar Viagem</ButtonCreate></div>    
    <div>
    <Titulo><strong> Lista de Viagens </strong></Titulo>
      <Trips >
   {trips.map((trip) => {
            return (
            <div>
              <CardGridTripDetailsPage onClick={()=>goToAdmDetails(history, trip.id)}>{trip.name}
              <p></p>              
              +Clique para detalhes
              </CardGridTripDetailsPage>              
            </div>              
        )})}           
       </Trips>
      </div>
    </MainGridTripDetailsPage>
  );
}

export default TripDetails;
