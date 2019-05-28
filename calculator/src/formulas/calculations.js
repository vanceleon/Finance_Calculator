
export const futureValue = (pv, int, yr, pmt) => {
    const intConversion = (1 + int / 100)
    let fv = 0;
    if(pmt != 0) {

    } 
    fv = pv*(Math.pow(intConversion, yr))
    return fv;
}

export const futureValueOfAnnuity = (pv, int, yr, pmt) => {
    
}