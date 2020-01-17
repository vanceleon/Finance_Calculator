import React, { useState } from 'react';

export default function Home() {
  // const [press, setPress] = useState(false);

  return (
    <div className='home'>
      <h1>Future Value Calculator</h1>
      <div className='description'>
        <div className="sub-description">
        The future value calculator can be used to calculate the future value
        (FV) of an investment with given inputs of compounding periods (N),
        interest/yield rate (I/Y), starting amount, and periodic deposit/annuity
        payment per period (PMT).

        </div>
        <div className="sub-description">
        WACC is the average after-tax cost of a company’s various capital sources, including common stock, preferred stock, bonds, and any other long-term debt. In other words, WACC is the average rate a company expects to pay to finance its assets. 
        </div>
      </div>
    </div>
  );
}
