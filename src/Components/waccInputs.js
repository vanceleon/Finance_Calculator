import React, { useState } from 'react';
import {weightedAverageCostOfCapital} from '../formulas/waccCalculations';

// const initialState = {
//   beta: 0,
//   rf: 0,
//   rm: 0,
//   wacc:0
// }

export default function WACCInputs() {
  const [beta, setBeta] = useState(0);
  const [rm, setRm] = useState(0);
  const [rf, setRf] = useState(0);
  const [costOfEquity, setCostOfEquity] = useState(0);
  const [costOfDebt, setCostOfDebt] = useState(0);
  
  const handleSubmit = e => {
    e.preventDefault();
    const costOfEquity = weightedAverageCostOfCapital(rf, beta, rm);
    setCostOfEquity(costOfEquity);
  }

  return (
      <form className='calculator-face'>
        <h1>Cost of Equity</h1>
        <div className='pv'>
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
        <div className='interest-rates'>
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
        <div className='years'>
          <span className='label'>Market Return</span>
          <input
            className='term-length'
            name='rm'
            type='number'
            placeholder='Market Return'
            value={rm}
            onChange={e => setRm(e.target.value)}
          />
        <div className="result" onClick={e=> {
          handleSubmit(e)
        }}>
          =
        </div>
        </div>
        <div className="answer">
          {costOfEquity}
        </div>
        {/* will put cost of debt inputs here */}
        <h1>Cost of Debt</h1>
        <div className='pv'>
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
        <div className='interest-rates'>
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
        <div className='years'>
          <span className='label'>Market Return</span>
          <input
            className='term-length'
            name='rm'
            type='number'
            placeholder='Market Return'
            value={rm}
            onChange={e => setRm(e.target.value)}
          />
        <div className="result" onClick={e=> {
          handleSubmit(e)
        }}>
          =
        </div>
        </div>
        <div className="answer">
          {costOfDebt}
        </div>
      </form>
   
  );
}
