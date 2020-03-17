const fruit = {
  type: 'orange',
  get myBag() {
    console.log(`가방안에 ${fruit.type}이 있습니다.`);
    return `가방안에 ${fruit.type}이 있습니다.`;
  },
  set myBag(myfruit) {
    this.type = myfruit;
  }
}

console.log(fruit.myBag);
// fruit.myBag = '사과';
// console.log(fruit.myBag);