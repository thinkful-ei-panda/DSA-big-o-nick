function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

/* Big O = Linear O(n)
Explaination: This algorithm will need to touch each element of the array
and therefore scales directly with the size of the input. */