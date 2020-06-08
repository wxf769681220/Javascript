<template>
  <div class="statement-3">
    <div class="layout-content">
      <Card :dis-hover="true" shadow style="width:450px">
        <h3 slot="title">1.break和continue语句</h3>
        <div>
          <p>break和continue语句用于在循环语句中精准地控制代码的执行。break语句会立即退出循环，强制执行之后的代码。continue语句也是立即退出循环，但退出循环后会从循环的顶部继续执行。</p>
          <div v-highlight>
            <pre>
              <code>
                //break语句
                var num = 0
                for (var i = 1; i &lt; 10; i++) {
                  if (i % 2 === 0) {
                    break //终止循环立即跳出
                  }
                  num++
                }
                num => 1

                //continue语句
                var num = 0
                for (var i = 1; i &lt; 10; i++) {
                  if (i % 2 === 0) {
                    continue //跳转到下一次循环
                    //忽略这里的代码
                  }
                  num++
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
                var num = 0
                outermost:
                for (var i = 0; i &lt; 10; i++) {
                  for (var j = 0; j &lt; 10; j++) {
                    if (i == 5 && j == 5) {
                      break outermost
                    }
                    num++
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
          <p>try/catch/finally语句是Javascript的异常处理机制。其中catch与finally都是可选的，但try从句需要至少二者之一组成完整的语句。</p>
          <div v-highlight>
            <pre>
              <code>
                try {
                  //通常这里的代码会从头执行到尾而不产生任何问题
                  //但有时会抛出一个异常，要么是由throw语句直接抛出异常
                  //要么是通过调用一个方法间接抛出异常
                }
                catch(e) {
                  //当且仅当try语句块抛出异常，才会执行这里的代码
                  //这里可以可以通过局部变量e来获得对Error对象或者抛出的其他值的引用
                  //这里的代码可以基于某种原因处理这个异常，也可以忽略这个异常
                  //还可以通过throw语句重新抛出这个异常
                }
                finally {
                  //无论try语句块是否抛出了异常，这里的逻辑总是会执行；终止try语句块的方式有：
                  //1.正常终止，执行完语句块的最后一条语句
                  //2.通过break、continue或return语句终止
                  //3.抛出一个异常，异常被catch语句捕获
                  //4.抛出一个异常，异常未被捕获，继续向上传播
                }
              </code>
            </pre>
          </div>
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
        <ul class="menu">
          <li>正常情况下，解析器执行到try块的尾部，然后开始执行finally中的代码，</li>
          <li>当由于return、break和continue语句使得解析器跳出try语句块时，解析器在执行新的目标代码之前先执行finally中的代码。</li>
          <li>若try中抛出了一个异常，且存在一条与之相关的catch从句处理这个异常，解析器会首先执行catch中的代码，然后在执行finally中的代码。</li>
          <li>若不存在处理异常的catch从句，解析器会首先执行finally中的代码，然后向上传播这个异常，直到找到能处理这个异常的catch从句。</li>
        </ul>
        <div v-highlight>
          <pre>
              <code>
                //多catch从句
                //在catch从句的参数中加入关键字if以及一个条件判断表达式。
                //当产生一个异常时，程序会尝试依次执行每一条catch从句，
                //执行catch从句会先对其条件表达式求值，若求值结果为true，则执行catch从句中的逻辑，
                //同时跳过其他的catch从句（即不再执行其他的catch从句）
                try {
                    // 这里可能会抛出多种类型的异常
                    throw 1;
                } catch (e
                    if e instanceof ReferenceError) {
                    // 这里处理引用错误
                } catch (e
                    if e === "quit") {
                    // 这里处理字符串是“quit”的情况
                } catch (e
                    if typeof e === "string") {
                    // 处理其他字符串的情况
                } catch (e) {
                    // 处理余下的异常情况
                } finally {
                    // finally从句正常执行
                }
              </code>
            </pre>
        </div>
      </Card>
      <Card :dis-hover="true" shadow style="width:450px">
        <h3 slot="title">6.debugger语句</h3>
        <div>
          <div v-highlight>
            <pre>
              <code>
                function fn(a) {
                  if (a === undefined) debugger
                  //...
                }
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
