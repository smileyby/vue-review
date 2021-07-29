import { def } from './utils.js';
const arrayPrototype = Array.prototype;
export const arrayMethods = Object.create(arrayPrototype);

const methodsNeedChange = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

methodsNeedChange.forEach(methodName => {
  const original = arrayPrototype[methodName];
  
  def(arrayMethods, methodName, function(){

    // 恢复原有功能
    const result = original.apply(this, arguments);

    // 类数组转数组
    const args = [...arguments];

    const ob = this.__ob__;

    // 有三种方法 push/unshift/splice 能够插入新值，现在要把插入的新项也要变成 observe的
    let inserted = [];
    switch(methodName) {
      case 'push':
      case 'unshift':
        inserted = arguments;
        break;
      case 'splice':
        inserted = args.slice(2);
        break;    
    }
    if (inserted) {
      ob.observeArray(inserted);
    }

    ob.dep.notify();
    return result;
  }, false);
})
