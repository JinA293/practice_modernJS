const me = {
  name: "jin",
  age: 20
};

// const { name, age } = me;

// const message = `Iam${name}`;

const sayHello = (name = "jin") => {
  return console.log(`Iam${name}`);
};
sayHello("akira");

const arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => {
  return console.log(num1 + num2);
};
sumFunc(...arr1);

const [num1, ...arr2] = arr1;
console.log(arr1);
console.log(num1);
// console.log(num2)
console.log(arr2);
