function pow(x, n) {
  [x, n] = [+x, +n];
  if (!Number.isInteger(n)) {
    throw new Error(`${n} - not valid value`);
  }
  if (n === 0) {
    return 1;
  }
  if (Number.isNaN(x) || -100 > x || x > 100) {
    throw new Error(`${x} - not valid value`);
  }
  if (n < 0) {
    return 1 / pow(x, -n);
  } else {
    return +n === 1 ? x : x * pow(x, n - 1);
  }
}

console.log(pow(2.0, 10));
console.log(pow(2.1, 3));
console.log(pow(2.0, -2));
