import { def } from './utils';
import defineReactive from './defineReactive';
import arrayMethods from './array';
import { observe } from './observe';
import Dep from './Dep.js';
/**
 * Observer 类的目的：将一个正常的object转换为没个层级都是响应式的object
 */
export default class Observer {
  constructor(value){
    // 每一个Observer的实例身上，都有一个dep实例
    this.dep = new Dep();
    
    // 构造函数中的this => 实例本身
    def(value, '__ob__', this, false);
    
    if (Array.isArray(value)) {
      Object.setPrototypeOf(value, arrayMethods);
      this.observeArray(value);
    } else {
      this.walk(value);
    }
  }
  walk(value){
    for (let k in value) {
      defineReactive(value, k);
    }
  }
  // 数组的特殊遍历
  observeArray(arr){
    // 防止遍历过程中数组长度发生变化，将l提前
    for (let i = 0, l = arr.length; i < l; i++) {
      observe(arr[i]);
    }
  }
}