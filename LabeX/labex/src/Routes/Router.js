import React from 'react'
import Application from '../Components/ApplicationFormPage'
import HomePage from '../Components/HomePage'
import LoginPage from '../Components/LoginPage'
import TripDetailsPage from '../Components/TripDetailsPage'
import TripsListPage from '../Components/TripsListPage'
import Header from '../Components/Header'
import CreateTripPage from '../Components/CreateTripPage'
import About from '../Components/About'
import AdmDetails from '../Components/AdmDetails'
import { BrowserRouter, Switch, Route } from "react-router-dom";



function router() {

  

  return (
    < div>
    
    <BrowserRouter>
    <Header />
        <Switch>                
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/Login">
            <LoginPage />
          </Route>

          <Route exact path="/trips/list">
            <TripsListPage />
          </Route>
        
          <Route exact path="/Cadastro">
            <Application />
          </Route>

          <Route exact path="/Sobre">
            <About />
          </Route>

          <Route exact path="/trips/details">
            <TripDetailsPage />
          </Route>

          <Route exact path="/trips/create">
            <CreateTripPage />
          </Route>

          <Route exact path={"/trips/AdmDetails/:tripId"}>
            <AdmDetails />
          </Route>

          
      </Switch>
    </BrowserRouter>    
    </div>
  );
}

export default router;
