const interestConversion = interest => {
  const interestConversion = interest / 100;
  return interestConversion;
};

export const weightedAverageCostOfCapital = WACCObj => {
  const costOfEq = costOfEquity(WACCObj);
  const costOfD = costOfDebt(WACCObj);
  const WACC =
    costOfD * WACCObj.weightDebt + costOfEq * WACCObj.weightEquity;
  return WACC;
};

export const costOfEquity = WACCObj => {
  const convertedRF = interestConversion(WACCObj.rf);
  const convertedRM = interestConversion(WACCObj.rm);
  const costOfEq = convertedRF + WACCObj.beta * (convertedRM - convertedRF);
  return costOfEq;
};

export const costOfDebt = WACCObj => {
  const convertedInt = interestConversion(WACCObj.int);
  const costOfD = convertedInt * (1 + WACCObj.taxRate);
  return costOfD;
};
