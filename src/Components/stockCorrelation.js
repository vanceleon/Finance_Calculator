import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { stockCorrelationCalculation } from '../modules/stockCorrelationCalculation.js';

import InputsInForm from './reusableComponents/form';
// reusable code for refactoring
// const initialState = {
//   header: 'Correlation',
//   ticker1: 'AAPL',
//   ticker2: 'GOOGL',
// };


const today = new Date(Date.now());
const past = new Date(Date.now()).setDate(new Date(Date.now()).getDate()-30) //static 30 days behind the start date, can change later
const pastDate = new Date(past);
const startDates = [today, pastDate]

export default function Correlation() {
  const [result, setResult] = useState(0);
  const [ticker1, setticker1] = useState('AAPL');
  const [ticker2, setticker2] = useState('GOOGL');
  const [dates, setDates] = useState(startDates);
  // const [inputs, setInputs] = useState(initialState);

  const handleSubmit = e => {
    e.preventDefault();
    const correlationObject = {
      ticker1,
      ticker2,
      dates,
      result,
    };
    const stockCorrelation = stockCorrelationCalculation();
    console.log(stockCorrelation);
    setResult(stockCorrelation);
  };
console.log(startDates)
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
          <span className='label'>Time Period</span>
          {/* preset periods 5 D, 3 M, 6 M, YTD, 1, 5*/}
          {/* will need to check data to verify that each stock has the same amount of data points */}
          {/* if not then take the shorter of the two lengths and use that */}
          <input
            className='input-value'
            name='rf'
            type='text'
            value={dates[0]}
            onChange={e => setDates(e.target.value)}
          />
          <span className='label'>Frequency</span>
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
