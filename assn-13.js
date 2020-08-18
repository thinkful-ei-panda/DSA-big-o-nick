// Find time complexities (big O) of each function

/* Big O = Linear O(n)
Explanation: The number of sheep is decreased by 1 therefore we must
go through the full number input. */
function sheepJump(numSheep) {
  if (numSheep === 0) {
    console.log('All sheep jumped over the fence.');
    return numSheep;
  }

  console.log(`${numSheep}: Another sheep jumps over the fence!`);
  return sheepJump(numSheep - 1);
}

/* Big O = Linear O(n)
Explanation: The number of actions will be determined directly by the 
value of the exponent. */
function powerCalculator(base, exponent) {
  if (exponent < 0) {
    const errorMessage = 'error: exponent should be >= 0';
    return errorMessage;
  }

  if (exponent === 1) {
    return base;
  }

  return base * powerCalculator(base, exponent - 1);
}

/* Big O = Linear O(n)
Explanation: We remove one letter from the string each recursive call
so the number of calls depends on the length of the string. */
function reverseStr(str) {
  if (str === '')
    return '';

  const current = str.length - 1;
  return str[current] + reverseStr(str.slice(0, current));
}

/* Big O = Linear O(n)
Explanation: Number of rows determines the number of recursve calls and 
is decremented by 1 each call. */
function nthTriangularNumber(rows) {
  if (rows === 1) {
    return rows;
  }

  return rows + nthTriangularNumber(rows - 1);
}

/* Big O = Linear O(n)
Explanation: Because the for loop is not called recursively */
function stringSplitter(str, separator) {
  if (str === '') {
    return '';
  }

  let subStr = '';
  let remaining = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== separator)
      subStr += str[i];
    else {
      remaining = str.slice(i + 1, str.length);
      break;
    }
  }

  return [subStr, ...stringSplitter(remaining, separator)];
}

/* Big O = Exponential O(2^n)
Explanation: Each function calls itself twice */
function fibonacci(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

/* Big O = Linear O(n)
Explanation: The function only calls itslef once */
function findFact(n) {
  if (n === 1) {
    return 1;
  }

  return n * findFact(n - 1);
}

/* Big O = O(n^3)
Explanation: Each recursive function calls itself and has a nested for loop */
function findPaths(maze, pos = [[0, 0]], paths = [''], mazes = [maze], completed = [false]) {
  let completedPaths = 0;
  let newPaths = paths.filter(item => typeof item !== 'undefined');
  let newPos = pos.filter(item => typeof item !== 'undefined');
  let newMazes = mazes.filter(item => typeof item !== 'undefined');
  let newCompleted = completed.filter(item => typeof item !== 'undefined');

  for (let i = 0; i < newPaths.length; i++) {
    if (maze[newPos[i][1]][newPos[i][0]] === 'e') {
      completedPaths++;
      newCompleted[i] = true;
    }
  }

  if (completedPaths === paths.length) {
    return paths;
  }


  for (let i = 0; i < paths.length; i++) {

    if (newCompleted[i] === false) {
      let openDirections = [];

      if (pos[i][1] + 1 < maze.length) {
        //if node down is open or we are at the end of this row
        const checkDown = newMazes[i][pos[i][1] + 1][pos[i][0]];
        if (checkDown === ' ' || pos[i][0] === newMazes[i][pos[i][1]].length || checkDown === 'e') {
          openDirections.push('D');
        }
      }

      if (pos[i][0] + 1 < newMazes[i][pos[i][1]].length) {
        //if node right is open
        const checkRight = newMazes[i][pos[i][1]][pos[i][0] + 1];
        if (checkRight === ' ' || checkRight === 'e') {
          openDirections.push('R');
        }
      }

      //if node left is open
      if (pos[i][0] - 1 >= 0) {
        const checkLeft = newMazes[i][pos[i][1]][pos[i][0] - 1];
        if (checkLeft === ' ' || checkLeft === 'e') {
          openDirections.push('L');
        }
      }

      //if node up is open
      if (pos[i][1] - 1 >= 0) {
        const checkUp = newMazes[i][pos[i][1] - 1][pos[i][0]];
        if (checkUp === ' ' || checkUp === 'e') {
          openDirections.push('U');
        }
      }

      //if there are not directions left for the path then remove it
      if (typeof openDirections[0] === 'undefined' || openDirections.length === 0) {
        delete newPos[i];
        delete newPaths[i];
        delete newMazes[i];
        delete newCompleted[i];
      } else {
        if (openDirections.length > 1) {
          newPaths[i] += openDirections[0];
          newPos[i] = adjustPosition(pos[i], openDirections[0]);
          newMazes[i][pos[i][1]][pos[i][0]] = 'v';
          for (let j = 1; j < openDirections.length; j++) {
            newPaths.push(paths[i] += openDirections[j]);
            newPos.push(adjustPosition(pos[i], openDirections[j]));

            const mazeToPush = newMazes[i].map(row => {
              return [...row];
            });

            newMazes.push(mazeToPush);
            newCompleted.push(false);
          }
        } else {
          newPaths[i] += openDirections[0];
          newPos[i] = adjustPosition(pos[i], openDirections[0]);
          newMazes[i][pos[i][1]][pos[i][0]] = 'v';
        }
      }
    }
  }

  return findPaths(maze, newPos, newPaths, newMazes, newCompleted);
}

function adjustPosition(pos, dirStr) {
  if (dirStr === 'D')
    return [pos[0], pos[1] + 1];
  if (dirStr === 'R')
    return [pos[0] + 1, pos[1]];
  if (dirStr === 'L')
    return [pos[0] - 1, pos[1]];
  if (dirStr === 'U')
    return [pos[0], pos[1] - 1];
}

/* Big O = O(2^n)
Explanation: the function calls itself from 
within the lowest level of a nested ro loop */
function findAnagrams(string) {
  if (string.length < 2) return string; // This is our base case

  var permutations = [];
  for (var i = 0; i < string.length; i++) {
    var char = string[i];

    // check duplicates:
    if (string.indexOf(char) != i) // if char was used already
      continue; // skip it this time

    var remainingString = string.slice(0, i) + string.slice(i + 1, string.length);

    for (var subPermutation of findAnagrams(remainingString))
      permutations.push(char + subPermutation);
  }
  return permutations;
}

/* Big O = O(2^n)
Explanation: the function calls itself from 
within the lowest level of a nested ro loop */
function printChart(chart, tabs = 0) {
  if (chart[0] === 'Wes') {
    return '';
  }

  tabs++;

  for (const p in chart) {
    if (typeof chart[p] === 'object' && chart[p] !== null) {
      let tabStr = '';
      for (let i = 0; i < tabs; i++) { tabStr += '\t'; }
      console.log(`${tabStr}${p}`);
      printChart(chart[p], tabs);
    } else {
      let tabStr = '';
      for (let i = 0; i < tabs; i++) { tabStr += '\t'; }
      console.log(`${tabStr}${chart[p]}`);
    }
  }
}

/* Big O = Linear O(n)
Explanation: Called recursively x times therefore it's linear. */
function toBinary(x) {
  if (x < 0) {
    throw new Error('Negative numbers not acceptable');
  }
  if (x === 0 || x === 1) {
    return x.toString();
  }
  const lsb = (x % 2).toString();
  const remainingBits = Math.floor(x / 2);
  const remainingBitsInBinary = toBinary(remainingBits);
  return remainingBitsInBinary + lsb;
}