import React, { useState } from 'react';

export default function Inputs() {
  return (
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
  );
}
