import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from '../Components/Header'
import Home from '../Pages/Home';
import PokeList from '../Pages/PokeList';
import PokeDetails from '../Pages/PokeDetails';


function router() {
  return (
    < div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path='/pokedetails/:name'>
              <PokeDetails />
          </Route>
          
          <Route exact path="/pokelist">
            <PokeList />
          </Route>
                    
          
          <Route>
            <div>Erro: Página não encontrada</div>
          </Route>

        </Switch>
      </BrowserRouter>
    </ div>
  );
}
export default router;