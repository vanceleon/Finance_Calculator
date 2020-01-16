import React from 'react';
import FutureValue from './Components/futureValueCal';
import WACCInputs from './Components/waccInputs';
// import NumberButtons from './Components/numberButtons';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
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
      <div className='App'>
        <h1>Future Value Calculator</h1>
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
