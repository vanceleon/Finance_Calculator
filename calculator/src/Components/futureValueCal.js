import React from 'react';
import { futureValue } from '../formulas/calculations';

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


  onChange = (ev) => {
    this.setState({[ev.target.name]: ev.target.value});
  };

  onSubmit = (ev) => {
    // console.log()
    // const variables = {
    //   pv: this.
    // };
    // this.setState({pv})
    console.log("possible multiple values", ev);
    console.log("PV", this.state.pv);
    console.log("INT", this.state.int);
    const fv = futureValue(this.state.pv, this.state.int, this.state.years);
    this.setState({futureVal: fv})
  }

  render() {
    return (
      <form>
        <h1>Calculator:</h1>
        <span className="label">PV</span>
        <input
          className='present-value'
          name='pv'
          type='number'
          placeholder='Present Value'
          value={this.state.pv}
          onChange={this.onChange}
        />
        
        <span className="label">Interest Rate</span>
        <input
          className='interest-rate'
          name='int'
          type='number'
          placeholder='Interest (APR)'
          value={this.state.int}
          onChange={this.onChange}
        />
        
        <span className="label">Years</span>
        <input
          className='term-length'
          name='years'
          type='number'
          placeholder='Years'
          value={this.state.years}
          onChange={this.onChange}
        />
        
        <span className="label">PMT</span>
        <input
          className='pmt'
          name='years'
          type='number'
          placeholder='Years'
          value={this.state.years}
          onChange={this.onChange}
        />
        <div className="future-value-cal" onClick={event => this.onSubmit(event)}>
          Cal Future Value
        </div>
        <div className="future-value">{this.state.futureVal}</div>
      </form>
    );
  }
}

export default FutureValue;
