#正则表达式 *****
#代理（Proxy）对象 *
#迭代器 *

=================  ECMAScript ==================

# 函数相关方法 call/apply/bind http://192.168.0.100:8080/function-hight-3

# 函数 - 执行环境、变量对象、作用域链、闭包、内存泄漏；http://192.168.0.100:8080/function-3

# 函数 - 原型对象、原型链、继承、默认原型  http://192.168.0.100:8080/function-5

# 函数 - 私有作用域、私有变量、私有函数、特权方法、单例模式（详解）http://192.168.0.100:8080/function-hight-1


# js如何实现异步操作：事件循环机制 http://192.168.0.100:8080/ajax-1
    同步任务（执行栈）
    异步任务 （任务队列）

6.异步操作有哪些？
    回调函数
    setTimeout
    事件处理程序
    Ajax
    promiss

=================  BOM ==================

# 浏览器的渲染过程：http://192.168.0.100:8080/bom-6

# 浏览器缓存问题：http://192.168.0.100:8080/bom-7

# 网络请求与跨域问题：http://192.168.0.100:8080/ajax-2

# 同源策略 与 Cors http://192.168.0.100:8080/ajax-4

# 跨越技术 Ajax 图像PING JSONP Web Sockets http://192.168.0.100:8080/ajax-5

3.网络安全问题：

    http2.0协议
    SSL安全链接
    跨站脚本XSS

4.错误处理与调试

    错误类型
    异常处理（try-catch语句）
    服务器记录错误日志（通过图像PING跨域）
    firebug调试
    debugger开启断点模式
    

=================  DOM ==================
# 插件扩展
1. Lodash：`_.debounce` 是一个通过 Lodash 限制操作频率的函数。请参考：https://lodash.com/docs#debounce

# 常见错误
1.不要在选项 property 或回调上使用箭头函数
比如 created: () => console.log(this.a)
vm.$watch('a', newValue => this.myMethod())。
因为箭头函数并没有 this，this 会作为变量一直向上级词法作用域查找，直至找到为止，
经常导致 Uncaught TypeError: Cannot read property of undefined
Uncaught TypeError: this.myMethod is not a function 之类的错误。

# 生命周期 （每个 Vue 实例在被创建时都要经过一系列的初始化过程）
1. new Vue()：创建 vue 实例
2. init Events & Lifecycle
3. beforeCreate：
4. init injections & reactivity 注入 / 响应
5. created：实例被创建之后
6. compile：编译模板
7. beforeMount：
8. mount：
9. beforeUpdate
10. update
11. beforeDestroy
12. destroyed

# 响应式系统
1. 当我们创建一个 vue 组件时，也就创建了一个 vue 的实例。
2. 当我们把一个普通的 JavaScript 对象传入 Vue 实例作为 data 选项，vue 会遍历这个对象的所有属性，并使用 Object.defineProperty 把这些 property 全部转为 getter/setter。
3. 每个组件实例都对应一个 watcher 实例。
4. 它会在组件渲染的过程中把"接触"过的数据 property 记录为依赖。
5. 当依赖项的 setter 触发时，会通知 watcher，从而使它关联的组件重新渲染。

# 异步更新队列
1. Vue 在更新 DOM 时是异步执行的。
2. 只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。
3. 如果同一个 watcher 被多次触发，只会被推入到队列中一次。
4. 这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。
5. 然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。
6. Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。

# 非响应式属性
1. 当你设置 vm.someData = 'new value'，该组件不会立即重新渲染。
2. 当刷新队列时，组件会在下一个事件循环“tick”中更新。
3. 多数情况我们不需要关心这个过程，但是如果你想基于更新后的 DOM 状态来做点什么，这就可能会有些棘手。
4. 虽然 Vue.js 通常鼓励开发人员使用“数据驱动”的方式思考，避免直接接触 DOM，但是有时我们必须要这么做。
5. 为了在数据变化之后等待 Vue 完成更新 DOM，可以在数据变化之后立即使用 Vue.nextTick(callback)。这样回调函数将在 DOM 更新完成后被调用。

例如，当你设置 vm.someData = 'new value'，该组件不会立即重新渲染。当刷新队列时，组件会在下一个事件循环“tick”中更新。多数情况我们不需要关心这个过程，但是如果你想基于更新后的 DOM 状态来做点什么，这就可能会有些棘手。虽然 Vue.js 通常鼓励开发人员使用“数据驱动”的方式思考，避免直接接触 DOM，但是有时我们必须要这么做。为了在数据变化之后等待 Vue 完成更新 DOM，可以在数据变化之后立即使用 Vue.nextTick(callback)。这样回调函数将在 DOM 更新完成后被调用。例如：

# 数据绑定 （Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据）
1. 插值语法
2. 指令

# 指令
1. v-once
2. v-html
3. v-bind
4. v-on
5. v-if
6. v-else （Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。）
7. v-show
8. v-for

# 指令的动态参数
1. v-bind:[someattr]="val"
2. v-on:[eventName]="val"

# 指令的修饰符
1. v-on:submit.prevent="onSubmit"：对于触发的事件调用 event.preventDefault()

# vue实例属性 （前缀$）
1. $data
2. $el (this.$refs.someComponent.$el.offsetTop)
3. $watch

# 计算属性 computed
1. 计算属性是基于它们的响应式依赖进行缓存的。
2. 只在相关响应式依赖发生改变时它们才会重新求值。
3. 解决了大量的计算时的性能开销。

# 侦听器 watch
1. 观察和响应 Vue 实例上的数据变动（data、props）
2. 当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。

# 插槽
1. template 组件中没有包含一个 <slot> 元素，则该组件起始标签和结束标签之间的任何内容都会被抛弃。
2. 父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。

