function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/* Big O = Constant O(1)
Explanation: This is constant because the number of actions is the same
regardless of the size of the input. */