import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import {stockCorrelationFunc} from '../modules/correlation';

export default function Correlation() {
  const [result, setResult] = useState(0);
  const [ticker1, setticker1] = useState("AAPL")
  const [ticker2, setticker2] = useState("GOOGL")

  const handleSubmit = e => {
    e.preventDefault();
    const stockCorrelationObj = {
      ticker1,
      ticker2,
      result
    };
    const stockCorrelation = stockCorrelationFunc(stockCorrelationObj);
    setResult(stockCorrelation);
  };

  return (
    <form className='calculator-face'>
      <div className='problem'>
        <h1>Correlation Between Two Stocks</h1>
        <div className='inputs'>
          <span className='label'>Enter Ticker Here</span>
          <input
            className='present-value'
            name='begPrice'
            type='number'
            placeholder='Beta'
            value={ticker1}
            onChange={e => setticker1(e.target.value)}
          />
        </div>
        <div className='inputs'>
          <span className='label'>Enter Ticker Here</span>
          <input
            className='interest-rate'
            name='rf'
            type='number'
            placeholder='Risk Free Rate'
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
