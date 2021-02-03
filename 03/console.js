const string = "abc";
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: "value",
    },
  },
};
console.time("Total time");
console.log("This is just log");
console.log(string, number, boolean);
console.error("Error message -> console.error");

console.table([
  { name: "zero", birth: 1996 },
  { name: "eunchan", birth: 1996 },
]);

console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.time("t");
for (let i = 0; i < 10; i++) {}
console.timeEnd("t");

function b() {
  console.trace("error tracing");
}

function a() {
  b();
}

a();

console.timeEnd("Total time");
