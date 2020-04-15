import React, {useState} from 'react';
import { Button } from 'semantic-ui-react';

export default function PerformanceAttribution() {
  const [performanceResult, setperformanceResult] = useState(initialState)
  // beginning, endprices, sectors, portfolio weights, sector weights, 
  // beginning and ending prices will be for return calculations
  // security selection, sector allocation

  // This function can house the sub components
  
  
  const handleSubmit = e => {
    e.preventDefault();
    // 
    const performanceAttribution = {

    };
    // const  = stockCorrelationCalculation();
    // console.log(stockCorrelation)
    // setResult(stockCorrelation);
  };
  return(
    // need a way to add stocks to the list,
    //
    <form className='calculator-face'>
      <div className='problem'>
        {/* <InputsInForm inputs={inputs} setInputs={setInputs} /> */}

        <h1>Correlation Between Two Stocks</h1>
        <div className='inputs'>
          <span className='label'>Enter Ticker Here</span>
          <input
            className='input-value'
            name='begPrice'
            type='text'
            value={ticker1}
            onChange={e => setticker1(e.target.value)}
          />
        </div>
        <div className='inputs'>
          <span className='label'>Enter Ticker Here</span>
          <input
            className='input-value'
            name='rf'
            type='text'
            value={ticker2}
            onChange={e => setticker2(e.target.value)}
          />
        </div>
        <div className='inputs'>
          <span className='label'>Time Horizon</span>
          <input
            className='input-value'
            name='rf'
            type='text'
            value={ticker2}
            onChange={e => setticker2(e.target.value)}
          />
        </div>
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
  )
}