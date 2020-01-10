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
  
  // const onChange = e => {
  //   e.preventDefault();
  //   setInput({inpute.target.name:e.target.value});
  //   console.log(input)
  // }

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(e.target);
    const costOfEquity = weightedAverageCostOfCapital(rf, beta, rm)
    // console.log(wacc)
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
        <h1>Cost of Debt</h1>
      </form>
   
  );
}
