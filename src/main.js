import { observe } from './observe';
import Watcher from './Watcher.js';
var obj = {
  a: {
    b: {
      c: 10
    }
  },
  d: 20,
  g: [10, 20, 30, 40]
};

/**
 * observe(obj) 
 *  => 看obj身上有没有 __ob__ 
 *  => new Observer() 
 *  => 遍历下一层属性，逐个defineReactive
 *  => 当设置某个属性值的时候，会触发set里面的newValue，这个newValue也得被observe()一下 
 *  => observe(obj)
 */

observe(obj);

new Watcher(obj, 'a.b.c', (val)=>{
  console.log({val});
})
obj.d++;
obj.a.b.c = 30;
obj.g.push(66);
console.log(obj.g);

