function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    if (i === 1) {
      result.push(0);
    }
    else if (i === 2) {
      result.push(1);
    }
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}

/* Big O = Linear O(n)
Explanation: This required number of actions in this algorithm scale directly
with the input number. This means that it has a linear time scale.  */