function isEven(value) {
  if (value % 2 === 0) {
    return true;
  }
  else
    return false;
}

// Big O = Constant O(1)
// Explaination: this algorithm only requires a finite number 
// of actions regardless of the input and therefore runs at constant time.