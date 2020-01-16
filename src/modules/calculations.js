export const futureValue = (pv, int, yr, pmt, period) => {
  const intConversion = int / 100;
  let fv = 0;
  if (pmt !== 0 && pv === 0) {
    fv = futureValueOfAnnuity(pv, intConversion, yr, pmt, period);
  } else if (pmt !== 0 && pv !== 0) {
    fv = futureValueOfAnnuity(pv, intConversion, yr, pmt, period);
  } else {
    fv = futureValueOfPresentValue(pv, intConversion, yr);
  }
  return fv;
};

// creating separate function to keep dry code
export const futureValueOfPresentValue = (pv, int, yr) => {
  let fv = 0;
  let roundFV;
  fv = pv * Math.pow(1 + int, yr);
  // console.log(fv)
  roundFV = fv.toFixed(2);
  return roundFV;
};

// formula needs to be corrected
export const futureValueOfAnnuity = (pv, int, yr, pmt, period) => {
  let roundFV;
  const compoundingCashFlows = { result: 0 };
  if (pv && period) {
    //this calculates beginning period value
    // if pv is given needs to be a CF problem
    let i = yr;
    while (i >= 1) {
      const interestMultiplier = Math.pow(1 + int, 1);
      pv = parseInt(pv, 10);
      pmt = parseInt(pmt, 10);
      if (i === yr) {
        const initialCashFlow = pv + pmt;
        compoundingCashFlows.result = initialCashFlow * interestMultiplier;
      } else if (i < yr) {
        compoundingCashFlows.result += pmt;
        let beginningPeriodCashFlow =
          compoundingCashFlows.result * interestMultiplier;

        compoundingCashFlows.result = beginningPeriodCashFlow;
      }
      i--;
    }
  } else if (pv && !period) {
    let i = yr;
    while (i >= 1) {
      const interestMultiplier = Math.pow(1 + int, 1);
      pv = parseInt(pv, 10);
      pmt = parseInt(pmt, 10);
      if (i === yr) {
        const initialCashFlow = pv; //pmt comes in at end of the period
        compoundingCashFlows.result = initialCashFlow * interestMultiplier;
        compoundingCashFlows.result += pmt;
      } else if (i < yr) {
        let endPeriodCashFlow =
        compoundingCashFlows.result * interestMultiplier;
        endPeriodCashFlow += pmt;
        compoundingCashFlows.result = endPeriodCashFlow;
      }
      i--;
    }
  }else if (!pv && !period) {
    compoundingCashFlows.result = pmt * ((Math.pow((1+int),yr) - 1)/int); //This is end of the period calculation
  }
  roundFV = compoundingCashFlows.result.toFixed(2);
  return roundFV;
};
