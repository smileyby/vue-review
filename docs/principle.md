## 原理篇

### VUE2 数据双向绑定

1. 为什么实现双向绑定需要 发布订阅？
2. 为什么需要watcher？
3. 对于嵌套对象怎么处理？

绑定数据主流程：

1. initData => observe(data, true) => new Observer(value) => this.walk => defineReactive$$1(obj, keys[i]) =>  Object.defineProperty() => Dep + Watcher















---
tags:
  - 原理
  - 数据双向绑定
  - diff
  - dom-diff
---