function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

/* Big O = Polynomial O(n^2)
Explaination: The algorithm contains a nested for loop meaning that the
size of the inputs will scale the number of actions exponentially
resulting in n^2.*/
