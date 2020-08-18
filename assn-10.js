function isWhat(n) {
  //check if input is less than 2 or is not a whole number
  //then returns false
  if (n < 2 || n % 1 !== 0) {
    return false;
  }
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) return false;
  }
  return true;
}

/*
What does it do:
returns true if the input is a prime number (numbers that have only 2 factors: 1 and themselves)
returns false if the input is a composite numner (numbers with more than 2 factors)
Big O = Linear O(n)
Explanation: This is because the average case still is a realative match
to the value of n.
*/