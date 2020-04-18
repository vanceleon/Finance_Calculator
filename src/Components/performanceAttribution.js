import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import PortfolioPerformance from './performance/portfolioPerformance';
import SectorPerformance from './performance/sectorPerformance';
import PriceInsertion from './performance/priceInsert';

export default function PerformanceAttribution() {
  const [performanceResult, setperformanceResult] = useState(initialState);
  // beginning, endprices, sectors, portfolio weights, sector weights,
  // beginning and ending prices will be for return calculations
  // security selection, sector allocation

  // This function can house the sub components

  const handleSubmit = e => {
    e.preventDefault();
    //
    const performanceAttribution = {};
    // const  = stockCorrelationCalculation();
    // console.log(stockCorrelation)
    // setResult(stockCorrelation);
  };
  return (
    // need a way to add stocks to the list,
    //
    <form className='calculator-face'>
      <div className='problem'>
        {/* <InputsInForm inputs={inputs} setInputs={setInputs} /> */}

        <h1>Performance Attribution Calculation</h1>
        <PriceInsertion/>
        <PortfolioPerformance/>
        <SectorPerformance/>
        <div className='result'>
          <Button
            onClick={e => {
              handleSubmit(e);
            }}
          >
            Calculate
          </Button>
          <div className='calculated-result'>{result}</div>
        </div>
      </div>
    </form>
  );
}
