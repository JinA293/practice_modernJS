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
