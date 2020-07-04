<template>
  <div class="function-2">
    <div class="layout-content">
      <Card :dis-hover="true" shadow style="width:600px">
        <h3 slot="title">1.arguments对象</h3>
        <div>
          <p>arguments是指向实参对象的引用，实参对象是一个类数组对象。</p>
          <div v-highlight>
            <pre>
              <code>
                //获取传入函数的实参列表中最大的值
                function max() {
                  //存储最小值
                  var max = Number.NEGATIVE_INFINITY
                  for (var i = 0, len = arguments.length; i &lt; len; i++) {
                    if (arguments[i] > max) max = arguments[i]
                  }
                  return max
                }
                max(1,2,3,4,5) => 5
              </code>
            </pre>
          </div>
          <p>既然argments对象是类数组对象，因此改变arguments的length属性值并不会影响访问实参。</p>
          <div v-highlight>
            <pre>
              <code>
                max(1,2,3,4,5)

                function max() {
                  //实参长度
                  arguments.length => 5

                  //重设length
                  arguments.length = 2

                  //正常访问
                  arguments[2] => 3
                }
              </code>
            </pre>
          </div>
          <p>arguements对象、实参和形参的关系。</p>
          <div v-highlight>
            <pre>
              <code>
                max(1, 2, 3, 4, 5)

                function max(a,b) {
                  //arguments[0]和a指代同一个值
                  arguments[0] => 1
                  a => 1

                  //arguments[0]和a修改其中一个值会影响到另一个
                  arguments[0] = true
                  a => true
                }
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card :dis-hover="true" shadow style="width:450px">
        <h3 slot="title">2.arguments对象的callee和caller属性</h3>
        <div>
          <p>callee属性指代当前正在执行的函数。caller非标准属性，指代当前正在执行的函数的函数。</p>
          <div v-highlight>
            <pre>
              <code>
              function factorial() {
                arguments.callee => factorial(){}
                arguments.callee.caller => fn(){}
              }

              (function fn() {
                factorial()
              }())
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card :dis-hover="true" shadow style="width:520px">
        <h3 slot="title">3.对象属性作为实参。</h3>
        <div>
          <p>如何忽略函数传入实参的顺序：对象属性作为实参。</p>
          <div v-highlight>
            <pre>
              <code>
                function result(a, b, c) {
                  //逻辑代码
                  return a + b + c
                }

                //需要事先对外提供对象的属性名，如x、y和z
                function bridge(o) {
                  return result(o.x || 2, o.y || 3, o.z || 4)
                }

                bridge({ y: 1, z: 2 }) => 5
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card :dis-hover="true" shadow style="width:500px">
        <h3 slot="title">4.剩余参数与分布参数</h3>
        <div>
          <p>剩余参数语法。</p>
          <div v-highlight>
            <pre>
              <code>
                //剩余参数
                function sum(a, b, ...nums) {
                  arguments.length => 5
                  arguments[0] => 1
                  arguments[4] => 5

                  nums instanceof Array => true
                  nums => [3,4,5]

                  var total = a + b,
                  i = 0,
                  len = nums.length;

                  while (i &lt; len) {
                    total += nums[i]
                    i++;
                  }

                  return total
                }

                sum(1, 2, 3, 4, 5) => 15
              </code>
            </pre>
          </div>
          <p>分布参数语法。</p>
          <div v-highlight>
            <pre>
              <code>
                //分布参数
                function sum(a, b, ...nums) {
                  arguments.length => 5
                  arguments[0] => 1
                  arguments[4] => 5

                  nums instanceof Array => true
                  nums => [3,4,5]
                }

                sum(...[1, 2, 3, 4, 5])

                /***************************************/
                function sum(a, b, ...nums) {
                  arguments.length => 6
                  arguments[0] => 1
                  arguments[1] => 1
                  arguments[5] => 5

                  nums instanceof Array => true
                  nums => [2,3,4,5]
                }

                sum(1, ...[1, 2, 3, 4, 5])
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
  name: 'function-2',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.function-2
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
