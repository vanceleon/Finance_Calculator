// function roundTo(n, digits) {
//     if (digits === undefined) {
//       digits = 0;
//     }

//     var multiplicator = Math.pow(10, digits);
//     n = parseFloat((n * multiplicator).toFixed(11));
//     var test =(Math.round(n) / multiplicator);
//     return +(test.toFixed(digits));
//   }

export const futureValue = (pv, int, yr) => {
    const intConversion = (1+int/100)
    const fv = pv*(Math.pow(intConversion,yr))
    // console.log(fv)
    return fv;
}