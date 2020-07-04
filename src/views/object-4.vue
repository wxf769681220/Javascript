<template>
  <div class="object-4">
    <div class="layout-content">
      <Card dis-hover shadow style="width:540px">
        <h3 slot="title">1.代理（Proxy）对象</h3>
        <div>
          <p></p>
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
        </div>
      </Card>
      <Card dis-hover shadow style="width:540px">
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
      <Card dis-hover shadow style="width:540px">
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
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'object-4',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.object-4
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
