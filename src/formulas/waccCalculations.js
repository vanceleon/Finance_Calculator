const interestConversion = interest => {
  const interestConversion = interest / 100;
  return interestConversion;
};
// need to import and assign values to this obj
const WACCObj = {
  weightOfDebt,
  weightOfEquity,
  rf,
  beta,
  rm,
  int,
  taxRate
};

export const weightedAverageCostOfCapital = WACCObj => {
  const costOfEq = costOfEquity(WACCObj.rf, WACCObj.beta, WACCObj.rm);
  const costOfD = costOfDebt(WACCObj.int, WACCObj.taxRate);
  const WACC =
    costOfDebt * WACCObj.weightOfDebt + costOfEq * WACCObj.weightOfEquity;
  return WACC;
};

const costOfEquity = (rf, beta, rm) => {
  const convertedRF = interestConversion(rf);
  const convertedRM = interestConversion(rm);
  const costOfEq = convertedRF + beta * (convertedRM - convertedRF);
  return costOfEq;
};

export const costOfDebt = (int, taxRate) => {
  const convertedInt = interestConversion(int);
  const costOfD = convertedInt * (1 + taxRate);
  return costOfD;
};
