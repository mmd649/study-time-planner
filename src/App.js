import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Timer from './components/timer'
import Log from './components/log'
import About from './components/about'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Timer} />
          <Route path='/log' component={Log} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
