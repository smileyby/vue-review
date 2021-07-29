import parsePath from "./parsePath.js";
import Dep from './Dep.js'
var uid = 0;
export default class Watcher {
  constructor(target, expression, callback){
    this.id = uid++;
    this.target = target;
    this.getter = parsePath(expression);
    this.callback = callback;
    this.value = this.get();
  }
  update(){
    this.run();
  }
  get(){
    // 依赖收集阶段，让全局的Dep.target 设置成 Watcher本身
    Dep.target = this;
    const obj = this.target;
    var value;
    try {
      value = this.getter(obj)
    } finally {
      Dep.target = null;
    }
    return value;
  }
  run(){
    this.getAndInvoke(this.callback);
  }
  getAndInvoke(cb){
    const value = this.get();
    if (value !== this.value || typeof value === 'object') {
      const oldValue = this.value;
      this.value = value;
      cb.call(this.target, value ,oldValue);
    }
  }
}