import React, { useState } from 'react';
import '../modules/waccCalculations';

export default function WACCInputs() {
  // Cost of Equity
  const [beta, setBeta] = useState(0);
  const [rm, setRm] = useState(0);
  const [rf, setRf] = useState(0);
  const [costOfEquity, setCostOfEquity] = useState(0);
  
  // Cost of Debt
  const [int, setInt] = useState(0);
  const [taxRate, setTaxRate] = useState(0);
  const [costOfDebt, setCostOfDebt] = useState(0);
  
  // Weighted Average Cost of Capital
  const [weightEquity, setEquityWeight] = useState(0);
  const [weightDebt, setDebtWeight] = useState(0);
  const [wacc, setWACC] = useState(0);
  
  
  const handleSubmit = e => {
    e.preventDefault();
    const WACCObj = {
      weightDebt,
      weightEquity,
      rf,
      beta,
      rm,
      int,
      taxRate
    };
    if (WACCObj.weightOfDebt) {
      const wacc = weightedAverageCostOfCapital(WACCObj);
      setWACC(wacc)
    } else if (WACCObj.rf) {
      
    } else {
      
    }
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
        <div className='pv'>
          <span className='label'>Interest Rate</span>
          <input
            className='present-value'
            name='int'
            type='number'
            placeholder='Interest Rate'
            value={int}
            onChange={e => setInt(e.target.value)}
          />
        </div>
        <div className='interest-rates'>
          <span className='label'>Tax Rate</span>
          <input
            className='interest-rate'
            name='taxRate'
            type='number'
            placeholder='Tax Rate'
            value={taxRate}
            onChange={e => setTaxRate(e.target.value)}
          />
        </div>
 
        <div className="result" onClick={e=> {
          handleSubmit(e)
        }}>
          =
        </div>
        <div className="answer">
          {costOfDebt}
        </div>
        <div className='pv'>
          <span className='label'>Weight of Equity</span>
          <input
            className='present-value'
            name='weightEquity'
            type='number'
            placeholder='Weight of Equity'
            value={weightEquity}
            onChange={e => setEquityWeight(e.target.value)}
          />
        </div>
        <div className='interest-rates'>
          <span className='label'>Weight of Debt</span>
          <input
            className='interest-rate'
            name='weightDebt'
            type='number'
            placeholder='Weight of Debt'
            value={weightDebt}
            onChange={e => setDebtWeight(e.target.value)}
          />
        </div>
        <div className="result" onClick={e=> {
          handleSubmit(e)
        }}>
          Calculate Weighted Average Cost of Capital
        </div>
        <div className="answer">
          {wacc}
        </div>
      </form>
   
  );
}
