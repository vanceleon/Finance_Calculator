import React, { useState } from 'react';

export default function Home() {
  // const [press, setPress] = useState(false);

  return (
    <div className='home'>
      <h1>Future Value Calculator</h1>
      <div className='description'>
        The future value calculator can be used to calculate the future value
        (FV) of an investment with given inputs of compounding periods (N),
        interest/yield rate (I/Y), starting amount, and periodic deposit/annuity
        payment per period (PMT).
      </div>
    </div>
  );
}
