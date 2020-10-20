<template>
  <div class="es6-5">
    <Card shadow style="width:500px">
      <h3 slot="title">1.Number.isFinite()和Number.isNaN()</h3>
      <p>
        Number.isFinite()和Number.isNaN()两个方法。Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity。如果参数类型不是数值，Number.isFinite一律返回false。
        Number.isNaN()用来检查一个值是否为NaN。如果参数类型不是NaN，Number.isNaN一律返回false。
      </p>
      <div v-highlight>
        <pre>
          <code>
            Number.isFinite(15); => true
            Number.isFinite(0.8); => true
            Number.isFinite(NaN); => false
            Number.isFinite(Infinity); => false
            Number.isFinite(-Infinity); => false
            Number.isFinite('foo'); => false
            Number.isFinite('15'); => false
            Number.isFinite(true); => false

            Number.isNaN(NaN) => true
            Number.isNaN(15) => false
            Number.isNaN('15') => false
            Number.isNaN(true) => false
            Number.isNaN(9/NaN) => true
            Number.isNaN('true' / 0) => true
            Number.isNaN('true' / 'true') => true
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">2. Number.parseInt和Number.parseFloat</h3>
      <p>ES6 将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变。这样做的目的，是逐步减少全局性方法，使得语言逐步模块化。</p>
      <div v-highlight>
        <pre>
          <code>
            // ES5的写法
            parseInt('12.34') => 12
            parseFloat('123.45#') => 123.45

            // ES6的写法
            Number.parseInt('12.34') => 12
            Number.parseFloat('123.45#') => 123.45

            Number.parseInt === parseInt => true
            Number.parseFloat === parseFloat => true
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">3.Number.isInteger</h3>
      <p>Number.isInteger()用来判断一个数值是否为整数。</p>
      <div v-highlight>
        <pre>
          <code>
            Number.isInteger(25) => true
            Number.isInteger(25.0) => true
            Number.isInteger(25.1) => false
            Number.isInteger('25') => false
            Number.isInteger(true) => false

            // 小于JavaScript能够分辨的最小值
            // 会被自动转为 0
            // Number.isInteger也会误判。
            Number.isInteger(3.0000000000000002) => true
          </code>
        </pre>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'es6-5',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.es6-5
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
