const { sum, multiply, divide } = require('./math');

test('add 1 + 4 should be 5', () => {
  const rta = sum(1, 4);
  expect(rta).toBe(5);
});

test('5*5 should be 25', () => {
  const rta = multiply(5, 5);
  expect(rta).toBe(25);
});

test('6 / 3 should be 2', () => {
  const rta = divide(6, 3);
  expect(rta).toBe(2);
});

test('divide for zero should be null', () => {
  const rta = divide(5, 0);
  expect(rta).toBe(null);
});
