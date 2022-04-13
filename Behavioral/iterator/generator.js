function *gen() {
  console.log('first');
  yield 1;
  console.log('second');
  yield 3;
  console.log('third');
  yield 2;
};


for(let i of gen()) {
  console.log(i);
}