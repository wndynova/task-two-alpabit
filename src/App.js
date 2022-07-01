import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';

import Home from './pages/Home';
import EditContact from './pages/EditContact';
import {AddContact} from './pages/AddContact';


const App=() => {
  return (
    <GlobalProvider>
      <div className='App'>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddContact} exact />
          <Route path="/edit/:id" component={EditContact} exact />
        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default App;
