export const futureValue = (pv, int, yr, pmt) => {
  const intConversion = 1 + int / 100;
  let fv = 0;
  if (pmt !== 0 && pv === 0) {
    fv = futureValueOfAnnuity(pv, intConversion, yr, pmt);
  } else {
    fv = pv * Math.pow(intConversion, yr);
  }
  return fv;
};

export const futureValueOfAnnuity = (pv, int, yr, pmt) => {
  let fv = 0;
  fv = pmt * (((Math.pow(1 + int), yr) - 1) / int);
  return fv;
};
