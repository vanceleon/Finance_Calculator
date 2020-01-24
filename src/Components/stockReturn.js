import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { stockHPRCalculation } from '../modules/stockReturn';

export default function StockReturn() {
  const [begPrice, setBegPrice] = useState(0);
  const [endPrice, setEndPrice] = useState(0);
  const [result, setResult] = useState(0);

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
        <h1>Stock Price Return</h1>
        <div className='inputs'>
          <span className='label'>Beginning Price</span>
          <input
            className='present-value'
            name='begPrice'
            type='number'
            placeholder='Beta'
            value={begPrice}
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
