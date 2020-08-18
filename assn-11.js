// Tower of Hanoi

//Rules:
//  i) Only one disk may be moved at a time .

// ii) Each move consists of taking the upper disk from one of the 
// rods and sliding it onto another rod, on top of the other disks that 
// may already be present on that rod. 

// iii) A larger disk may not placed on top of a smaller disk.

function solveHanoi(x, from, to, aux) {
  //base case
  if (x === 0) {
    return;
  }
  //recursive case
  solveHanoi(x - 1, from, aux, to);
  console.log(`Move disk ${x} from ${from} to ${to}`);
  solveHanoi(x - 1, aux, to, from);
}

//move a to c using b as a transfer rod
solveHanoi(5, 'A', 'C', 'B');

// required moves for 3 disks = 7
// required moves for 4 disks = 15
// required moves for 5 disks = 31

// if given 5 disks - after 7 recursive calls you will have:
// disks 1, 2 and 3 on rod C and disks 4 and 5 on rod A

// runtime = O(2^n)

