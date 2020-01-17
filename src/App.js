import React from 'react';
import FutureValue from './Components/futureValueCal';
import WACCInputs from './Components/waccInputs';
// import NumberButtons from './Components/numberButtons';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
        <div className='App'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/fv'>Future Value</Link>
          </li>
          <li>
            <Link to='/wacc'>WACC</Link>
          </li>
        </ul>
      </nav>
        <h1>Future Value Calculator</h1>
        <div className='description'>
          The future value calculator can be used to calculate the future value
          (FV) of an investment with given inputs of compounding periods (N),
          interest/yield rate (I/Y), starting amount, and periodic
          deposit/annuity payment per period (PMT).
        </div>
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
