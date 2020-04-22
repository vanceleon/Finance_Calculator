import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';

const portfolioOfSecurities = [
  { date: '4/21/2020', securities: { ticker: 'AAPL' } },
  { date: '3/21/2020', securities: { ticker: 'AAPL' } },
  { date: '2/21/2020', securities: { ticker: 'AAPL' } },
  { date: '1/21/2020', securities: { ticker: 'AAPL' } },
];

export default function PortfolioPerformance() {
  const [stockReturn, setstockReturn] = useState(initialState);

  return (
  <React.Fragment>
    will need to loop and add to it like a list
  </React.Fragment>);
}
