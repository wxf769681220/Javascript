<template>
  <div class="operator-1">
    <div class="layout-content">
      <Card dis-hover shadow style="width:auto">
        <h3 slot="title">1.运算符</h3>
        <div>
          <table class="table-bordered">
            <thead>
              <tr class="bg-gray">
                <th>值</th>
                <th>字符串</th>
                <th>数字</th>
                <th>布尔值</th>
                <th>对象</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-1">
                <td>undefined</td>
                <td>"undefined"</td>
                <td>NaN</td>
                <td>false</td>
                <td>Error</td>
              </tr>
              <tr class="bg-1">
                <td>null</td>
                <td>"null"</td>
                <td>0</td>
                <td>false</td>
                <td>Error</td>
              </tr>
              <tr class="bg-2">
                <td>true</td>
                <td>"true"</td>
                <td>1</td>
                <td></td>
                <td>new Boolean(true)</td>
              </tr>
              <tr class="bg-2">
                <td>false</td>
                <td>"false"</td>
                <td>0</td>
                <td></td>
                <td>new Boolean(false)</td>
              </tr>
              <tr class="bg-1">
                <td>""(空字符串)</td>
                <td></td>
                <td>0</td>
                <td>false</td>
                <td>new String("")</td>
              </tr>
              <tr class="bg-1">
                <td>"1"(非空，数字)</td>
                <td></td>
                <td>1</td>
                <td>true</td>
                <td>new String("1")</td>
              </tr>
              <tr class="bg-1">
                <td>"hello"(非空，非数字)</td>
                <td></td>
                <td>NaN</td>
                <td>true</td>
                <td>new String("hello")</td>
              </tr>
              <tr class="bg-2">
                <td>0</td>
                <td>"0"</td>
                <td></td>
                <td>false</td>
                <td>new Number(0)</td>
              </tr>
              <tr class="bg-2">
                <td>-0</td>
                <td>"0"</td>
                <td></td>
                <td>false</td>
                <td>new Number(-0)</td>
              </tr>
              <tr class="bg-2">
                <td>NaN</td>
                <td>"NaN"</td>
                <td></td>
                <td>false</td>
                <td>new Number(NaN)</td>
              </tr>
              <tr class="bg-2">
                <td>Infinity</td>
                <td>"Infinity"</td>
                <td></td>
                <td>true</td>
                <td>new Number(Infinity)</td>
              </tr>
              <tr class="bg-2">
                <td>-Infinity</td>
                <td>"-Infinity"</td>
                <td></td>
                <td>true</td>
                <td>new Number(-Infinity)</td>
              </tr>
              <tr class="bg-2">
                <td>1(数字，非零)</td>
                <td>"1"</td>
                <td></td>
                <td>true</td>
                <td>new Number(1)</td>
              </tr>
              <tr class="bg-1">
                <td>{}(任何对象)</td>
                <td></td>
                <td></td>
                <td>true</td>
                <td></td>
              </tr>
              <tr class="bg-1">
                <td>[](任何数组)</td>
                <td>" "</td>
                <td>0</td>
                <td>true</td>
                <td></td>
              </tr>
              <tr class="bg-1">
                <td>[1](1个数字元素)</td>
                <td>"1"</td>
                <td>1</td>
                <td>true</td>
                <td></td>
              </tr>
              <tr class="bg-1">
                <td>['a'](1个字符串元素)</td>
                <td></td>
                <td>NaN</td>
                <td>true</td>
                <td></td>
              </tr>
              <tr class="bg-1">
                <td>function(){}(任何函数)</td>
                <td></td>
                <td>NaN</td>
                <td>true</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'operator-1',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.operator-1
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
