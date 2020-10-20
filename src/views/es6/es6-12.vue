<template>
  <div class="es6-12">
    <Card shadow style="width:700px">
      <h3 slot="title">1.Reflect</h3>
      <ul class="menu">
        <li>将 Object 对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到 Reflect 对象上。</li>
        <li>现阶段，某些方法同时在 Object 和 Reflect 对象上部署，未来的新方法将只部署在 Reflect 对象上。也就是说，从 Reflect 对象上可以拿到语言内部的方法。</li>
        <li>
          修改某些 Object 方法的返回结果，让其变得更合理。比如，Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误，
          而 Reflect.defineProperty(obj, name, desc) 则会返回 false。
        </li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            // 老写法
            try {
              Object.defineProperty(target, property, attributes);
              // success
            } catch (e) {
              // failure
            }

            // 新写法
            if (Reflect.defineProperty(target, property, attributes)) {
              // success
            } else {
              // failure
            }
          </code>
        </pre>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'es6-12',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.es6-12
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
