function numberChecker(numbers) {
    return function (num) {
      return numbers.includes(num);
    };
  }
  
  // Expected Result:
  const arr = [1, 2, 5, 4, 6];
  const checkNum = numberChecker(arr);
  
  console.log(checkNum(3)); // true
  // console.log(checkNum(6));