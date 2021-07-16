import { observe } from "./observe";
function defineReactive(data, key, val){
  console.log('defineReactive', data, key);
  if (arguments.length == 2) {
    val = data[key];
  }
  // 子元素要进行observe，形成递归
  let childOb = observe(val);
  Object.defineProperty(data, key, {
    // value: 3,  //value 和 writable 不能同时设置
    // 是否可写
    // writable: true,
    // 是否可枚举
    enumerable: true,
    configurable: true,
    get(){
      console.log('正在访问obj的'+ key +'属性');
      return val;
    },
    set(newValue){
      console.log('正在改变obj的'+ key +'属性', newValue);
      if (val === newValue) {
        return;
      }
      val = newValue;
      // 当设置了新值，这个值也要被observe
      childOb = observe(newValue);
    }
  })
}
export default defineReactive;