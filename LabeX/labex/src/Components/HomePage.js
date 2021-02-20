import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {useHistory} from "react-router-dom"
import {goToTripsList} from '../Routes/Coordinator'
import { Main, MainIMG, SearchTrip, Contador, GridTrips, CardGrid,ButtonDetails } from './styled/styledProject.js';


function HomePage() {
  const [trips, setTrips] = useState([])
  const [textInput, setTextInput] =  useState("") 
  const history = useHistory()
  const handleTextInput = (e) =>{
    setTextInput(e.target.value)    
  }  
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
  

  const filteredTrips = trips.filter(trip => trip.name.includes(textInput))

  return (
    <Main>
    
      <MainIMG src = "https://cdn.pixabay.com/photo/2016/10/30/20/22/astronaut-1784245_1280.jpg"/>
        <SearchTrip type="text" placeholder= "Qual planeta você sonha conhecer?" onChange={handleTextInput} value={textInput}/>
          <Contador><i>Temos <strong>{filteredTrips.length}</strong> experiências inesquecíveis esperando por você!</i></Contador>

      <GridTrips>
          
        {filteredTrips.map((trip) => {
            return (
            <CardGrid  onClick={() => goToTripsList(history)}>
            <p>{trip.img}</p>
            <p><strong>{trip.name}</strong></p>
            <p>Planeta:{trip.planet}</p>
	          <p>{trip.durationInDays} dias</p>
            <p>Partida:{trip.date}</p>
              <ButtonDetails onClick={() => goToTripsList(history)}><strong>+Detalhes</strong></ButtonDetails>              
            </CardGrid>              
        )})}          
      </GridTrips>      
    </Main>
  );
}
export default HomePage;

