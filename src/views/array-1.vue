<template>
  <div class="array-1">
    <div class="layout-content">
      <Card dis-hover shadow style="width:450px">
        <h3 slot="title">1.创建数组</h3>
        <div>
          <p>数组项不一定是常量，它还可以是任意表达式。</p>
          <div v-highlight>
            <pre>
              <code>
                var count = 10
                var arr = [count+1, count+2, count+3]
              </code>
            </pre>
          </div>
        </div>

        <div>
          <p>数组允许有可选的结尾的逗号。</p>
          <div v-highlight>
            <pre>
              <code>
                var arr = [,,,]
                arr.length => 3
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:620px">
        <h3 slot="title">2.数组读写</h3>
        <div>
          <p>数组是对象的特殊形式。</p>
          <div v-highlight>
            <pre>
              <code>
                var obj = {}
                obj[1] = "one" //数字索引转换为字符串作为属性名来使用
              </code>
            </pre>
          </div>
        </div>
        <div>
          <p>数组索引是对象属性名的一种特殊形式。</p>
          <div v-highlight>
            <pre>
              <code>
                var arr = ['x', 'y', 'z']
                arr[-1.23]          //创建一个名为"-1.23"的属性作为常规的对象属性
                arr['1'] => 'y'     //数组的第二项
                arr[1.000] => 'y'   //与arr[1]相等
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:620px">
        <h3 slot="title">3.稀疏数组</h3>
        <div>
          <p>稀疏数组就是包含从0开始的不连续索引的数组。</p>
          <div v-highlight>
            <pre>
              <code>
                var arr1 = new Array(5) //不包含数组项，长度为5
                var arr2= [,,,]         //不包含数组项，长度为3
                var arr3 = []
                arr3[100] = 0           //包含1个项，长度为101
              </code>
            </pre>
          </div>
          <p>当数组是稀疏数组时，length属性值大于数组项个数。</p>
        </div>
      </Card>
      <Card dis-hover shadow style="width:620px">
        <h3 slot="title">4.数组长度</h3>
        <div>
          <p>数组的length属性决定了数组的长度。设置length值时，若数组的实际数组项小于length的值，则使用undefined值填充数组；若数组的实际数组项大于length的值，那么数组将从末尾删除多余的数组项。</p>
          <div v-highlight>
            <pre>
              <code>
                var arr = ["x", "y", "z"]
                arr.length = 4
                arr[3] => undefined

                arr.length = arr.length - 1 //删除数组中的最后一项
                arr => ["x", "y"]
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:620px">
        <h3 slot="title">5.数组遍历-1</h3>
        <div>
          <p>for循环是遍历数组最常见的方式。</p>
          <div v-highlight>
            <pre>
              <code>
                var arr = ["x", "y", "z"]
                for (var i = 0; i &lt; arr.length; i++) {
                  //循环体
                }
              </code>
            </pre>
          </div>
          <p>这种基本的数组遍历需要优化，即：数组的长度应该只查询一次而非每次循环都要查询。</p>
          <div v-highlight>
            <pre>
              <code>
                for (var i = 0, len = arr.length; i &lt; len; i++) {
                  //循环体
                }
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:620px">
        <h3 slot="title">5.数组遍历-2</h3>
        <div>
          <p>遍历稀疏数组，跳过null、undefined和不存在的元素。</p>
          <div v-highlight>
            <pre>
              <code>
                for (var i = 0, len = arr.length; i &lt; len; i++) {
                  if (!arr[i]) continue
                  //循环体
                }
              </code>
            </pre>
          </div>
          <p>遍历稀疏数组，只跳过undefined和不存在的元素。</p>
          <div v-highlight>
            <pre>
              <code>
                for (var i = 0, len = arr.length; i &lt; len; i++) {
                  if (arr[i] === undefined) continue
                  //循环体
                }
              </code>
            </pre>
          </div>
          <p>跳过不存在的元素，但仍然要处理存在的undefined元素。</p>
          <div v-highlight>
            <pre>
              <code>
                for (var i = 0, len = arr.length; i &lt; len; i++) {
                  if (!(i in arr)) continue
                  //循环体
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
  name: 'array-1',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.array-1
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
