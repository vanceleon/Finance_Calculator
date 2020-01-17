import React from 'react';
import FutureValue from './Components/futureValueCal';
import WACCInputs from './Components/waccInputs';
import Home from './Components/home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='ui menu'>
          <Link className='item' to='/'>
            Home
          </Link>
          <Link className='item' to='/fv'>
            Future Value
          </Link>
          <Link className='item' to='/wacc'>
            WACC
          </Link>
        </div>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/fv'>
          <FutureValue />
        </Route>
        <Route path='/wacc'>
          <WACCInputs />
        </Route>
        {/* <NumberButtons /> */}
      </div>
    </Router>
  );
}

export default App;
