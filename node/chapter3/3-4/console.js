const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: 'value'
    }
  }
};

console.time('whole time');
console.log('default log');
console.log(string, number, boolean);
console.error('error');

console.dir(obj, {colors: false, depth: 2});
console.dir(obj, {colors: true, depth: 1});


console.time('check time');

for (let i = 0; i < 100000; i++);

console.timeEnd('check time');

function b() {
  console.trace('tracing');
}

function a() {
  b();
}

a();

console.timeEnd('whole time');
