import React from 'react';
// import { Button /} from 'semantic-ui-react';

export default function InputsInForm(props) {
  return (
    <React.Fragment>
      <h1>{props.inputs.header}</h1>
      {/* {props.inputs.map(input => {
        return (
          <div className='inputs'>
            <span className='label'>{input.title}</span>
            <input
              className='input-value'
              type={input.type}
              placeholder='Beta'
              value={input.value}
              onChange={e => props.setinputObj(e.target.value)}
            />
          </div>
        );
      })} */}
    </React.Fragment>
  );
}

// export default InputForm;