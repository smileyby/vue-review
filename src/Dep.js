var uid = 0;
export default class Dep {
  constructor(){
    this.id = uid++;
    // subs 放的是watcher的实例
    this.subs = [];
  }
  addSub(sub){
    this.subs.push(sub);
  }
  depend(){
    if (Dep.target) {
      this.addSub(Dep.target);
    }
  }
  notify(){
    const subs = this.subs.slice();
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  }
}