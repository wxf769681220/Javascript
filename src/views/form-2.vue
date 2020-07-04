<template>
  <div class="form-2">
    <div class="layout-content">
      <Card dis-hover shadow style="width:750px">
        <h3 slot="title">1.表单元素（字段）</h3>
        <div>
          <p>
            每个表单都有一个elements属性，该属性是表单中所有表单元素（字段）的集合。这个elements集合是一个有序的列表，其中包含着表单中所有字段，
            如：&lt;fieldset>、&lt;input>、&lt;button>、&lt;select>和&lt;textarea>。（注意：&lt;label>元素并不是表单元素
            ；&lt;select>、&lt;optgroup>和&lt;option>控件只算一个表单元素）
          </p>
          <div v-highlight>
            <pre>
              <code>
                &lt;form name="my-form">
                  &lt;fieldset class="form-group">
                    &lt;!------ 用户名 ------->
                    &lt;label class="input-label">
                      &lt;span>Name:&lt;/span>
                      &lt;input type="text" name="user-name" />
                    &lt;/label>
                    &lt;!------- 密码 ------>
                    &lt;label class="input-label">
                      &lt;span>Password:&lt;/span>
                      &lt;input type="password" name="user-password" />
                    &lt;/label>
                  &lt;/fieldset>
                  &lt;fieldset class="form-group">
                    &lt;!------------------ 单选按钮 ------------------->
                    &lt;div class="radio-group">
                      &lt;label class="input-label">
                        &lt;input name="fruit" type="radio" value="苹果" checked />
                        &lt;span>苹果&lt;/span>
                      &lt;/label>
                      &lt;label class="input-label">
                        &lt;input name="fruit" type="radio" value="桃子" />
                        &lt;span>桃子&lt;/span>
                      &lt;/label>
                      &lt;label class="input-label">
                        &lt;input name="fruit" type="radio" value="梨" />
                        &lt;span>梨&lt;/span>
                      &lt;/label>
                    &lt;/div>
                    &lt;!----------------- 复选框 ---------------------->
                    &lt;div class="checkbox-group">
                      &lt;label class="input-label">
                        &lt;input name="fruit-apple" type="checkbox" value="苹果" checked />
                        &lt;span>苹果&lt;/span>
                      &lt;/label>
                      &lt;label class="input-label">
                        &lt;input name="fruit-peach" type="checkbox" value="桃子" checked />
                        &lt;span>桃子&lt;/span>
                      &lt;/label>
                      &lt;label class="input-label">
                        &lt;input name="fruit-pear" type="checkbox" value="梨" />
                        &lt;span>梨&lt;/span>
                      &lt;/label>
                    &lt;/div>
                    &lt;!--------------------- 选择列表 ---------------------->
                    &lt;select name="select-car">
                      &lt;optgroup label="瑞典汽车">
                        &lt;option value="volvo">Volvo&lt;/option>
                        &lt;option value="saab" selected>Saab&lt;/option>
                      &lt;/optgroup>
                      &lt;optgroup label="德国汽车">
                        &lt;option value="mercedes">Mercedes&lt;/option>
                        &lt;option value="audi">Audi&lt;/option>
                      &lt;/optgroup>
                    &lt;/select>
                  &lt;/fieldset>
                  &lt;fieldset class="form-group">
                    &lt;!---------- 文本框 ------------->
                    &lt;textarea name="text-area" rows="10" cols="30">我是一个文本框。&lt;/textarea>
                  &lt;/fieldset>
                  &lt;fieldset class="form-group">
                    &lt;input type="submit" value="提交" />
                    &lt;input type="reset" value="重置" />
                  &lt;/fieldset>
                &lt;/form>
              </code>
            </pre>
          </div>
          <div v-highlight>
            <pre>
              <code>
                var form = document.forms["my-form"]
                form.elements.length => 16

                //既然是有序列表，表单字段可以通过数字索引来访问
                //也可以通过name特性来访问
                form.elements[0] === form.elements['user-info'] => true

                //像单选按钮,它们的name都是"fruit",在访问elements["fruit"]时,
                //返回一个NodeList对象
                form.elements['fruit'] => NodeList[input,input,input]
                form.elements['fruit'][0] === form.elements[4] => true
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:620px">
        <h3 slot="title">2.表单字段属性</h3>
        <div>
          <p>以下列举表单字段一些共有的属性：</p>
          <ul class="menu">
            <li>form：当前字段所属表单的指针。（只读）</li>
            <li>name：当前字段名称。</li>
            <li>type：当前字段类型，如："text"、"radio"、"checkbox"等。</li>
            <li>readOnly：当前字段是否只读。</li>
            <li>disabled：当前字段是否被禁用。</li>
            <li>tableIndex：当前字段的切换（tab）序号。</li>
            <li>value：当前字段将要被提交给服务器的值。（对于文件来说，此属性只读，包含文件在计算机中的路径）</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                var field = form.elements['submit-btn']

                field.form => //取得对&lt;form>元素引用
                field.name => 'submit-btn'
                field.type => 'submit'
                field.readOnly => false
                field.disabled => false
                field.value => '提交'
              </code>
            </pre>
          </div>
          <p>
            在为表单字段的属性设置值时，不要通过click事件来实现，因为有的浏览会在触发submit事件之前触发click事件。比如需要提交表单后禁用提交按钮（防止多次提交表单），若使用click事件，有可能导致
            先触发click事件而禁用了提交按钮，使得表单永远不会被提交。
          </p>
          <div v-highlight>
            <pre>
              <code>
                //侦听submit事件
                EventUtil.addHandler(form, 'submit', function(event) {
                  //do something

                  //提交表单后,禁用提交按钮
                  var target = EventUtil.getTarget(event)
                  var btn = target.elements['submit-btn']
                  btn.disabled = true
                })
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:680px">
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
                EventUtil.addHandler(window, 'load', function (event) {
                  var field = form.elements["user-name"]
                  field.focus()

                  //延迟3秒后,失去焦点
                  setTimeout(function() {
                    field.blur()
                  },3000)
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
                /* html结构:
                 * &lt;input id="numberInput" style="background-color: red" />
                **/

                var numberInput = document.getElementById("numberInput")

                //修改文本框的背景颜色
                EventUtil.addHandler(numberInput, 'focus', function (event) {
                  event = EventUtil.getEvent(event)
                  var target = EventUtil.getTarget(event)
                  if (target.style.backgroundColor === "red") {
                    target.style.backgroundColor = "yellow"
                  }
                })

                //恢复文本框的背景颜色
                EventUtil.addHandler(numberInput, 'blur', function (event) {
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
                EventUtil.addHandler(numberInput, 'change', function (event) {
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
          <p>
            文本框获得焦点时选中其所有文本内容是非常常见的操作。这样做用户不用一个一个去删除文本。当用户选择文本框中的任意字符或调用了select()时，都会触发一个select事件。
            同时提供两个属性selectionStart和selectionEnd，用于表示用户具体选择了什么文本。
          </p>
          <div v-highlight>
            <pre>
              <code>
                var field = form.elements["text-area"]

                //选中文本框所有文本内容
                EventUtil.addHandler(field, 'focus', function (event) {
                  var target = EventUtil.getTarget(event)
                  target.select()
                })

                /*******************************************************/
                EventUtil.addHandler(field, 'select', function (event) {
                  var target = EventUtil.getTarget(event)
                  //非IE
                  target.value.substring(target.selectionStart, target.selectionEnd)
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
                var field = form.elements["text-area"]
                EventUtil.addHandler(field, 'keypress', function(event) {
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
                //文本框只允许输入数值,非数字键将被屏蔽
                var field = form.elements["text-area"]
                EventUtil.addHandler(field, 'keypress', function(event) {
                  event = EventUtil.getEvent(event)

                  //跨浏览器取得字符编码
                  var charCode = EventUtil.getCharCode(event)
                  console.log(charCode)

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
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">5.自动切换焦点</h3>
        <div>
          <p>用户填写完当前字段时，自动将焦点切换至下一个字段。通常必须知道用户已经输入了既定长度的数据（如：电话号码）</p>
          <div v-highlight>
            <pre>
              <code>
                /*html结构:
                  &lt;form name="my-form">
                    &lt;fieldset class="form-group" name="user-info">
                      &lt;!------ 用户名 ------->
                      &lt;label class="input-label">
                        &lt;span>Name:&lt;/span>
                        &lt;input type="text" name="user-name" maxlength="6"/>
                      &lt;/label>
                      &lt;!------- 密码 ------>
                      &lt;label class="input-label">
                        &lt;span>Password:&lt;/span>
                        &lt;input type="password" name="user-password" />
                      &lt;/label>
                    &lt;/fieldset>
                  &lt;/form>
                **/
                //前一个输入框达到字符最大值后，焦点自动切换至下一个输入框
                function tabForward(event) {
                  event = EventUtil.getEvent(event)
                  var target = EventUtil.getTarget(event)
                  if (target.value.length === target.maxLength) {
                    var form = target.form
                    for (var i = 0, len = form.elements.length; i &lt; len; i++) {
                      if (form.elements[i] === target) {
                        if (form.elements[i + 1]) {
                          form.elements[i + 1].focus()
                        }
                        return
                      }
                    }
                  }
                }

                var form = document.forms["my-form"]
                EventUtil.addHandler(form.elements["user-name"], 'keyup', tabForward)
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:650px">
        <h3 slot="title">6.HTML5约束验证API</h3>
        <div>
          <p>required：表单必填字段。任何标注有require的字段在提交表单时都不能空着。对于空着的必填字段，通常浏览器会阻止表单提交。</p>
          <div v-highlight>
            <pre>
              <code>
                /*html结构:
                 *&lt;input type="text" name="user-name" required/>
                **/
                //检测字段是否是必填字段
                var form = document.forms["my-form"],
                field = form.elements["user-name"].required
                if (field.required) {
                  //...
                }
              </code>
            </pre>
          </div>
          <p>
            以下表单元素需要填写基于数字的值："number"、"range"、"datetime"、"datetime-local"、"date"、"month"、"week"和"time"。
            对于这些所有的数字类型的输入元素，可以指定min属性、max属性和step（从min到max的数值差）属性。若不满足约束条件，通常浏览器会阻止表单提交。
          </p>
          <div v-highlight>
            <pre>
              <code>
                /*html结构:
                 *&lt;input type="number" name="count" min="0" max="99" step="5" />
                **/

                //尚未得到浏览器支持
                field.stepUp()
                field.stepUp(5)
                field.stepDown()
                field.stepDown(5)
              </code>
            </pre>
          </div>
          <p>pattern属性：属性值是一个正则表达式，用于匹配文本框中的值。</p>
          <div v-highlight>
            <pre>
              <code>
                /* html结构:
                 * 只允许在文本字段中输入数值
                 * &lt;input type="text" name="count" pattern="\d+"/>
                **/
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:620px">
        <h3 slot="title">7.检测表单的有效性</h3>
        <div>
          <p>checkValidity()方法：用于检测表单中某个字段是否有效。</p>
          <div v-highlight>
            <pre>
              <code>
                var checkField = form.elements["user-name"].checkValidity()
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
                var checkForm = form.checkValidity()
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
            <li>customError：若设置了setCustomValidity()，则为true，否则返回false。</li>
            <li>patternMismatch：若值与指定的pattern属性不匹配，则返回true。</li>
            <li>rangeOverflow：若值比max值大，则返回true。</li>
            <li>rangeUnderflow：若值比min值小，则返回true。</li>
            <li>stepMismatch：若min和max之间的步长值不合理，则返回true。</li>
            <li>toolong：若值超出了maxlength属性指定的长度，则返回true。</li>
            <li>typeMismatch：若值不是"mail"和"url"要求的格式，则返回true。</li>
            <li>valid：若这里出现的属性都是false，则返回true。</li>
            <li>validMissing：若标注的require的字段没有值，则返回true。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
              /*html结构:
               *&lt;input type="email" name="email" />
              **/
                var field = form["email"]
                if (field.validity && !field.validity.valid) {
                  if (field.validity.typeMismatch) {
                    //...
                  }
                }
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:750px">
        <h3 slot="title">8.禁用验证</h3>
        <div>
          <p>novalidate属性，表示表单不进行验证。</p>
          <div v-highlight>
            <pre>
              <code>
                /*html结构:
                 *&lt;form name="my-form" action="example.php" noValidate>
                **/

                //设置禁用表单
                form.noValidate = true
              </code>
            </pre>
          </div>
          <p>一个表单中有多个提交按钮，指定点击某个提交按钮不进行表单验证，可以在相应的按钮上添加formnovalidate属性。</p>
          <div v-highlight>
            <pre>
              <code>
                /*html结构:
                 *&lt;input type="submit" value="提交验证" />
                 *&lt;input type="submit" name="btnNovalidate" value="提交不验证" formnovalidate/>
                **/

                //设置不验证表单的按钮
                form["btnNovalidate"].formnovalidate = true
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
