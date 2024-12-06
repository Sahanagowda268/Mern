function isPrime(n){
  if(n<=1)return false;
  if(n<=3) return  true;
  if(n%2===0||n%3===0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
}

return true;

}
function firstNPrimesSquares(n) {
  const squares = [];
  let count = 0;
  let num = 2; 

  while (count < n) {
      if (isPrime(num)) {
          squares.push(num ** 2);
          count++;
      }
      num++;
  }

  return squares;
}
const squaresOfPrimes = firstNPrimesSquares(10);
console.log("Squares of the first 10 prime numbers:", squaresOfPrimes);