import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useHistory} from "react-router-dom"
import { goToApplication } from "../Routes/Coordinator"
import { CentralTripsListPage, CardGridTripsListPage,ButtonDitsTripsListPage} from './styled/styledProject.js';

function TripsListPage() {
  const [trips, setTrips] = useState([])
  const history = useHistory()
  
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

  return (
    <CentralTripsListPage>
   {trips.map((trip) => {
            return (
            <CardGridTripsListPage onClick={() => goToApplication(history)}>
            <p>{trip.img}</p>
            <p><strong>Experiência: {trip.name}</strong></p>
            <p>Planeta: {trip.planet}</p>
	          <p>Duração: {trip.durationInDays} dias</p>
            <p>"{trip.description}"</p>
            <p>Partida: {trip.date}</p>

            <ButtonDitsTripsListPage onClick={() => goToApplication(history)}>Candidatar-se</ButtonDitsTripsListPage>              
            </CardGridTripsListPage>              
        )})}
       </CentralTripsListPage>
  );
}
export default TripsListPage;
