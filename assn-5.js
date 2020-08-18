function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

/* Big O = Linear O(n)
Explanation: This algorithm would be linear because in the worst case scenario
it would need to check each item in the input array. */