<template>
  <div class="statement-3">
    <div class="layout-content">
      <Card :dis-hover="true" shadow style="width:500px">
        <h3 slot="title">1.break和continue语句</h3>
        <div>
          <p>break和continue语句用于在循环语句中精准地控制代码的执行。break语句会立即退出循环，强制执行之后的代码。continue语句也是立即退出循环，但退出循环后会从循环的顶部继续执行。</p>
          <div v-highlight>
            <pre>
              <code>
                //break语句
                var num = 0;
                for (var i = 1; i &lt; 10; i++) {
                  if (i % 2 === 0) {
                    //终止循环立即跳出
                    break;
                    //忽略下面的代码...
                  }
                  num++;
                }
                num => 1

                //continue语句
                var num = 0;
                for (var i = 1; i &lt; 10; i++) {
                  if (i % 2 === 0) {
                    //终止本次循环立即跳出,继续执行下一次循环
                    continue;
                    //忽略下面的代码...
                  }
                  num++;
                }
                num => 5

              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card :dis-hover="true" shadow style="width:450px">
        <h3 slot="title">2.label语句</h3>
        <div>
          <p>label语句可以在代码中添加标签。break和continue语句引用。</p>
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
      <Card :dis-hover="true" shadow style="width:450px">
        <h3 slot="title">3.with语句</h3>
        <div>
          <p>with语句将代码的作用域设置到一个特定的对象中。</p>
          <div v-highlight>
            <pre>
              <code>
                with (object) {
                  //statement
                }

                var qs = location.search.substring(1)
                var hostName = location.hostname
                var url = location.href

                //严格模式下无效
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
      <Card :dis-hover="true" shadow style="width:520px">
        <h3 slot="title">4.throw语句</h3>
        <div>
          <p>在Javascript中，当产生运行时错误或程序使用throw语句时就会显式地抛出异常。</p>
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
      <Card :dis-hover="true" shadow style="width:750px">
        <h3 slot="title">5.try/catch/finally语句</h3>
        <div>
          <ul>
            <li>try/catch/finally语句是Javascript的异常处理机制。其中catch与finally都是可选的，但try从句需要至少二者之一组成完整的语句。</li>
            <li>try语句中的代码，通常会从头执行到尾而不产生任何问题，但有时会出现错误，抛出一个异常（可以由throw语句直接抛出异常）。</li>
            <li>catch语句中的代码，当且仅当try语句块代码出现错误，抛出异常，才会执行这里的代码。</li>
            <li>catch语句，通过局部变量e来获得对Error对象或者抛出的其他值的引用。</li>
            <li>finally语句中的代码始终都会被执行（无论try语句块是否抛出了异常）。终止try语句块的方式有：</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                try {
                  //可能会导致错误的代码
                }
                catch(e) {
                  //在错误发生时如何处理
                }
                finally {
                  //这里代码始终都会被执行
                }
              </code>
            </pre>
          </div>
          <p>立即终止try语句的方式：
            <ol class="menu">
              <li>正常终止，执行完语句块的最后一条语句。</li>
              <li>抛出一个异常（或遇到throw语句），异常被catch语句捕获。</li>
              <li>抛出一个异常（或遇到throw语句），异常未被捕获，继续向上传播。</li>
              <li>通过break、continue或return语句终止。</li>
            </ol>
          </p>
          <div v-highlight>
            <pre>
              <code>
                //由于finally语句中也包含return语句
                //导致try语句中的return语句被忽略，fn函数返回3
                //去掉finally语句，fn函数返回1
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
          <p>使用prompt()和alert()来控制用户的输入和输出。</p>
          <div v-highlight>
            <pre>
              <code>
                try {
                  var n = Number(prompt('请输入一个正整数'， ''))
                  //若输入不合法，则抛出异常
                  if (n &lt; 0 ) {
                    throw new Error('n不能是负数')
                  }

                  //只有在输入合法的情况下执行这里的代码
                }
                catch(ex) {
                  //若输入不合法时，将执行这里的代码
                  alert(ex)
                }
                finally {}
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card :dis-hover="true" shadow style="width:450px">
        <h3 slot="title">6.debugger语句</h3>
        <div>
          <p>debugger语句用来产生一个断点，javascript代码会在断点的位置停止执行。这时可以使用浏览器的网页调试器可以输出变量的值，检查调用栈等。debugger语句不会启动调试器，
            只有在调试器已经运行中，这条语句才会真正产生一个断点。
          </p>
          <div v-highlight>
            <pre>
              <code>
                var x = 1;
                var y = x + 1;
                debugger;

                //若开启调试器，下面代码不会被运行
                //若未开启调试器，则会忽略debugger语句，代码会继续执行
                console.log(y)
              </code>
            </pre>
          </div>
        </div>
      </Card>
    </div>
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
  position: relative
  .layout-content
    display: flex
    flex-direction: row
    flex-wrap: wrap
.ivu-card
  align-self: flex-start !important
  margin-top: 20px
  margin-right: 20px
</style>
