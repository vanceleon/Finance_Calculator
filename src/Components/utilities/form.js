import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';

// initialState will be an obj containing all input data
// initialState = {
//   header: Testing
//   inputs:[{title: Title, value: Value}],
//   result:
// }

export default function InputForm() {
  const [inputObj, setinputObj] = useState(initialState);

  return (
    <form className='calculator-face'>
      <div className='problem'>
        <h1>{inputObj.header}</h1>
        {inputObj.inputs.map(input => {
          return (
            <div className='inputs'>
              <span className='label'>{input.title}</span>
              <input
                className='present-value'
                name='begPrice'
                type='number'
                placeholder='Beta'
                value={input.value}
                onChange={e => setinputObj(e.target.value)}
              />
            </div>
          );
        })}
        <div className='result'>
          <Button
            onClick={e => {
              handleSubmit(e);
            }}
          >
            Calculate
          </Button>
          <div className='calculated-result'>{inputObj.result}</div>
        </div>
      </div>
    </form>
  );
}
