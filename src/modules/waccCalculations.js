const interestConversion = interest => {
  const interestConversion = interest / 100;
  return interestConversion;
};

export const weightedAverageCostOfCapital = WACCObj => {
  const costOfEq = costOfEquity(WACCObj);
  const costOfD = costOfDebt(WACCObj);
  console.log(costOfEq);
  console.log(costOfD);
  const wacc = costOfD * WACCObj.weightDebt + costOfEq * WACCObj.weightEquity;
  const roundedWacc = wacc.toFixed(2);
  return roundedWacc;
};

export const costOfEquity = WACCObj => {
  const convertedRF = interestConversion(WACCObj.rf);
  const convertedRM = interestConversion(WACCObj.rm);
  const costOfEq = convertedRF + WACCObj.beta * (convertedRM - convertedRF);
  const roundedCostEquity = costOfEq.toFixed(2);
  return roundedCostEquity;
};

export const costOfDebt = WACCObj => {
  const convertedInt = interestConversion(WACCObj.int);
  const convertedTaxRate = interestConversion(WACCObj.taxRate);
  const costOfD = convertedInt * (1 - convertedTaxRate);
  const roundedCostDebt = costOfD.toFixed(2);
  return roundedCostDebt;
};
