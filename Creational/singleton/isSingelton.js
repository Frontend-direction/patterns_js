class SingletonTester
{
  static isSingleton(generator)
  {
    let obj1 = generator();
    let obj2 = generator();
    console.log(obj1.toString());
    console.log(obj2.toString());
    console.log(`Returning ${obj1 === obj2}`);
    return obj1 === obj2;
  }
}


const db1 = SingletonTester.isSingleton(() => ({name: 'Vova', surname: 'Pankiv'}));
const db2 = SingletonTester.isSingleton(() =>({name: 'Tanya', surname: 'Question'}));
console.log(db1);
console.log(db2);