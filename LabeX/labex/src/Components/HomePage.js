import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {useHistory} from "react-router-dom"
import {goToTripsList} from '../Routes/Coordinator'



const Main = styled.div`
height: 2000px;

`
const MainIMG = styled.img`
/* margin-top: -140px; */
width: 100%;
`
const SearchTrip = styled.input`
font-family: monospace;
background-image: url('https://i.imgur.com/m5OPwOk.png');
background-position: 99%;
background-repeat: no-repeat;
background-size:3.5%;
width: 800px;
height: 25px;
margin-left: 18%;
margin-top: 30px;
margin-bottom: 30px;
border-top: none;
border-left: none;
border-right: none;
:hover{
  cursor: pointer;
}

@media (min-width:500px) and (max-width: 800px) {
  width: 400px;
  margin-left: 50px;

  };
@media (max-width: 499px) {
  width: 100px;
}

};

`
const Contador = styled.div`
margin-left: 320px;
font-size: 20px;
font-family: monospace;

@media (min-width:500px) and (max-width: 800px) {
  margin-left: 10px;

  };
@media (max-width: 499px) {
  margin-left: 10px;
  text-align: center;
}

`
const GridTrips = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;

@media (min-width:500px) and (max-width: 800px) {
display: grid;
grid-template-columns: 1fr ;
margin-left: -60px;

  };
@media (max-width: 499px) {
display: grid;
grid-template-columns: 1fr ;

};

`
const CardGrid = styled.div`
font-family: monospace;
width: 300px;
height: 200px;
margin: 25px;
padding: 5px; 

padding-left: 50px;
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
  transform: scale(1.1);
} 


@media (min-width:500px) and (max-width: 800px) {
  margin-left: 150px;

  };
@media (max-width: 499px) {
  margin-right: 10px;
}

`
const ButtonDetails = styled.button`
font-family: monospace;
background-color: white;
:hover{
  cursor: pointer;
  color: blue;
  transform: scale(1.2);
} 
`
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

