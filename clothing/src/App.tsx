import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';

const HatsPage = () => ( <div>
  <h1>Hats Page</h1>
</div>)

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <HomePage/>
      </Route>
      <Route exact path='/hats'>
        <HatsPage/>
      </Route>
    </Switch>
  );
}

export default App;
