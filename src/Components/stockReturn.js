import React, { useState } from 'react';

export default function StockReturn() {
  const [begPrice, setBegPrice] = useState(0);
  const [endPrice, setendPrice] = useState(0);

  return (
    <div className='return-container'>
      this is where I will cal stock returns
    </div>
  );
}
