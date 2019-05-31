import React from 'react';

class StockReturn extends React.Component {
  constructor() {
    super();
    this.state = {
    //   will be replacing this information
        pv: 0,
      int: 0,
      years: 0,
      pmt: 0,
      futureVal: 0
    };
  }

render() {
    return (
        <div className="return-container">
            this is where I will cal stock returns
        </div>
    )
}

}

export default FutureValue;

