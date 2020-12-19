import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import '@/assets/scss/App.scss';

import Navbar from '@/components/pages/Navbar';
import Home from '@/components/pages/Home';
import Setting from '@/components/pages/Setting';
import Prepare from '@/components/pages/Prepare';
import Ingame from '@/components/pages/Ingame';
import Result from '@/components/pages/Result';
import Rank from '@/components/pages/Rank';

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const navToggle = state => {
    setIsActive(state);
  };
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar isActive={isActive} hook={navToggle} />
        <main className={isActive ? 'active' : 'deactive'}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Prepare" exact component={Prepare} />
            <Route path="/setting" exact component={Setting} />
            <Route path="/ingame" exact component={Ingame} />
            <Route path="/result" exact component={Result} />
            <Route path="/rank" exact component={Rank} />
            <Redirect path="*" to="/" />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
