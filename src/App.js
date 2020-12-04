import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Navbar from '@/components/pages/Navbar';
import Home from '@/components/pages/Home';
import GamePrepare from '@/components/pages/GamePrepare';
import Ingame from '@/components/pages/Ingame';
import Result from '@/components/pages/Result';
import Rank from '@/components/pages/Rank';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gameprepare" exact component={GamePrepare} />
        <Route path="/ingame" exact component={Ingame} />
        <Route path="/result/:resultState" exact component={Result} />
        <Route path="/rank" exact component={Rank} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
