<template>
  <div class="es6-11">
    <Card shadow style="width:700px">
      <h3 slot="title">1.proxy</h3>
      <p>Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。
        Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。</p>
      <div v-highlight>
        <pre>
          <code>
            let o = {}

            // 代理一个空对象
            var obj = new Proxy(o, {
              get: function (target, propKey, receiver) {
                console.log(`getting ${propKey}!`);
                return Reflect.get(target, propKey, receiver);
              },
              set: function (target, propKey, value, receiver) {
                console.log(`setting ${propKey}!`);
                return Reflect.set(target, propKey, value, receiver);
              }
            });

            obj.count = 1
            // setting count!

            obj.count++
            // getting count!
            //  setting count!
            //  2

            o => { count: 2 }
          </code>
        </pre>
      </div>
      <p>new Proxy()表示生成一个 Proxy 实例。其中 Proxy() 构造函数的第一个参数：target 参数表示所要拦截的目标对象，第二个参数：handler 参数也是一个对象，用来定制拦截行为。</p>
      <div v-highlight>
        <pre>
          <code>
            let o = {
              a: 1,
              b: 2,
              c: 3
            }

            var obj = new Proxy({}, {
              get: function(target, propKey) {
                return 35;
              }
            });

            // 若 Proxy 实例属性与原对象存在同名属性
            // 则原对象中的同名属性被拦截、屏蔽
            obj.a => 35
            obj.b => 35
            obj.3 => 35
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">2.1.proxy实例方法 - get</h3>
      <p></p>
      <div v-highlight>
        <pre>
          <code>
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">2.2.proxy实例方法 - set</h3>
      <p></p>
      <div v-highlight>
        <pre>
          <code>
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">2.3.proxy实例方法 - apply</h3>
      <p></p>
      <div v-highlight>
        <pre>
          <code>
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">2.4.proxy实例方法 - has</h3>
      <p></p>
      <div v-highlight>
        <pre>
          <code>
          </code>
        </pre>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'es6-11',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.es6-11
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
