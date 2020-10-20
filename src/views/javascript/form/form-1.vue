<template>
  <div class="form-1">
    <Card shadow style="width:780px">
      <h3 slot="title">1.HTMLFormELement类型</h3>
      <div>
        <p>
          在 HTML 中，表单是由 &lt;form> 元素表示的。在 javascript 中，表单使用 HTMLFormELement 类型，该类型继承了 HTMLElement，因此表单与其他 HTML 元素具有相同的默认属性。
          不过 HTMLFormELement 也有自己的独有的属性和方法：
        </p>
        <ul class="menu">
          <li>name：表单的名称。等价于 HTML 中的 name 特性。</li>
          <li>action：接收请求的URL。等价于 HTML 中的 action 特性。</li>
          <li>method：要发送的 http 请求类型，通常是 "get" 或 "post"，默认值是 "get"。等价于 HTML 中的 method 特性。</li>
          <li>target：用于发送请求和接收响应的窗口名称。等价于 HTML 中的 target 特性。</li>
          <li>acceptCharset：服务器能够处理的字符串。等价于 HTML 中的 accept-charset 特性。</li>
          <li>enctype：请求的编码类型，默认值是 "application/x-www-form-urlencoded"。等价于 HTML 中的 enctype 特性。</li>
          <li>autocomplete：规定表单是否应该启用自动完成功能，通常是 "on" 或 "off"，默认值是 "on"。等价于 HTML 中的 autocomplete 特性。</li>
          <li>elements：表单中所有控件的集合。（HTMLFormControlsCollection 对象）</li>
          <li>length：表单中控件的数量。</li>
          <li>submit()：用于提交表单。</li>
          <li>reset()：用于表单重置。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              /* html结构：
                &lt;form
                  name="myForm"
                  action=""
                  method="get"
                  target=""
                  acceptCharset=""
                  enctype="application/x-www-form-urlencoded"
                  autocomplete="on"
                >
                  //...
                &lt;/form>
              */

              var form = document.forms

              // 获取对表单元素的引用
              form[0] === form['myForm'] => true

              // 表单字段长度
              form[0].length => 3
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:680px">
      <h3 slot="title">2.表单提交</h3>
      <div>
        <p>只要表单中存在以下任何一种按钮，那么在表单任意元素拥有焦点的情况下，按下回车就可以提交表单。（textarea 是个例外，它只换行不提交表单）</p>
        <div v-highlight>
          <pre>
            <code>
              &lt;input type="submit"/>

              &lt;button type="submit">提交表单&lt;/button>

              // 需要浏览器支持
              &lt;img type="image" src="submit-btn.gif"/>
            </code>
          </pre>
        </div>
        <p>在用户提交表单时，浏览器会在将请求发送给服务器之前触发 submit 事件。这样我们就可以在表单提交之前验证表单数据，并决定是否允许表单的提交。阻止这个事件的默认行为，就可以直接取消表单的提交。</p>
        <div v-highlight>
          <pre>
            <code>
              var form = document.forms['myForm']

              // 这里取消了表单提交
              EventUtil.addHandler(form, 'submit', function(event) {
                event = EventUtil.getEvent(event)
                EventUtil.preventDefault(event)
              })
            </code>
          </pre>
        </div>
        <p>若表单不包含任何提交按钮时，还可以使用 submit() 方法实现表单提交。这种方式在提交表单时，不会触发 submit 事件。使用时，需要注意在提交前验证表单数据。</p>
        <div v-highlight>
          <pre>
            <code>
              // 提交表单
              form.submit()
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:680px">
      <h3 slot="title">3.表单重置</h3>
      <div>
        <p>用户单击重置按钮，表单字段就会恢复到页面刚加载完毕时的初始值。</p>
        <div v-highlight>
          <pre>
            <code>
              &lt;input type="reset" value="重置" />
              &lt;button type="reset">重置&lt;/button>
            </code>
          </pre>
        </div>
        <p>用户单击重置按钮时，就会触发 reset 事件。与 submit 一样，阻止这个事件的默认行为，就可以直接取消表单的重置操作。</p>
        <div v-highlight>
          <pre>
            <code>
              var form = document.forms['myForm']

              EventUtil.addHandler(form, 'reset', function(event) {
                event = EventUtil.getEvent(event)
                EventUtil.preventDefault(event)
              })
            </code>
          </pre>
        </div>
        <p>调用 reset() 方法，实现表单重置。与 submit() 方法不同的是：调用 reset() 方法会触发 reset 事件。</p>
        <div v-highlight>
          <pre>
            <code>
              // 表单重置
              form.reset()
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:650px">
      <h3 slot="title">4.FormData类型</h3>
      <div>
        <p>
          XMLHttpRequest2级定义一个 FormData 类型。FormData 为序列化表单以及创建与表单格式相同的数据（用于通过 XHR 传输）提供了便利。
          它不必明确地在 XHR 上设置请求头部，XHR 对象可以识别传入的数据类型是 FormData 的实例，并自动配置适当的头部信息。
        </p>
        <div v-highlight>
          <pre>
            <code>
              var xhr = createXHR()

              // 实例化对象
              var data = new FormData()

              // 传入键与值
              data.append("myname", "lee")
              data.append("myage", 20)

              // 通过XHR传输与表单格式相同的数据
              xhr.send(data)

              /*************************************/
              var xhr = createXHR()

              var myForm = document.forms("myForm")

              var data = new FormData(myForm)

              xhr.send(data)
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
  name: 'form-1',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.form-1
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
