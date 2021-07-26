var uid = 0;
export default class Dep {
  constructor(){
    console.log('Dep constructor');
    // 数组存储订阅者, 放的是 Watcher 的实例
    this.id = uid++;
    this.subs = [];
  }
  addSubs(sub){ // 添加订阅
    this.subs.push(sub);
  }
  depend(){ // 添加依赖
    // target 我们自己指定的全局唯一变量
    if (Dep.target) {
      this.addSubs(Dep.target);
    }
  }
  notify(){
    console.log('notify');
    // 浅克隆一份 subs
    const subs = this.subs.slice();
    for (let i = 0, l = subs.length; i < 1; i++) {
      subs[i].update();
    }
  }
}