import { def } from './utils';
const arrayPrototype = Array.prototype;

// 以array的prototype为原型，创建一个arrayMethods对象
const arrayMethods = Object.create(arrayPrototype);
const methodsNeedChange = [
  'push', 
  'pop', 
  'shift', 
  'unshift', 
  'splice', 
  'sort', 
  'reverse'
];

methodsNeedChange.forEach((methodName) => {
  const original = arrayPrototype[methodName];
  
  // 定义新的方法
  def(arrayMethods, methodName, function(){
    // 将数组身上的__ob__ 取出来
    const ob = this.__ob__;
    let inserted;
    switch(methodName){
      case 'push':
      case 'unshift':
        inserted = arguments;
        break;
      case 'splice':
        inserted = Array.prototype.slice.call(arguments, 2);
        break;    
    }
    if (inserted) {
      ob.observeArray(inserted);
    }
    const result = original.apply(this, arguments);
    return result;
  }, false);
})
export default arrayMethods;