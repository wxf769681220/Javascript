<template>
  <div class="array-1">
    <Card shadow style="width:500px">
      <h3 slot="title">1.创建数组</h3>
        <p>数组字面量。</p>
        <div v-highlight>
          <pre>
            <code>
              var arr = []
            </code>
          </pre>
        </div>
        <p>数组项不一定是常量，它还可以是任意表达式。</p>
        <div v-highlight>
          <pre>
            <code>
              var count = 10
              var arr = [count + 1, count + 2]
            </code>
          </pre>
        </div>
        <p>数组允许有可选的结尾的逗号。</p>
        <div v-highlight>
          <pre>
            <code>
              var arr = [,,,]
              arr.length => 3
              arr[0] => undefined
            </code>
          </pre>
        </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">2.数组读写</h3>
      <p>数组是对象的特殊形式。</p>
      <div v-highlight>
        <pre>
          <code>
            var obj = {}

            // 扩展属性
            obj[1] = "one"

            // 数字索引转换为字符串作为属性名来使用
            obj => {"1": "one"}
          </code>
        </pre>
      </div>

      <p>数组索引是对象属性名的一种特殊形式。</p>
      <div v-highlight>
        <pre>
          <code>
            var arr = ['x', 'y', 'z']

            for (let p in arr) {
              console.log(p) => 0 1 2
            }
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">3.稀疏数组</h3>
      <p>稀疏数组就是包含从 0 开始的不连续索引的数组。稀疏数组的length属性值大于数组项个数。</p>
      <div v-highlight>
        <pre>
          <code>
            // 不包含数组项，长度为5
            var arr1 = new Array(5)

            // 不包含数组项，长度为3
            var arr2= [,,,]

            // 包含1个项，长度为101
            var arr3 = []
            arr3[100] = 0
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">4.数组长度</h3>
      <div>
        <p>数组的 length 属性决定了数组的长度。设置 length 值时，若数组的实际数组项小于 length 的值，则使用 undefined 值填充数组；若数组的实际数组项大于 length 的值，
          那么数组将从末尾删除多余的数组项。</p>
        <div v-highlight>
          <pre>
            <code>
              var arr = ["x", "y", "z"]
              arr.length = 4
              arr[3] => undefined

              // 删除数组中的最后一项
              arr.length = arr.length - 1
              arr => ["x", "y"]
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:620px">
      <h3 slot="title">5.数组遍历-1</h3>
      <div>
        <p>for 循环是遍历数组最常见的方式。</p>
        <div v-highlight>
          <pre>
            <code>
              var arr = ["x", "y", "z"]
              for (var i = 0; i &lt; arr.length; i++) {
                // 循环体
              }
            </code>
          </pre>
        </div>
        <p>这种基本的数组遍历需要优化，即：数组的长度应该只查询一次而非每次循环都要查询。</p>
        <div v-highlight>
          <pre>
            <code>
              for (var i = 0, len = arr.length; i &lt; len; i++) {
                // 循环体
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:620px">
      <h3 slot="title">5.数组遍历-2</h3>
      <div>
        <p>遍历稀疏数组，跳过 null、undefined 和不存在的元素。</p>
        <div v-highlight>
          <pre>
            <code>
              for (var i = 0, len = arr.length; i &lt; len; i++) {
                if (!arr[i]) continue
                // 循环体
              }
            </code>
          </pre>
        </div>
        <p>遍历稀疏数组，只跳过 undefined 和不存在的元素。</p>
        <div v-highlight>
          <pre>
            <code>
              for (var i = 0, len = arr.length; i &lt; len; i++) {
                if (arr[i] === undefined) continue
                // 循环体
              }
            </code>
          </pre>
        </div>
        <p>跳过不存在的元素，但仍然要处理存在的 undefined 元素。</p>
        <div v-highlight>
          <pre>
            <code>
              for (var i = 0, len = arr.length; i &lt; len; i++) {
                if (!(i in arr)) continue
                // 循环体
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:620px">
      <h3 slot="title">6.检测数组的方法</h3>
      <p>当 web 浏览器中有多个窗口或窗体（frame）存在，每个窗口都有自己的 javascript 环境，都有自己的全局对象。这时使用 instanceof 操作符用于数组检测并不可靠，
        可以使用 Array.isArray() 函数。</p>
      <div>
        <div v-highlight>
          <pre>
            <code>
              var arr = []
              arr instanceof Array  => true
              Array.isArray(arr)    => true
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
  name: 'array-1',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.array-1
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
