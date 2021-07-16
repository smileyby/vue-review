import { def } from './utils';
import defineReactive from './defineReactive';
import arrayMethods from './array';
import { observe } from './observe';
/**
 * Observer 类的目的：将一个正常的object转换为没个层级都是响应式的object
 */
export default class Observer {
  constructor(value){
    console.log('执行Observer构造器', value);
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