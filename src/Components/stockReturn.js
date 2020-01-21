import React, { useState } from 'react';
import {Button} from 'semantic-ui-react';

export default function StockReturn() {
  const [begPrice, setBegPrice] = useState(0);
  const [endPrice, setEndPrice] = useState(0);
  const [stockReturn, setStockReturn] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
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
          <div className='calculated-result'>{stockReturn}</div>
        </div>
      </div>
    </form>
  );
}
