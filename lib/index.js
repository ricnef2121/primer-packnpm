function factor(num, result = []) {
  const root = Math.sqrt(num);
  let x = 2;
  if (num % x) {
    x = 3;
    while ((num % x) && (x < root)) {
      x += 2;
    }
  }

  x = (x <= root) ? x : num;
  result.push(x);
  return (x === num) ? result : factor(num / x, result);
}

export default factor;
