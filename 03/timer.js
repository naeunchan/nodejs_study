const timeout = setTimeout(() => {
  console.log("after 1.5s");
}, 1500);

const interval = setInterval(() => {
  console.log("1s");
}, 1000);

const timeout2 = setTimeout(() => {
  console.log("not run");
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(interval);
}, 2500);

const imme = setImmediate(() => {
  console.log("now");
});

const imme2 = setImmediate(() => {
  console.log("not run");
});

clearImmediate(imme2);
