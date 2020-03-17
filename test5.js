const a = 1;
var b = 5;

if (a === 1) {
  var b = 3;
  function newNum(x) {
    x += 1;
    return x;
  }
  console.log(newNum(b));
  console.log(b);
}

if (b > 0) {
  const a = 2;
  let c = 3;
  for (let i = 0; i < 5; i++) {
    let c = 1;
    a++;
  }
  console.log(a);
  console.log(c);
}