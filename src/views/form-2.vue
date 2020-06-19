<template>
  <div class="form-2">
    <div class="layout-content">
      <Card dis-hover shadow style="width:720px">
        <h3 slot="title">1.表单的elements属性</h3>
        <div>
          <p>每个表单都有一个elements属性，该属性是表单中所有元素（字段）的集合。elements集合是一个有序的列表，可以通过数字索引和name特性来访问其列表成员。</p>
          <div v-highlight>
            <pre>
              <code>
                &lt;form
                  name="myForm"
                  action="page.html"
                  method="get"
                  target="_blank"
                >
                  &lt;p>First name: &lt;input type="text" name="fname" />&lt;/p>
                  &lt;p>Last name: &lt;input type="text" name="lname" />&lt;/p>

                  &lt;input type="radio" name="color" value="red" />
                  &lt;input type="radio" name="color" value="green" />
                  &lt;input type="radio" name="color" value="blue" />

                  &lt;button name="submit-btn" type="submit">提交&lt;/button>
                &lt;/form>
              </code>
            </pre>
          </div>
          <div v-highlight>
            <pre>
              <code>
                var form = document.forms['myForm']

                //表单字段长度
                form.length => 6

                //表单字段集合（HTMLFormControlsCollection类数组）
                form.elements => HTMLCollection[input, input, input, input, input, button]

                //查询表单某一个字段
                form.elements['color'] => RadioNodeList[input, input, input]
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:620px">
        <h3 slot="title">2.表单字段属性</h3>
        <div>
          <p>表单字段所具有的属性：</p>
          <ul class="menu">
            <li>form：表示当前字段所属的表单。</li>
            <li>name：表示当前字段名称。</li>
            <li>type：表示当前字段类型。（如：'checkbox'、'radio'、'submit'等）</li>
            <li>value：表示当前字段将被提交给服务器的值。</li>
            <li>readOnly：表示当前字段是否只读。</li>
            <li>disabled：表示当前字段是否被禁用。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                //取得某个字段
                var field = form.elements['submit-btn']

                field.name => 'submit-btn'
                field.type => 'submit'
              </code>
            </pre>
          </div>
          <p>
            在为表单字段的属性设置值时，不要通过click事件来实现，因为有个浏览会在触发submit事件之前触发click事件。比如需要提交表单后禁用提交按钮，若使用click事件，有可能导致
            先触发click事件而禁用了提交按钮，使得表单永远不会被提交。
          </p>
          <div v-highlight>
            <pre>
              <code>
                EventUtil.addHandler(form, 'submit', function(event) {
                  //do something

                  //禁用提交按钮
                  var target = EventUtil.getTarget(event)
                  var btn = target.elements['submit-btn']
                  btn.disabled = true
                })
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:620px">
        <h3 slot="title">3.表单字段方法</h3>
        <div>
          <p>表单字段所具有的属性：</p>
          <ul class="menu">
            <li>focus()：将浏览器的焦点设置到表单字段，即激活表单字段。（会触发focus事件）</li>
            <li>blur()：从元素中移走焦点。（会触发blur事件）</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                EventUtil.addHandler(form, 'load', function (event) {
                  var field = document.forms['myForm'].elements[0]
                  field.focus()
                  document.activeElement => input
                  field.blur()
                  document.activeElement => body
                })
              </code>
            </pre>
          </div>
          <p>
            change事件：对于&lt;input>和&lt;textarea>元素，在它们失去焦点且value值改变时触发；对于&lt;select>元素时，在其选项改变时触发。利用focus、blur和change事件
            验证用户在字段中输入的数据。
          </p>
          <div v-highlight>
            <pre>
              <code>
                //修改文本框的背景颜色
                EventUtil.addHandler(box, 'focus', function (event) {
                  event = EventUtil.getEvent(event)
                  var target = EventUtil.getTarget(event)
                  if (target.style.backgroundColor === "red") {
                    target.style.backgroundColor = "yellow"
                  }
                })

                //恢复文本框的背景颜色
                EventUtil.addHandler(box, 'blur', function (event) {
                  event = EventUtil.getEvent(event)
                  var target = EventUtil.getTarget(event)
                  //用户是否输入了非数字字符
                  if (/[^\d]/.test(target.value)) {
                    target.style.backgroundColor = "red"
                  } else {
                    target.style.backgroundColor = ""
                  }
                })

                //在用户输入了非数字值时再次修改背景颜色
                EventUtil.addHandler(box, 'change', function (event) {
                  event = EventUtil.getEvent(event)
                  var target = EventUtil.getTarget(event)
                  //用户是否输入了非数字字符
                  if (/[^\d]/.test(target.value)) {
                    target.style.backgroundColor = "red"
                  } else {
                    target.style.backgroundColor = ""
                  }
                })
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:790px">
        <h3 slot="title">4.过滤输入</h3>
        <div>
          <p>响应向文本框中插入字符操作是keypress事件。可以通过阻止这个事件的默认行为来屏蔽此类字符。</p>
          <div v-highlight>
            <pre>
              <code>
                //这是一种极端操作，它将屏蔽所有按键操作
                var textbox = form.elements[0]
                EventUtil.addHandler(textbox, 'keypress', function(event) {
                  event = EventUtil.getEvent(event)
                  EventUtil.preventDefault(event)
                })
              </code>
            </pre>
          </div>
          <p>上述代码，由于所有按键都被屏蔽，结果导致文本框变成只读的。若想屏蔽特定字符，则需要检测keypress事件对应的字符编码。如下：</p>
          <div v-highlight>
            <pre>
              <code>
                //文本框只允许输入数值
                var textbox = form.elements[0]
                EventUtil.addHandler(textbox, 'keypress', function(event) {
                  event = EventUtil.getEvent(event)
                  var target = EventUtil.getTarget(event)

                  //跨浏览器取得字符编码
                  var charCode = EventUtil.getCharCode(event)

                  //将字符编码转换成字符串,
                  //屏蔽字符串大于9的键,
                  //确保用户没有按下Ctrl键,
                  if (!/\d/.test(String.fromCharCode(charCode)) && charCode > 9 && !event.ctrlKey) {
                    EventUtil.preventDefault(event)
                  }
                })
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">5.HTML5约束验证API</h3>
        <div>
          <p>required：</p>
          <div v-highlight>
            <pre>
              <code>
              </code>
            </pre>
          </div>
          <p>type值等于以下值："email"、"url"、"number"、"range"、"datetime"、"datetime-local"、"date"、"month"、"week"和"time"等。</p>
          <div v-highlight>
            <pre>
              <code>
              </code>
            </pre>
          </div>
          <p>min、max、step</p>
          <div v-highlight>
            <pre>
              <code>
              </code>
            </pre>
          </div>
          <p>pattern属性：</p>
          <div v-highlight>
            <pre>
              <code>
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:620px">
        <h3 slot="title">6.检测表单的有效性</h3>
        <div>
          <p>checkValidity()方法：用于检测不到中某个字段是否有效。</p>
          <div v-highlight>
            <pre>
              <code>
                var checkField = document.forms[0].elements[0].checkValidity()
                if (checkField) {
                  //字段有效
                } else {
                  //字段无效
                }
              </code>
            </pre>
          </div>
          <p>当表单自身调用checkValidity()方法：用于检测整个表单是否有效。若表单所有字段有效，则返回true；若其中有一个字段无效。则返回false。</p>
          <div v-highlight>
            <pre>
              <code>
                var checkForm = document.forms[0].checkValidity()
                if (checkForm) {
                  //表单有效
                } else {
                  //表单无效
                }
              </code>
            </pre>
          </div>
          <p>checkValidity()方法告诉哪个字段无效，而validity属性告诉你为什么这个字段无效。validity对象包含一系列属性，每个属性返回一个布尔值：</p>
          <ul class="menu">
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:620px">
        <h3 slot="title">7.禁用验证</h3>
        <div>
          <p>novalidate属性，表示表单不进行验证。</p>
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
  name: 'form-2',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.form-2
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
