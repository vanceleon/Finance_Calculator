export const weightedAverageCostOfCapital = (rf, beta, rm) => {
  const convertedRF = interestConversion(rf);
  const convertedRM = interestConversion(rm);
  const costOfEquity = convertedRF + beta * (convertedRM - convertedRF)

  return costOfEquity;
}

const interestConversion = interest => {
  const interestConversion = (interest / 100);
  return interestConversion;
}
