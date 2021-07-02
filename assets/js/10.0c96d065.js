(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{368:function(t,a,s){"use strict";s.r(a);var n=s(44),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"组件库开发流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件库开发流程"}},[t._v("#")]),t._v(" 组件库开发流程")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入组件库方式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ElementUI "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element-ui'")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ElementUI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开发自己的组件库")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 路径：./packages/index.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" button "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./button.vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbutton"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("_vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Vue.use 会调用 install方法")]),t._v("\n    _vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my-button'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("https://cli.vuejs.org/zh/guide/build-targets.html#%E5%BA%93")]),t._v(" "),s("h2",{attrs:{id:"动态组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态组件"}},[t._v("#")]),t._v(" 动态组件")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":is")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("componentName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("keep-alive")]),t._v(" "),s("p",[t._v("transition")]),t._v(" "),s("h2",{attrs:{id:"组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[t._v("#")]),t._v(" 组件")]),t._v(" "),s("ol",[s("li",[t._v("父子组件初始创建流程\n"),s("ol",[s("li",[t._v("父 beforeCreate")]),t._v(" "),s("li",[t._v("父 created")]),t._v(" "),s("li",[t._v("父 beforeMount")]),t._v(" "),s("li",[t._v("子 beforeCreate")]),t._v(" "),s("li",[t._v("子 created")]),t._v(" "),s("li",[t._v("子 beforeMount")]),t._v(" "),s("li",[t._v("子 mounted")]),t._v(" "),s("li",[t._v("父 mounted")])])]),t._v(" "),s("li",[t._v("父子组件数据更新钩子函数执行顺序（父组件给子组件传递数据，父组件更新数据）\n"),s("ol",[s("li",[t._v("父 beforeUpdate")]),t._v(" "),s("li",[t._v("子 beforeUpdate")]),t._v(" "),s("li",[t._v("子 updated")]),t._v(" "),s("li",[t._v("父 updated")])])]),t._v(" "),s("li",[t._v("钩子函数：errorCaptured 捕获子组件代码执行过程中抛出的异常，模板渲染报错不能捕获")])])])}),[],!1,null,null,null);a.default=e.exports}}]);