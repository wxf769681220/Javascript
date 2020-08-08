<template>
  <div class="operator-3">
    <Card shadow>
      <h3 slot="title">1.运算符优先级</h3>
      <Table border :row-class-name="rowClassName" :columns="tableColumns" :data="tableData"></Table>
    </Card>
    <Card dis-hover shadow style="width:550px">
      <h3 slot="title">2.运算符的结合性</h3>
      <p>从左到右结合，如：</p>
      <div>
        <div v-highlight>
          <pre>
              <code>
                var total = x + y + z

                //等价于
                var total = ((x+y) + z)
              </code>
            </pre>
        </div>
        <p>从右到左结合，如：一元运算符、三元运算符和赋值运算符。</p>
        <div v-highlight>
          <pre>
              <code>
                var x = ~-y       //等价于：var x = ~(-y)

                var y = x = z = a //等价于：var y = (x=(z=a))

                a?b:c?d:e?f:g     //等价于：a?b:(c?d:(e?f:g))
              </code>
            </pre>
        </div>
      </div>
    </Card>
    <Card dis-hover shadow style="width:550px">
      <h3 slot="title">3.运算顺序</h3>
      <p>运算符的优先级和结合性规定了它们在复杂的表达式中的运算顺序。在 Javascript 中总是严格的按照从左到右的顺序来计算表达式的。</p>
      <div>
        <div v-highlight>
          <pre>
              <code>
                /**
                 * 先通过从左到右计算各个表达式
                 * 通过结合性得到最终结果
                 * 首先计算表达式 total，再计算 x、y 和 z
                 * 然后计算 y*z，加上 x，赋值给变量 total
                 */

                var total = x + y * z
              </code>
            </pre>
        </div>
        <p>举例：递增递减运算符：</p>
        <div v-highlight>
          <pre>
              <code>
                var i，k;
                i = 3;
                k = i++ + i++;

                k => 7 （3+(3+1)）
                i => 5

                /****************/
                var i，k;
                i = 3;
                k = i++ + i;

                k => 7（3+(3+1)）
                i => 4
              </code>
            </pre>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card, Table } from 'view-design'

export default {
  name: 'operator-3',
  data() {
    return {
      tableColumns: [
        {
          title: '运算符',
          key: 'type',
          width: '200px'
        },
        {
          title: '操作',
          key: 'operator',
          width: '380px'
        },
        {
          title: '结合性',
          key: 'combine',
          width: '150px'
        },
        {
          title: '操作数个数',
          key: 'number',
          width: '150px'
        }
      ],
      tableData: [
        {
          type: '++',
          operator: '前/后增量',
          combine: '从右至左',
          number: 1
        },
        {
          type: '--',
          operator: '前/后减量',
          combine: '从右至左',
          number: 1
        },
        {
          type: '+',
          operator: '转换为数字',
          combine: '从右至左',
          number: 1
        },
        {
          type: '-',
          operator: '转换为数字',
          combine: '从右至左',
          number: 1
        },
        {
          type: '~',
          operator: '按位非',
          combine: '从右至左',
          number: 1
        },
        {
          type: '!',
          operator: '逻辑非',
          combine: '从右至左',
          number: 1
        },
        {
          type: 'delete',
          operator: '删除属性',
          combine: '从右至左',
          number: 1
        },
        {
          type: 'typeof',
          operator: '检测操作数类型',
          combine: '从右至左',
          number: 1
        },
        {
          type: 'void',
          operator: 'void(expression)',
          combine: '从右至左',
          number: 1
        },
        {
          type: '*、/、%',
          operator: '乘、除、求余',
          combine: '从左至右',
          number: 2
        },
        {
          type: '+、-',
          operator: '加法或字符串连接、减法',
          combine: '从左至右',
          number: 2
        },
        {
          type: '<<、>>、>>>',
          operator: '左移位、有符号右移和无符号右移',
          combine: '从左至右',
          number: 2
        },
        {
          type: '<、<=、>、>=',
          operator: '比较数字、字符串顺序(字母表)顺序',
          combine: '从左至右',
          number: 2
        },
        {
          type: 'instanceof',
          operator: '检测对象类型',
          combine: '从左至右',
          number: 2
        },
        {
          type: 'in',
          operator: '检测属性是否存在',
          combine: '从左至右',
          number: 2
        },
        {
          type: '==、!==、===、!==',
          operator: '相等、不等、恒等和非恒等',
          combine: '从左至右',
          number: 2
        },
        {
          type: '&、^、|',
          operator: '按位与、按位异或和按位或',
          combine: '从左至右',
          number: 2
        },
        {
          type: '&&、||',
          operator: '逻辑与和逻辑或',
          combine: '从左至右',
          number: 2
        },
        {
          type: '?:',
          operator: '条件运算符',
          combine: '从右至左',
          number: 3
        },
        {
          type: '=',
          operator: '赋值',
          combine: '从右至左',
          number: 2
        },
        {
          type: '*=、/=、%=、+=、-=',
          operator: '运算且赋值',
          combine: '从右至左',
          number: 2
        },
        {
          type: ',',
          operator: '忽略第一个操作数，返回第二个操作数',
          combine: '从左至右',
          number: 2
        }
      ]
    }
  },
  methods: {
    rowClassName(row, index) {
      if (index <= 8 && index >= 0) {
        return 'bg-info'
      } else if (index <= 17 && index > 8) {
        return 'bg-success'
      } else if (index <= 18 && index > 17) {
        return 'bg-warning'
      } else {
        return 'bg-error'
      }
    }
  },
  components: {
    Card,
    Table
  }
}
</script>

<style scoped lang="stylus">
.operator-3
  display: flex
  flex-direction: row
  flex-wrap: wrap
  .ivu-card
    display: block
    margin-top: 20px
    margin-right: 20px
    font-size: 16px !important
    color: #000 !important
  >>>.ivu-table
    font-size: 16px
    color: #000
  >>>.ivu-table .bg-info td
    background-color: #2db7f5
    color: #fff
  >>>.ivu-table .bg-success td
    background-color: #19be6b
    color: #fff
  >>>.ivu-table .bg-warning td
    background-color: #ff9900
    color: #fff
  >>>.ivu-table .bg-error td
    background-color: #ed4014
    color: #fff
</style>
