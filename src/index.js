import observe from './observe.js';
import Watcher from './Watcher.js';
var obj = {
  a: {
    m: {
      n: 5
    }
  },
  b: 10,
  g: [22, 33, 44, 55]
}


observe(obj);
obj.b++;
obj.g.push(66);
new Watcher(obj, 'a.m.n', (val) => {
  console.log('☆',val)
})
obj.a.m.n = 20;