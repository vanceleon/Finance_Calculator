import React from 'react';
import { futureValue } from '../formulas/calculations';
import { NumberButtons } from './numberButtons.js';

class FutureValue extends React.Component {
  constructor() {
    super();
    this.state = {
      pv: 0,
      int: 0,
      years: 0,
      pmt: 0,
      futureVal: 0
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
      this.state.pmt
    );
    this.setState({ futureVal: fv });
  };

  render() {
    return (
      <div className='calculator-face'>
        <form className='cash-flow-inputs'>
          <h1>Calculator:</h1>
          <div className='pv'>
            <span className='label'>PV</span>
            <input
              className='present-value'
              name='pv'
              type='number'
              placeholder='Present Value'
              value={this.state.pv}
              onChange={this.onChange}
            />
          </div>
          <div className='interest-rates'>
            <span className='label'>Interest Rate</span>
            <input
              className='interest-rate'
              name='int'
              type='number'
              placeholder='Interest (APR)'
              value={this.state.int}
              onChange={this.onChange}
            />
          </div>
          <div className='years'>
            <span className='label'>Years</span>
            <input
              className='term-length'
              name='years'
              type='number'
              placeholder='Years'
              value={this.state.years}
              onChange={this.onChange}
            />
          </div>

          {/* <span className="label">PMT</span>
        <input
          className='pmt'
          name='pmt'
          type='number'
          placeholder='PMT'
          value={this.state.pmt}
          onChange={this.onChange}
        /> */}
        </form>

        <NumberButtons />

        <div className='result'>
          <div className='label' onClick={event => this.onSubmit(event)}>
            Cal Future Value
          </div>
        </div>
        <div className='future-value'>{this.state.futureVal}</div>
      </div>
    );
  }
}

export default FutureValue;
