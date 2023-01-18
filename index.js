//Diagonal Difference

let arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
];

let sumDiag1 = 0;
let sumDiag2 = 0;

for (let i = 0; i < arr.length; i++){
  sumDiag1 += parseInt(arr[i][i]);
  sumDiag2 += parseInt(arr[i][(arr.length - i) - 1]);
}

console.log(Math.abs(sumDiag1 - sumDiag2));