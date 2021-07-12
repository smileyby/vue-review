## 基础
### 指令

> 凡是以 v- 开头的行内属性都称为 vue指令

1. 常用指令

   1. v-model	

      ```vue
      <!-- v-model 在表单元素上实现数据的双向绑定 -->
      <input v-model="name" placeholder="请输入姓名"/>
      ```

   2. v-text

      ```vue
      <!-- 解决从无数据到有数据 小胡子语法会闪的问题 -->
      <span v-text="age"></span>
      <!-- 等同于 -->
      <span>{{age}}</span>
      ```

   3. v-html

      ```vue
      <!-- v-html 相当于innerHTML 识别HTML语法 -->
      <div v-html="html"></div>
      ```

   4. v-cloak

      ```vue
      <!-- 该指令一直在元素上知道关联实例编译结束, 可以配合css让元素在编译完成后再展示 -->
      <div v-cloak>{{text}}</div>
      ```

      ```css
      [v-cloak] {
          display: none;
      }
      ```

   5. v-pre

      ```vue
      <!-- 带有v-pre指令下的所有元素，不会被编译（优化性指令，加快编译速度） -->
      <span v-pre>不需要编译</span>
      ```

   6. v-if/v-else-if/v-else

      ```vue
      <!-- 不符合条件的，整体结构不加载区别于v-show -->
      <div v-if="condition-A">{{A}}</div>
      <div v-else-if="condition-B">{{B}}</div>
      <div v-else="condition-C">{{C}}</div>
      ```

   7. v-show

      ```vue
      <!-- 通过切换元素的 display 属性实现隐藏和显示 -->
      <div v-show="flag">{{text}}</div>
      ```

   8. v-for

      ```vue
      <div v-for="(item, index) in items" :key="item.id">
      	{{item.text}}
      </div>
      ```

   9. v-bind

      ```vue
      <img v-bind:src="imageSrc">
      
      <!-- 缩写 -->
      <img :src="imageSrc">
      
      <!-- 动态绑定 -->
      <img :[key]="imageSrc">
      ```

   10. v-on

       ```vue
       <!-- 方法处理器 -->
       <button v-on:click="doThis"></button>
       
       <!-- 动态事件 (2.6.0+) -->
       <button v-on:[event]="doThis"></button>
       
       <!-- 缩写 -->
       <button @click="doThis"></button>
       ```

       1. 常用事件修饰符

          ```
          .stop 阻止时间冒泡
          .prevent 阻止默认时间
          .capture 在捕获阶段执行
          .self 只在点击当前元素的时候才会执行，冒泡传播不执行
          .once 只会执行一次
          .passive 告诉浏览器不阻止默认事件，提升性能
          ```

       2. 常用按键修饰符

          ```
          .enter
          .tab 
          .delete 
          .esc
          .space
          .up
          .down
          .left 只当点击鼠标左键时触发
          .right 只当点击鼠标右键时触发
          ```

       3. v-mode 修饰符

          ```
          .lazy  取代 input 监听 change 事件（用户输入时不会触发，只在blur才触发）
          .number 输入字符串转为有效数字
          .trim  输入收尾空格过滤
          ```

### JSX

> 当使用组件编写时代码冗余，则可尝试使用jsx编写

```javascript
export default {
    data(){
        return {
            name: 'aa'
        }
    },
    render(h){
        return h('h1', {
            class: 'box',
            attrs: {id: 'app'}
        }, [
            h('input', {
                domProps: {
                    value: this.name
                },
                on: {
                    input: function(e){
                        this.name = e.target.value;
                    }
                }
            }),
            this.name,
            h('i', this.name)
        ])
    }
}
```

### 生命周期

1. beforeCreate
   1. 组件事件和声明周期的钩子初始化，此时 data 和 methods 等未挂载
2. created
   1. 判断 主元素是否存在，
      1. 否，等待 $mount 被调用后再向下执行
      2. 是，判断是否有 template 属性
         1. 是，调用render function 覆盖掉 el元素下的内容
         2. 否，则使用el 元素下的 outerHTML 作用模板进行渲染
   2. 关于渲染的优先级：render > template > outerHTML，采用的都是覆盖式渲染
3. beforeMount
   1. 生成 el dom树并替换掉 页面中的 el 元素
4. mounted
   1. 渲染和数据绑定、事件绑定、watcher等已全部就位
5. beforeUpdate
   1. 数更新时，触发beforeUpdate
   2. dom-diff 重新 生成虚拟dom 并渲染到页面上
6. updated
7. beforeDestory
   1. 执行销毁操作、销毁当前实例 watch 的元素，引用的子组件以及监听的事件 
8. destoryed

### router



### vuex



---
tags:
  - 基础
  - 语法
  - 修饰符
  - jsx
  - 生命周期
  - vue-router
  - vuex
---