const leapYear = require('./leapYear');


test(' : ', () => {
    expect(leapYear(2016)).toBe(true);
    expect(leapYear(2000)).toBe(true);
    expect(leapYear(1700)).toBe(false);
    expect(leapYear(1800)).toBe(false);
    expect(leapYear(100)).toBe(false);  
})