import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import {stockCorrelationCalculation}  from '../modules/stockCorrelationCalculation.js';

import InputsInForm from './reusableComponents/form';
// reusable code for refactoring
// const initialState = {
//   header: 'Correlation',
//   ticker1: 'AAPL',
//   ticker2: 'GOOGL',
// };

export default function Correlation() {
  const [result, setResult] = useState(0);
  const [ticker1, setticker1] = useState('AAPL');
  const [ticker2, setticker2] = useState('GOOGL');
  // const [inputs, setInputs] = useState(initialState);

  const handleSubmit = e => {
    e.preventDefault();
    const correlationObject = {
      ticker1,
      ticker2,
      result,
    };
    const stockCorrelation = stockCorrelationCalculation();
    console.log(stockCorrelation)
    setResult(stockCorrelation);
  };

  return (
    <form className='calculator-face'>
      <div className='problem'>
        {/* <InputsInForm inputs={inputs} setInputs={setInputs} /> */}

        <h1>Correlation Between Two Stocks</h1>
        <div className='inputs'>
          <span className='label'>Enter Ticker Here</span>
          <input
            className='input-value'
            name='begPrice'
            type='text'
            value={ticker1}
            onChange={e => setticker1(e.target.value)}
          />
        </div>
        <div className='inputs'>
          <span className='label'>Enter Ticker Here</span>
          <input
            className='input-value'
            name='rf'
            type='text'
            value={ticker2}
            onChange={e => setticker2(e.target.value)}
          />
        </div>
        <div className='inputs'>
          <span className='label'>Time Horizon</span>
          <input
            className='input-value'
            name='rf'
            type='text'
            value={ticker2}
            onChange={e => setticker2(e.target.value)}
          />
        </div>
        <div className='result'>
          <Button
            onClick={e => {
              handleSubmit(e);
            }}
          >
            Calculate
          </Button>
          <div className='calculated-result'>{result}</div>
        </div>
      </div>
    </form>
  );
}
// }
