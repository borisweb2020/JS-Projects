function getResult(n) {
  if (Number.isInteger(n) && n >= 1 && n <= 40) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if ((i / j) < 1) {
          sum += i / j;
        }
      }
    }
    sum = Math.trunc(sum);
    console.log(sum);
  } else {
    console.log('Incorrect input');
  }
}

getResult(3);