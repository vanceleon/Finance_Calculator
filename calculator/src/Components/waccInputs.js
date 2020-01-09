import React, { useState } from 'react';

const initialState = {
  beta: 0,
  rf: 0,
  rm: 0,
  wacc:0
}

export default function WACCInputs() {
  const [input, setInput] = useState(initialState);


  const handleSubmit = e => {
    e.preventDefault();
    
  }

  return (
      <form className='calculator-face'>
        <div className='pv'>
          <span className='label'>Beta</span>
          <input
            className='present-value'
            name='pv'
            type='number'
            placeholder='Beta'
            // value={this.state.pv}
            // onChange={thisonChange}
          />
        </div>
        <div className='interest-rates'>
          <span className='label'>Risk Free Rate</span>
          <input
            className='interest-rate'
            name='int'
            type='number'
            placeholder='Risk Free Rate'
          />
        </div>
        <div className='years'>
          <span className='label'>Market Return</span>
          <input
            className='term-length'
            name='years'
            type='number'
            placeholder='Market Return'
            // value={this.state.years}
            // onChange={this.onChange}
          />
        <div className="result" onClick={e=> {
          handleSubmit(e)
        }}>
          =
        </div>
        </div>
        <div className="answer">
          input.wacc
        </div>

      </form>
   
  );
}
