import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Beer from './Beer';


function App(){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Beer} />
      </Switch>
    </div>
  );
}

export default App;
