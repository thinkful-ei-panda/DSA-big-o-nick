// Recursive drills solved iteratively

// 1.
function countingSheep(n) {
  while (n > 0) {
    console.log(`${n}: Another sheep jumps over the fence`);
    n--;
  }
  console.log('All sheep have jumped over the fence');
}

// 2.
function powerCalculator(base, ex) {
  if (ex < 0)
    throw new Error('exponent must be >= 0');

  if (ex === 0)
    return 1;

  let result = base;

  for (let i = 0; i < ex - 1; i++) {
    result *= base;
  }

  return result;
}

// 3.
function reverseString(string) {
  let result = '';

  for (let i = (string.length - 1); i >= 0; i--) {
    result += string[i];
  }

  return result;
}

// 4.
function nthTriangularNumber(n) {
  let result = 0;

  for (let i = 1; i <= n; i++)
    result += i;

  return result;
}

// 5.
function stringSplitter(string, splitter) {
  let result = [''];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === splitter)
      result.push('');
    else
      result[result.length - 1] += string[i];
  }

  return result;
}

// 6.
function fibonacci(n) {
  let sequence = [1, 1];

  for (let i = 1; i <= n - 2; i++) {
    sequence.push(sequence[i] + sequence[i - 1]);
  }

  return sequence;
}

// 7. 
function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++)
    result *= i;

  return result;
}
