import {interestConversion} from './conversions/unitConversions';
import StockReturn from '../Components/stockReturn';

// export const stockHPRCalculation = stockObj => {
//   stockObj.result = 0;
//   stockObj.beg
//   return stockObj.result;
// }

export const stockHPRCalculation = stockObj => {
  const result = (stockObj.endPrice - stockObj.begPrice)/stockObj.begPrice
  const roundedResult = result.toFixed(2);
  return roundedResult;
};