function func(num1, num2) {
  let maxNum = Math.max(num1, num2);
  let minNum = Math.min(num1, num2);
  let numberDivisors = maxNum - minNum + 1;
  let minMaxArr = [];
  for (let i = minNum + 1; i < maxNum; i++) {
    minMaxArr.push(i);
  }
  let starNum = 1;
  for (let i = minNum; i <= maxNum; i++) {
    starNum *= i;
  }
  for (let multiple = maxNum; multiple <= starNum; multiple += maxNum) {
    let divisorCount = 0;
    for (let i = minNum; i <= maxNum; i++) {
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}
console.log(func(1, 3));
