function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}

/* Big O = Polynomial O(n^2)
Explanation: This agorithm is looping through the input array once and then again
in each iteration of the first loop meaning that the number of actions increases
exponentially. */