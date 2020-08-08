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

1.浏览器适配

    viewport
    px、rem、vw和vh单位
    flex
    CSS 媒体查询media
    2x图片和3x图片
    雪碧图的应用

2.浏览器兼容问题

    CSS-hack

    Chrome(谷歌浏览器) ：WebKit内核     -webkit-
    Safari(苹果浏览器) ：WebKit内核        -webkit-
    Firefox(火狐浏览器) ：Gecko内核         -moz-
    IE(IE浏览器) ：          Trident内核    -ms-
    Opera(欧朋浏览器) ：Presto内核          -o-

3.弹性盒子 flex

    //设置在容器上
    flex-direction: row | row-reverse | column | column-reverse
    flex-wrap: nowrap | wrap | wrap-reverse
    flex-flow: flex-direction | flex-wrap

    //主轴
    justify-content: flex-start | center | flex-end | space-between | space-around
    
    //交叉轴
    align-items: flex-start | center | flex-end | stretch | baseline

    //多轴
    align-content: flex-start | center | flex-end | stretch | space-between | space-around

    //定义在容器的项目上
    order：<integer>

    flex-grow：<number>; /* default 0 */
    flex-shrink：<number>; /* default 1 */
    flex-basis：<length> | auto; /* default auto */

    flex：flex-grow | flex-shrink | flex-basis （两个快捷值：auto: 1 1 auto；none: 0 0 auto）

    //单个项目独有的对齐方式
    align-self: auto | flex-start | flex-end | center | baseline | stretch