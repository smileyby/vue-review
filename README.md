在getter中收集依赖，在setter中触发依赖

* 把依赖收集的代码封装成一个 Dep 类，它专门用来管理依赖，没个Observer的实例成员都有一个Dep 的实例
* Watcher 是一个中介，数据发生变化时通过Watcher 中转，通知组件
* 依赖就是Watcher。只有Watcher触发的getter才会收集依赖，那个Watcher触发了getter，就把哪个Watcher收集到Dep中
* Dep使用发布订阅模式，当数据发生变化时，会循环依赖列表2，把所有的Watcher都通知一遍
* 代码实现的巧妙之处：Watcher 把自己设置到全局的一个指定位置，然后读取数据，因为读取了数据，所以会触发这个数据的getter。在gettter中就能得到当前正在读取数据的Watcher，并把这个Watcher收集到Dep中。

### 侵入式和非侵入式
vue: 非侵入式
react和小程序：侵入式