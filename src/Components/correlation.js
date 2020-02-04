import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';

export default function Correlation() {
  const [result, setResult] = useState(0);
  const [ticker1, setticker1] = useState(initialState)

  const handleSubmit = e => {
    e.preventDefault();
    const stockObj = {
      result,
      begPrice,
      endPrice
    };
    const stockHPR = stockHPRCalculation(stockObj);
    setResult(stockHPR);
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
            onChange={e => setBegPrice(e.target.value)}
          />
        </div>
        <div className='inputs'>
          <span className='label'>Ending Price</span>
          <input
            className='interest-rate'
            name='rf'
            type='number'
            placeholder='Risk Free Rate'
            value={endPrice}
            onChange={e => setEndPrice(e.target.value)}
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
