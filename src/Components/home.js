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
        <div className="sub-description">
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </div>
      </div>
    </div>
  );
}
