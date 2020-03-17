function sum() {
  // console.log(arguments);

  // let sumNum = 0;
  // for(let i = 0; i < arguments.length; i++) {
  //   sumNum += arguments[i];
  // }
  // return sumNum;
  return [...arguments].reduce((acc, cur) => acc + cur, 0);
}

console.log(sum(1, 2, 3, 4, 5));