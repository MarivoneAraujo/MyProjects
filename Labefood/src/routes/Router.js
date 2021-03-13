import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import FirstScreen from "../pages/FirstScreen/FirstScreen";
import Feed from "../pages/Feed/Feed";
import Login from "../pages/Login/Login";
import AdressRegister from "../pages/AdressResgister/AdressRegister";
import SignUp from "../pages/SignUp/SignUp";
import BuyCart from "../pages/BuyCart/BuyCart";
import RestaurantPage from "../pages/RestaurantPage/RestaurantPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import Error from "../pages/Error/Error";
import GlobalState from "../global/globalState";

export default function Router() {
  return (
    <BrowserRouter>
      <GlobalState>
        <Switch>
          <Route exact path="/">
            <FirstScreen />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/adress-register">
            <Header />
            <AdressRegister />
          </Route>
          <Route exact path="/sign-up">
            <Header />
            <SignUp />
          </Route>
          <Route exact path="/feed">
            <Header />
            <Feed />
          </Route>
          <Route exact path="/cart">
            <BuyCart />
          </Route>
          <Route exact path="/restaurants/:restaurantId">
            <Header />
            <RestaurantPage />
          </Route>
          <Route exact path="/profile">
            <ProfilePage />
          </Route>
          <Route exact path="/edit-profile">
            <Header />
            <SignUp />
          </Route>
          <Route exact path="/edit-address">
            <Header />
            <AdressRegister />
          </Route>
          <Route>
            <Header />
            <Error />
          </Route>
        </Switch>
      </GlobalState>
    </BrowserRouter>
  );
}
