import React from 'react';
import FutureValue from './Components/futureValueCal';
import WACCInputs from './Components/waccInputs';
import Home from './Components/home';
import StockReturn from './Components/stockReturn';
import Correlation from './Components/stockCorrelation';
import Navigation from './Components/navigation';
// import CDLadder from './Components/cdLadder';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navigation/>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/fv'>
          <FutureValue />
        </Route>
        <Route path='/wacc'>
          <WACCInputs />
        </Route>
        <Route path='/stockreturn'>
          <StockReturn />
        </Route>
        <Route path='/correlation'>
          <Correlation />
        </Route>
        {/* <Route path='/cd-ladder'>
          <CDLadder />
        </Route> */}
      </div>
    </Router>
  );
}

export default App;
