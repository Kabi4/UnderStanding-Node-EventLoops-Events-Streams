console.log(arguments);
console.log(require('module').wrapper);
const C = require('./SampleModule');
const Calc2 = require('./SampleModules2');
const Calc1 = new C();
console.log(Calc1.add(2, 7));
console.log(Calc2.add(2, 7));
//CACHING
