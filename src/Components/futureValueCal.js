import React from 'react';
import { futureValue } from '../modules/calculations';

import { Button } from 'semantic-ui-react';
// import NumberButtons from './numberButtons.js';

class FutureValue extends React.Component {
  constructor() {
    super();
    this.state = {
      pv: 0,
      int: 0,
      years: 0,
      pmt: 0,
      futureVal: 0,
      period: false
    };
  }

  onChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  onSubmit = () => {
    const fv = futureValue(
      this.state.pv,
      this.state.int,
      this.state.years,
      this.state.pmt,
      this.state.period
    );
    this.setState({ futureVal: fv });
  };

  beginPeriod = () => {
    this.setState({ period: true });
  };
  endPeriod = () => {
    this.setState({ period: false });
  };

  render() {
    const { active } = this.state;
    return (
      <div className='calculator-face'>
        <form className='problem'>
          {/* <h1>Calculator:</h1> */}
          <div className='inputs'>
            <span className='label'>PV</span>
            <input
              className='input-value'
              name='pv'
              type='number'
              placeholder='Present Value'
              value={this.state.pv}
              onChange={this.onChange}
            />
          </div>
          <div className='inputs'>
            <span className='label'>Interest Rate</span>
            <input
              className='input-value'
              name='int'
              type='number'
              placeholder='Interest (APR)'
              value={this.state.int}
              onChange={this.onChange}
            />
          </div>
          <div className='inputs'>
            <span className='label'>Years</span>
            <input
              className='input-value'
              name='years'
              type='number'
              placeholder='Years'
              value={this.state.years}
              onChange={this.onChange}
            />
          </div>
          <div className='inputs'>
            <span className='label'>PMT</span>
            <input
              className='input-value'
              name='pmt'
              type='number'
              placeholder='PMT'
              value={this.state.pmt}
              onChange={this.onChange}
            />
          </div>
        </form>
        <div className='buttons'>
          <Button className='result' onClick={event => this.beginPeriod()}>
            Beginning Period
          </Button>
          <Button className='result' onClick={event => this.endPeriod()}>
            Ending Period
          </Button>
        </div>

        <div className='result'>
          <Button
            className='result'
            onClick={event => this.onSubmit(event)}
          >
            Calculate
          </Button>
          <div className='calculated-result'>{this.state.futureVal}</div>
        </div>
      </div>
    );
  }
}

export default FutureValue;
