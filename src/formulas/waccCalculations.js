export const weightedAverageCostOfCapital = (rf, beta, rm) => {
  const convertedRF = interestConversion(rf);
  const convertedRM = interestConversion(rm);
  console.log(convertedRF)
  console.log(convertedRM)
  const costOfEquity = convertedRF + beta * (convertedRM - convertedRF)
  console.log(beta)
// currently only solving for cost of equity
  return costOfEquity;
}

const interestConversion = interest => {
  const interestConversion = (interest / 100);
  return interestConversion;
}
