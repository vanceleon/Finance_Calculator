import React from 'react';
import FutureValue from './Components/futureValueCal'
import WACCInputs from './Components/waccInputs';
import NumberButtons from './Components/numberButtons';

import './App.css';



function App() {
  return (
    <div className="App">
      <h1>Future Value Calculator</h1>
      <FutureValue/>
      <WACCInputs/>
      <NumberButtons />

    </div>
  );
}

export default App;
