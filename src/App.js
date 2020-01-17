import React from 'react';
import FutureValue from './Components/futureValueCal';
import WACCInputs from './Components/waccInputs';
import Home from './Components/home'
// import NumberButtons from './Components/numberButtons';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='ui menu'>
            <a className='item'>
              <Link to='/home'>Home</Link>
            </a>
            <a className='item'>
              <Link to='/fv'>Future Value</Link>
            </a>
            <a className='item'>
              <Link to='/wacc'>WACC</Link>
            </a>
        </div>
        <Route exact path='/home'>
          <Home/>
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
