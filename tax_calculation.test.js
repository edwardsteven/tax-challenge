const calculator = require("./calculator");

/* Tax Brackets as provided in challenge documentation, can be passed in to the calculator to allow calculating of different financial years */
const brackets = [
    {   
        to: 18200,
        rate: 0
    },
    {
        to: 37000,
        rate: 19
    },
    {
        to: 90000,
        rate: 32.5
    },
    {
        to: 180000,
        rate: 37
    },
    {
        to: Infinity,
        rate: 45
    }
];


/* Test the tax calculator */
test('Will calculate for zero', () => {
    expect(calculator.calculateTax(0, brackets)).toBe(0);
})

test('Will calculate for a single dollar into the second bracket', () => {
    expect(calculator.calculateTax(18201, brackets)).toBe(0.19);
})

test('Will calculate for $37,002', () => {
    expect(calculator.calculateTax(37002, brackets)).toBe(3572.65);
})


test('Will calculate for $40,000', () => {
    expect(calculator.calculateTax(40000, brackets)).toBe(4547);
})

test('Will calculate for a large value', () => {
    expect(calculator.calculateTax(375000, brackets)).toBe(141847);
})

test('Will calculate for a part dollar', () => {
    expect(calculator.calculateTax(123000.50, brackets)).toBe(33007.19);
})



/* I wrote the same function again, but this time using array map and reduce instead of a while loop */

test('Will calculate for zero', () => {
    expect(calculator.calculateTaxWithMap(0, brackets)).toBe(0);
})

test('Will calculate for a single dollar into the second bracket', () => {
    expect(calculator.calculateTaxWithMap(18201, brackets)).toBe(0.19);
})

test('Will calculate for $37,002', () => {
    expect(calculator.calculateTaxWithMap(37002, brackets)).toBe(3572.65);
})


test('Will calculate for $40,000', () => {
    expect(calculator.calculateTaxWithMap(40000, brackets)).toBe(4547);
})

test('Will calculate for a large value', () => {
    expect(calculator.calculateTaxWithMap(375000, brackets)).toBe(141847);
})

test('Will calculate for a part dollar', () => {
    expect(calculator.calculateTaxWithMap(123000.50, brackets)).toBe(33007.19);
})




/* Test the super calculator */

test('Will calculate for zero', () => {
    expect(calculator.calculateSuper(0)).toBe(0);
})

test('Will calculate for 20000', () => {
    expect(calculator.calculateSuper(20000)).toBe(1900);
})

test('Test will calculate for a large value', () => {
    expect(calculator.calculateSuper(375000)).toBe(35625);
})