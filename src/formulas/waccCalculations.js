const interestConversion = interest => {
  const interestConversion = interest / 100;
  return interestConversion;
};

export const weightedAverageCostOfCapital = (weightOfDebt, weightOfEquity) => {
  // const weight
  // const weightedCostOfDebt = weightOfDebt * costOfD;
};

const costOfEquity = (rf, beta, rm) => {
  const convertedRF = interestConversion(rf);
  const convertedRM = interestConversion(rm);
  const costOfEq = convertedRF + beta * (convertedRM - convertedRF);
};

export const costOfDebt = (int, taxRate) => {
  const convertedInt = interestConversion(int);
  const costOfD = convertedInt * (1 + taxRate);
  return costOfD;
};
