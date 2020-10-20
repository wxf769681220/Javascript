<template>
  <div class="statement-2">
    <Card shadow style="width:450px">
      <h3 slot="title">1.if 语句</h3>
      <div>
        <p>if 语句是一种基本的控制语句。只有当 expression 求值结果为 true 时，执行相应的 statement 语句。</p>
        <div v-highlight>
          <pre>
            <code>
              if (expression) {
                statement1
              } else if (expression) {
                statement2
              } else if (expression) {
                statement3
              } else {
                statement4
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:550px">
      <h3 slot="title">2.switch 语句</h3>
      <div>
        <p>switch 语句也是一种基本的控制语句。</p>
        <div v-highlight>
          <pre>
            <code>
              switch (expression) {
                case 1:
                  statement1
                  break;
                case 2:
                  statement2
                  break;
                case 3:
                  statement3
                  break;
                default:
                  statement
              }
            </code>
          </pre>
        </div>
        <p>每个 case 后面都添加一个 break 语句，可以避免同时执行多个 case 代码。若需要混合使用，最好在代码中添加注释，说明是有意省略了 break 关键字。</p>
        <div v-highlight>
          <pre>
              <code>
                // 当a=1,statement1和statement2都将被执行
                // 当a=2,则只执行statement2
                switch (a) {
                  case 1:
                    /*合并两种情况*/
                    statement1
                  case 2:
                    statement2
                    break;
                  case 3:
                    statement3
                    break;
                  default:
                    statement
                }
              </code>
            </pre>
        </div>
        <p>switch 语句若用在函数中，可以使用 return 来代替 break 终止 switch 语句。</p>
        <div v-highlight>
          <pre>
            <code>
              function fn(a) {
                switch (a) {
                  case 1:
                    return 1;
                  case 2:
                    return 2;
                  default:
                    return 3;
                }
              }
            </code>
          </pre>
        </div>
        <p>switch 语句中每个 case 的值不一定是常量，可以使变量，甚至是表达式。</p>
        <div v-highlight>
          <pre>
            <code>
              var num = 10;
              switch (true) {
                case num &lt; 0:
                  statement1
                  break;
                case num &gt; 0:
                  statement2
                  break;
                case num === '10':
                  statement3
                  break;
                default:
                  statement4
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:450px">
      <h3 slot="title">3.while 语句</h3>
      <div>
        <p>
          while 语句是一种基本的循环语句。只有表达式的求值结果为 true 时，才会执行循环体。若表达式的求值结果永远是 true，那么循环也永远不会结束，
          因此在循环体中始终有一个与表达式的值相关联的变量来控制循环的结束。
        </p>
        <div v-highlight>
          <pre>
            <code>
              var count = 0;
              while (count &lt; 10) {
                console.log(count);
                count++;
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:450px">
      <h3 slot="title">4.do-while语句</h3>
      <div>
        <p>do-while 语句也是一种基本的循环语句。与 while 语句相比，它的循环体至少会被执行一次。</p>
        <div v-highlight>
          <pre>
              <code>
                var count = 0;
                do {
                  console.log(count);
                  count++;
                } while (count &lt; 10);
              </code>
            </pre>
        </div>
        <p>注意：do-while 循环使用分号结尾的。</p>
      </div>
    </Card>
    <Card shadow style="width:550px">
      <h3 slot="title">5.for 语句</h3>
      <div>
        <p>for 句也是一种基本的循环语句。</p>
        <div v-highlight>
          <pre>
            <code>
              var i;
              for (i = 0; i &lt; 10; i++) {
                console.log(i);
              }
            </code>
          </pre>
        </div>
        <p>使用 for 循环一次迭代改变多个变量的情况。</p>
        <div v-highlight>
          <pre>
            <code>
              var sum = 0
              var i,j
              for (i = 0, j = 10; i &lt; 10; i++, j--) {
                sum += i * j;
              }
              console.log(sum);
            </code>
          </pre>
        </div>
        <p>循环变量非数字值的情况。</p>
        <div v-highlight>
          <pre>
            <code>
              // 返回链表的最后一个节点对象
              function tail(o) {
                for (; o.next; o=o.next) /* empty */ ;
                return o;
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:520px">
      <h3 slot="title">6.for-in 语句</h3>
      <div>
        <p>for-in 语句用来枚举对象属性。</p>
        <div v-highlight>
          <pre>
            <code>
              for (var prop in o) {
                //输出每个属性的值
                console.log(o[prop]);
              }
            </code>
          </pre>
        </div>
        <p>枚举对象属性并将其放进一个数组中。</p>
        <div v-highlight>
          <pre>
            <code>
              var o = { x: 1, y: 2, z: 3 };
              var arr = [];
              var i = 0;
              for (arr[i++] in o) /* empty */ ;
              arr => ['x', 'y', 'z']
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
  name: 'statement-2',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.statement-2
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
