<template>
  <div class="object-4">
    <Card shadow style="width:540px">
      <h3 slot="title">1.代理（Proxy）对象</h3>
      <div v-highlight>
        <pre>
          <code>
            var target = {
              name: "alex",
              age: 24,
              say: function() {
                return this.name + this.age;
              }
            }

            //创建代理对象
            var proxy = new Proxy(target, {});
            proxy.name = "lee";
            proxy.friends = ["f1", "f2", "f3"];

            proxy.name     => "lee"
            proxy.age      => 24
            proxy.friends  => ["f1", "f2", "f3"]
            proxy.say()    => "lee24"

            proxy.name === target.name       => true
            proxy.age === target.age         => true
            proxy.friends === target.friends => true
            proxy.say() === target.say()     => true
            proxy.say === target.say         => true
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:540px">
      <h3 slot="title">2.代理函数</h3>
      <div>
        <p></p>
        <div v-highlight>
          <pre>
            <code>
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:540px">
      <h3 slot="title">3.映射与集合</h3>
      <div>
        <p></p>
        <div v-highlight>
          <pre>
            <code>
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
  name: 'object-4',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.object-4
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
