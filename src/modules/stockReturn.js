import { interestConversion } from './conversions/unitConversions';
import StockReturn from '../Components/stockReturn';

// export const stockHPRCalculation = stockObj => {
//   stockObj.result = 0;
//   stockObj.beg
//   return stockObj.result;
// }

export const stockHPRCalculation = stockObj => {
  const begPrice = interestConversion(stockObj.begPrice);
  const endPrice = interestConversion(stockObj.endPrice);
  const result = (endPrice - begPrice) / begPrice;

  return result;
};
