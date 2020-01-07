import React, { useState } from 'react';

const initialState = {
  beta: 0,
  rf: 0,
  rm: 0,
}

export default function WACCInputs() {
  const [input, setInput] = useState(initialState);

  return (
      <form className='cash-flow-inputs'>
        <div className='pv'>
          <span className='label'>Beta</span>
          <input
            className='present-value'
            name='pv'
            type='number'
            placeholder='Present Value'
            value={this.state.pv}
            onChange={thisonChange}
          />
        </div>
        <div className='interest-rates'>
          <span className='label'>Risk Free Rate</span>
          <input
            className='interest-rate'
            name='int'
            type='number'
            placeholder='Interest (APR)'
            value={this.state.int}
            onChange={this.onChange}
          />
        </div>
        <div className='years'>
          <span className='label'>Years</span>
          <input
            className='term-length'
            name='years'
            type='number'
            placeholder='Years'
            value={this.state.years}
            onChange={this.onChange}
          />
        </div>

      </form>
   
  );
}
