<template>
  <div class="form-1">
    <div class="layout-content">
      <Card dis-hover shadow style="width:610px">
        <h3 slot="title">1.HTMLFormELement类型</h3>
        <div>
          <p>
            在HTML中，表单是由&lt;form>元素表示的。在javascript中，表单使用HTMLFormELement类型，该类型继承了HTMLElement，因此表单与其他HTML元素具有相同的默认属性。
            不过HTMLFormELement也有自己的独有的属性和方法：
          </p>
          <ul class="menu">
            <li>name：表单的名称。等价于HTML中的name特性。</li>
            <li>action：接收请求的URL。等价于HTML中的action特性。</li>
            <li>method：要发送的http请求类型（通常是"get"或"post"）。等价于HTML中的method特性。</li>
            <li>target：用于发送请求和接收响应的窗口名称。等价于HTML中的target特性。</li>
            <li>acceptCharset：服务器能够处理的字符串。等价于HTML中的accept-charset特性。</li>
            <li>enctype：请求的编码类型。等价于HTML中的enctype特性。</li>
            <li>elements：表单中所有控件的集合。（HTMLFormControlsCollection对象）</li>
            <li>length：表单中控件的数量。</li>
            <li>submit()：用于提交表单。</li>
            <li>reset()：用于表单重置。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                &lt;body>
                  &lt;form
                    name="myForm"
                    action="page.html"
                    method="get"
                    target="_blank"
                  >
                    &lt;p>First name: &lt;input type="text" name="fname" />&lt;/p>
                    &lt;p>Last name: &lt;input type="text" name="lname" />&lt;/p>
                    &lt;input name="submit-btn" type="submit" value="提交" />
                  &lt;/form>
                &lt;/body>
              </code>
            </pre>
          </div>
          <div v-highlight>
            <pre>
              <code>
                var form = document.forms

                //通过数字索引值或name特性取得特定表单
                form[0] === form['myForm'] => true

                //表单字段长度
                form[0].length => 3

                //表单字段集合（HTMLFormControlsCollection类数组）
                form[0].elements => HTMLCollection[input, input, input]

                //查询表单某一个字段
                form[0].elements[0] === form[0].elements['fname'] => true
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:610px">
        <h3 slot="title">2.表单提交</h3>
        <div>
          <p>用户单击提交按钮或图像按钮时，就会提交表单。</p>
          <div v-highlight>
            <pre>
              <code>
                //通用方式
                &lt;input type="submit" />

                //自定义方式
                &lt;button type="submit">提交表单&lt;/button>

                //图像方式（不一定有效）
                &lt;img type="image" src="submit-btn.gif" />
              </code>
            </pre>
          </div>
          <p>在用户提交表单时，浏览器会在将请求发送给服务器之前触发submit事件。</p>
          <div v-highlight>
            <pre>
              <code>
                var form = document.forms['myForm']

                //这里取消了表单提交
                EventUtil.addHandler(form, 'submit', function(event) {
                  //获取事件对象
                  event = EventUtil.getEvent(event)

                  //阻止默认事件
                  EventUtil.preventDefault(event)
                })
              </code>
            </pre>
          </div>
          <p>表单不包含任何提交按钮时，可以使用submit()方法实现表单提交。这种方式在提交表单时，不会触发submit事件。使用时，需要注意在提交前验证表单数据。</p>
          <div v-highlight>
            <pre>
              <code>
                var form = document.forms['myForm']

                //提交表单
                form.submit()
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:610px">
        <h3 slot="title">3.表单多次提交</h3>
        <div>
          <p>很多用户会反复单击表单的提交按钮，导致多次提交表单。最常见解决方案：侦听submit事件，在用户单击一次提交按钮后，禁用该按钮。</p>
          <div v-highlight>
            <pre>
              <code>
                var form = document.forms['myForm']

                //侦听submit事件
                EventUtil.addHandler(form, 'submit', function(event) {

                  //获取form元素
                  var target = EventUtil.getTarget(event)

                  //获取提交按钮
                  var btn = target.elements['submit-btn']

                  //禁用
                  btn.disabled = true
                })
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:610px">
        <h3 slot="title">4.表单重置</h3>
        <div>
          <p>用户单击重置按钮，表单字段就会恢复到页面刚加载完毕时的初始值。</p>
          <div v-highlight>
            <pre>
              <code>
                //通用方式
                &lt;input type="reset" value="重置" />

                //自定义方式
                &lt;button type="reset">提交表单&lt;/button>
              </code>
            </pre>
          </div>
          <p>用户单击重置按钮时，就会触发reset事件。</p>
          <div v-highlight>
            <pre>
              <code>
                var form = document.forms['myForm']

                //这里取消了重置操作
                EventUtil.addHandler(form, 'reset', function(event) {
                  //获取事件对象
                  event = EventUtil.getEvent(event)

                  //阻止默认事件
                  EventUtil.preventDefault(event)
                })
              </code>
            </pre>
          </div>
          <p>调用reset()方法，实现表单重置。与submit()方法不同的是：调用reset()方法会触发reset事件。</p>
          <div v-highlight>
            <pre>
              <code>
                var form = document.forms['myForm']

                //表单重置
                form.reset()
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
  name: 'form-1',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.form-1
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
