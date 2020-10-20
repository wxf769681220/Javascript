<template>
  <div class="statement-3">
    <Card shadow style="width:550px">
      <h3 slot="title">1.break 和 continue 语句</h3>
      <div>
        <p>break 和 continue 语句用于在循环语句中精准地控制代码的执行。break 语句会立即退出循环，强制执行之后的代码。continue 语句也是立即退出循环，但退出循环后会从循环的顶部继续执行。</p>
        <div v-highlight>
          <pre>
            <code>
              // break 语句
              var num = 0;
              for (var i = 1; i &lt; 10; i++) {
                if (i % 2 === 0) {
                  // 终止循环立即跳出
                  break;
                  // 忽略下面的代码...
                }
                num++;
              }
              num => 1

              // continue 语句
              var num = 0;
              for (var i = 1; i &lt; 10; i++) {
                if (i % 2 === 0) {
                  // 终止本次循环立即跳出,继续执行下一次循环
                  continue;
                  // 忽略下面的代码...
                }
                num++;
              }
              num => 5
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:550px">
      <h3 slot="title">2.label 语句</h3>
      <div>
        <p>label 语句可以在代码中添加标签。break 和 continue 语句引用。</p>
        <div v-highlight>
          <pre>
            <code>
              var num = 0;
              outermost:
              for (var i = 0; i &lt; 10; i++) {
                for (var j = 0; j &lt; 10; j++) {
                  if (i == 5 && j == 5) {
                    break outermost;
                  }
                  num++;
                }
              }
              num => 55
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">3.with 语句</h3>
      <div>
        <p>with 语句将代码的作用域设置到一个特定的对象中。</p>
        <div v-highlight>
          <pre>
            <code>
              with (object) {
                //statement
              }

              var qs = location.search.substring(1)
              var hostName = location.hostname
              var url = location.href

              // 严格模式下无效
              with(location) {
                var qs = search.substring(1)
                var hostName = hostname
                var url = href
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:520px">
      <h3 slot="title">4.throw 语句</h3>
      <div>
        <p>在 Javascript 中，当产生运行时错误或程序使用 throw 语句时就会显式地抛出异常。</p>
        <div v-highlight>
          <pre>
            <code>
              function fn(x) {
                if (x &lt; 0) throw new Error('x不能为负数!')
                return x
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:750px">
      <h3 slot="title">5.try/catch/finally语句</h3>
      <div>
        <ul class="menu">
          <li>try/catch/finally 语句是 Javascript 的异常处理机制。其中 catch 与 finally 都是可选的，但 try 从句需要至少二者之一组成完整的语句。</li>
          <li>try 语句中的代码，通常会从头执行到尾而不产生任何问题，但有时会出现错误，抛出一个异常（可以由 throw 语句直接抛出异常）。</li>
          <li>catch 语句中的代码，当且仅当 try 语句块代码出现错误，抛出异常，才会执行这里的代码。</li>
          <li>catch 语句，通过局部变量 e 来获得对 Error 对象或者抛出的其他值的引用。</li>
          <li>finally 语句中的代码始终都会被执行（无论 try 语句块是否抛出了异常）。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              try {
                // 可能会导致错误的代码
              }
              catch(e) {
                // 在错误发生时如何处理
              }
              finally {
                // 这里代码始终都会被执行
              }
            </code>
          </pre>
        </div>
        <p>立即终止 try 语句的方式：
          <ol class="menu">
            <li>正常终止，执行完语句块的最后一条语句。</li>
            <li>抛出一个异常（或遇到 throw 语句），异常被 catch 语句捕获。</li>
            <li>抛出一个异常（或遇到 throw 语句），异常未被捕获，继续向上传播。</li>
            <li>通过 break、continue 或 return 语句终止。</li>
          </ol>
        </p>
        <div v-highlight>
          <pre>
            <code>
              /**
               * 由于 finally 语句中也包含 return 语句
               * 导致 try 语句中的 return 语句被忽略，fn 函数返回 3
               * 若去掉 finally 语句，fn 函数返回 1
               */
              function fn() {
                try {
                  return 1
                }
                catch(e) {
                  return 2
                }
                finally {
                  return 3
                }
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:650px">
      <h3 slot="title">6.debugger 语句</h3>
      <div>
        <p>debugger 语句用来产生一个断点，javascript 代码会在断点的位置停止执行。这时可以使用浏览器的网页调试器可以输出变量的值，检查调用栈等。debugger 语句不会启动调试器，
          只有在调试器已经运行中，这条语句才会真正产生一个断点。
        </p>
        <div v-highlight>
          <pre>
            <code>
              var x = 1;
              var y = x + 1;
              debugger;

              // 若开启调试器，下面代码不会被运行
              // 若未开启调试器，则会忽略 debugger 语句，代码会继续执行
              console.log(y)
            </code>
          </pre>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'statement-3',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.statement-3
  display: flex
  flex-direction: row
  flex-wrap: wrap
  .ivu-card
    display: block
    margin-top: 20px
    margin-right: 20px
    font-size: 16px !important
    color: #000 !important
</style>
