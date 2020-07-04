<template>
  <div class="json-1">
    <div class="layout-content">
      <Card dis-hover shadow style="width:550px">
        <h3 slot="title">1.语法</h3>
        <div>
          <p>JSON是一种数据结构，而非一种编程语言。很多编程语言都有针对JSON的解析器和序列化器。JSON的语法可以表示以下三种类型的值：</p>
          <ul class="menu">
            <li>基本类型值：字符串、数值、布尔值和null。（不支持undefined）</li>
            <li>对象：一组无序的键值对。</li>
            <li>数组：一组有序的值的列表。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                //数字值
                10

                //字符串（必须使用双引号）
                "hello world!"

                //特殊值
                null

                //对象,属性名必须使用双引号
                //属性名可以是空字符串,访问该属性时需要使用方括号表示法
                //同一个对象中不应该出现同名属性
                {
                  "name": "lee",
                  "": '空字符串的值'
                }

                //数组
                [
                  {
                    "name": "lee",
                    "": '空字符串的值'
                  },
                  {
                    "name": "alex",
                    "": '空字符串的值'
                  }
                ]
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:650px">
        <h3 slot="title">2.解析与序列化</h3>
        <div>
          <p>JSON对象有两个方法：stringify()和parse()这两个方法分别用于把javascript对象序列化成字符串和把JSON字符串解析为原生javascript值。</p>
          <div v-highlight>
            <pre>
              <code>
                //javascript对象
                var data = {
                  name: "lee",
                  age: 20,
                  friends: ["tom", "Jerry", "Speike"]
                  say: function() {
                    return this.name + this.age
                  }
                }

                //序列化
                //不包含任何空格字符和缩进
                //所有函数及原型成员都会被忽略，不体现在结果集中
                //值为undefined的任何属性也都会被跳过
                var res = JSON.stringify(data)
                res => {"name":"lee","age":20,"friends":["tom","Jerry","Speike"]}
                typeof res => string

                //解析
                //接收非有效JSON格式字符串会抛出错误
                try {
                  var result = JSON.parse(result)
                } catch(ex) {
                  alert(ex)
                }
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:650px">
        <h3 slot="title">3.序列化选项</h3>
        <div>
          <p>
            JSON.stringify()方法除了要序列化javascript对象之外，还可以接收两个参数，这两个参数用于指定以不同的方式序列化javascrip 对象。
            第一个参数是一个过滤器，可以是一个数组或一个函数（过滤函数）；第二个参数是一个选项，表示是否在JSON字符串中保留缩进。如果过滤器是一个数组，
            则JSON.stringify()结果集中将只包含数组中列出的属性。
          </p>
          <div v-highlight>
            <pre>
              <code>
                var data = {
                  name: "lee",
                  age: 20,
                  friends: ["tom", "Jerry", "Speike"],
                  say: undefined
                }

                //第二个参数是数组，返回的结果字符串中只包含出现的数组项
                //值为undefined的数组项不会在结果集中
                var res = JSON.stringify(data, ["name", "age", "say"])
                res => "{"name":"lee","age":20}"

                //第二个参数是函数，该函数接收两个参数：属性名和对应属性值
                //若值为undefined，则在结果中忽略该属性
                //注意：属性名必须以字符串的形式存在
                var res = JSON.stringify(data, function(key, value) {
                  switch(key) {
                    case "age":
                      return 24
                    case "friends":
                      return value.join(",")
                    default:
                      return value
                  }
                })
                res => {"name":"lee","age":24,"friends":"tom,Jerry,Speike"}

                //第三个参数用于控制结果中的缩进和空白符
                //它可以是数字值，表示每个级别缩进的空格数
                //也可以是字符串：表示缩进的字符
                //缩进空格数或是最大只能为10
                var res = JSON.stringify(data, null, 2)
                res =>
                  {
                    "name": "lee",
                    "age": 20,
                    "friends": [
                      "tom",
                      "Jerry",
                      "Speike"
                    ]
                  }

                var res = JSON.stringify(data, null, '-')
                res =>
                {
                 -"name": "lee",
                 -"age": 20,
                 -"friends": [
                 --"tom",
                 --"Jerry",
                 --"Speike"
                 -]
                }
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:650px">
        <h3 slot="title">4.toJSON方法</h3>
        <div>
          <p>
            为对象定义toJSON方法，返回其自身的JSON数据格式。原生Date对象有一个toJSON方法，能够将javascript的Date对象自动装换成ISO 8601日期字符串
            （与在Date对象上调用toISOString()的结果完全一样）
          </p>
          <div v-highlight>
            <pre>
              <code>
                //可以为任何对象添加toJSON()方法
                //在使用JSON.stringify()方法序列化该对象时,会首先看对象上有没有该方法
                //若有且返回有效值，则调用该方法；反之，则返回对象本身
                var data = {
                  name: "lee",
                  toJSON: function() {
                    //return undefined
                  }
                }

                var res = JSON.stringify(data)
                res => undefined
                typeof res => undefined

                /********************************/
                var data = {
                  name: "lee",
                  age: 24,
                  friends: ["tom", "Jerry", "Speike"],
                  toJSON: function() {
                    return this.name + this.age
                  }
                }
                var res = JSON.stringify(data)
                res => "lee24"
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:650px">
        <h3 slot="title">5.解析选项</h3>
        <div>
          <p>JSON.parse()方法也可以接收另一个参数。该参数是一个函数（还原函数），该函数接收两个参数：一个键和一个值，并且都需要返回一个值。</p>
          <div v-highlight>
            <pre>
              <code>
                var data = {
                  name: "lee",
                  age: 20,
                  friends: ["tom", "Jerry", "Speike"]
                }

                var x = JSON.stringify(data)

                //解析
                var y = JSON.parse(x, function (key, value) {
                  switch (key) {
                    case "name":
                      return "alex"    //以新值插入
                    case "friends":
                      return undefined //表示删除
                    default:
                      return value     //原值插入
                  }
                })
                y => {name: "alex", age: 20}
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
import { getMockData } from 'api'

export default {
  name: 'json-1',
  created() {
    this.getData()
  },
  methods: {
    getData() {
      getMockData().then(res => {
        console.log(res)
      })
    }
  },
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.json-1
  position: relative
  .layout-content
    display: flex
    flex-direction: row
    flex-wrap: wrap
.ivu-card
  align-self: flex-start !important
  margin-top: 20px
  margin-right: 20px
.bg-gray
  background: rgb(245, 245, 245)
.bg-1
  background: rgb(235, 247, 255)
.bg-2
  background: rgb(248, 248, 248)
</style>
