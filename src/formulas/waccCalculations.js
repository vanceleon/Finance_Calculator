const interestConversion = interest => {
  const interestConversion = interest / 100;
  return interestConversion;
};
// need to import and assign values to this obj
const WACCObj = {};

export const assigningWACCObj = (
  weightOfDebt,
  weightOfEquity,
  rf,
  beta,
  rm,
  int,
  taxRate
) => {
  WACCObj = {
    weightOfDebt,
    weightOfEquity,
    rf,
    beta,
    rm,
    int,
    taxRate
  };
  if(WACCObj.weightOfDebt) {
    return weightedAverageCostOfCapital(WACCObj);
  }else if(WACCObj.rf) {
    return costOfEquity(WACCObj)
  }else {
    return costOfEquity(WACCObj)
  }
};

export const weightedAverageCostOfCapital = WACCObj => {
  const costOfEq = costOfEquity(WACCObj.rf, WACCObj.beta, WACCObj.rm);
  const costOfD = costOfDebt(WACCObj.int, WACCObj.taxRate);
  const WACC =
    costOfD * WACCObj.weightOfDebt + costOfEq * WACCObj.weightOfEquity;
  return WACC;
};

const costOfEquity = (WACCObj) => {
  const convertedRF = interestConversion(WACCObj.rf);
  const convertedRM = interestConversion(WACCObj.rm);
  const costOfEq = convertedRF + WACCObj.beta * (convertedRM - convertedRF);
  return costOfEq;
};

export const costOfDebt = (WACCObj) => {
  const convertedInt = interestConversion(WACCObj.int);
  const costOfD = convertedInt * (1 + WACCObj.taxRate);
  return costOfD;
};
