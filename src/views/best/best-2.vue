<template>
  <div class="best-2">
    <Card shadow style="width:580px">
      <h3 slot="title">1.避免全局查找</h3>
      <div>
        <p>随着作用域链中作用域的增加，访问当前以外的变量的时间也在增加。访问全局变量总是要比访问局部变量慢，因为需要遍历作用域链。</p>
        <div v-highlight>
          <pre>
            <code>
              // 避免
              function updateUI() {
                var imgs = document.getElementsByTagName('img');
                //每次循环都要对 length属性进行一次搜索
                //每次循环都要对 document对象进行一次搜索
                for (var i = 0; i &lt; imgs.length; i++) {
                  imgs[i].title = document.title + "image" + i;
                }
              }

              // 推荐
              function updateUI() {
                // 将document对象保存在本地的doc变量中
                var doc = document;
                var imgs = doc.getElementsByTagName('img');
                // 将length属性值保存在本地的len变量中
                for (var i = 0, len = imgs.length; i &lt; len; i++) {
                  imgs[i].title = doc.title + "image" + i;
                }
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:450px">
      <h3 slot="title">2.避免使用with语句</h3>
      <div>
        <p>with 语句会创建自己的作用域，因此会增加其中执行的代码的作用域链的长度。</p>
        <div v-highlight>
          <pre>
            <code>
              // 避免
              function updateBody() {
                width (document.body) {
                  innerHTML = "hello world"
                }
              }

              // 推荐
              function updateBody() {
                var body = document.body
                body.innerHTML = "hello world"
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:640px">
      <h3 slot="title">3.避免不必要的属性查找</h3>
      <div>
        <p>对象上的属性查找都要比访问变量或者数组花费更长时间，因为必须在原型链中对拥有该名称的属性进行一次搜索。</p>
        <div v-highlight>
          <pre>
            <code>
              // 避免
              var query = location.href.substring(location.href.indexOf("?"));

              // 推荐
              var url = location.href;
              url.substring(url.indexOf("?"));
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:440px">
      <h3 slot="title">4.减少语句数量</h3>
      <div>
        <p>变量声明只用一个var语句，之间由逗号隔开。</p>
        <div v-highlight>
          <pre>
            <code>
              // 避免
              var x = 1;
              var y = 2;

              // 推荐
              var x = 1, y = 2;
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:440px">
      <h3 slot="title">5.插入迭代值</h3>
      <div>
        <p>使用迭代值时，根据情况尽可能的合并语句。</p>
        <div v-highlight>
          <pre>
            <code>
              // 避免
              var count = value[i];
              i++;

              // 推荐
              var count = value[i++]
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
  name: 'best-2',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.best-2
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
