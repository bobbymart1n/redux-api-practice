import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Picture from './Picture';


function App(){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Picture} />
      </Switch>
    </div>
  );
}

export default App;
