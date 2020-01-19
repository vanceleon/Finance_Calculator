import React, { useState } from 'react';

export default function StockReturn() {
  const [begPrice, setBegPrice] = useState(0);
  const [endPrice, setendPrice] = useState(0);

  return (
    <form className='calculator-face'>
      <div className='problem'>
        <h1>Cost of Equity</h1>
        <div className='inputs'>
          <span className='label'>Beta</span>
          <input
            className='present-value'
            name='beta'
            type='number'
            placeholder='Beta'
            value={beta}
            onChange={e => setBeta(e.target.value)}
          />
        </div>
        <div className='inputs'>
          <span className='label'>Risk Free Rate</span>
          <input
            className='interest-rate'
            name='rf'
            type='number'
            placeholder='Risk Free Rate'
            value={rf}
            onChange={e => setRf(e.target.value)}
          />
        </div>
        <div className='inputs'>
          <span className='label'>Market Return</span>
          <input
            className='term-length'
            name='rm'
            type='number'
            placeholder='Market Return'
            value={rm}
            onChange={e => setRm(e.target.value)}
          />
        </div>
        <div className='result'>
          <Button
            onClick={e => {
              handleEquitySubmit(e);
            }}
          >
            Calculate
          </Button>
          <div className='calculated-result'>{costEquity}</div>
        </div>
      </div>
    </form>
  );
}
