<template>
  <div class="form-3">
    <Card shadow style="width:1200px">
      <h3 slot="title">1.表单序列化</h3>
      <div>
        <p>在 javascript 中，可以利用表单的 type 属性，连同 name 和 value 属性一起实现对表单的序列化。在表单提交期间，浏览器是如何将数据发送给服务器的：</p>
        <ul class="menu">
          <li>对表单字段的名称和值进行URL编码，使用和号（&）分隔；</li>
          <li>不发送禁用的字段；</li>
          <li>不发送 type 为 "reset" 和 "button" 的按钮；</li>
          <li>只发送勾选的复选框和单选框；</li>
          <li>多选选择框中的每个选中的值单独一个条目；</li>
          <li>&lt;select> 元素的值，就是选中的 &lt;option> 元素的 value 特性的值。若 &lt;option> 元素没有 value 值，则是 &lt;option> 元素的文本值；</li>
          <li>
            在用户单击提交按钮提交表单时，也会发送提交按钮。若用户不是通过单击提交按钮，像通过 submit() 方法实现表单提交的情况，
            则不发送提交按钮（包括 type 为 "image" 的 &lt;input> 元素）。
          </li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // 表单序列化
              function serialize(form, output) {
                var parts = output === "object" ? {} : [],
                  field = null,
                  i,
                  len,
                  j,
                  optLen,
                  option,
                  optValue;

                for (i = 0, len = form.elements.length; i &lt; len; i++) {
                  field = form.elements[i];
                  switch (field.type) {
                    case "select-one":
                    case "select-multiple":
                      if (field.name.length) {
                        for (j = 0, optLen = field.options.length; j &lt; optLen; j++) {
                          option = field.options[j];
                          if (option.selected) {
                            optValue = "";
                            if (option.hasAttribute) {
                              optValue = (option.hasAttribute("value") ? option.value : option.text);
                            } else {
                              optValue = (option.attributes["value"].specified ? option.value : option.text);
                            }
                            // 输出格式
                            if (output === "object") {
                              parts[field.name] = optValue
                            } else {
                              parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(optValue));
                            }
                          }
                        }
                      }
                      break;
                    case undefined:
                    case "file":
                    case "submit":
                    case "reset":
                    case "button":
                      break;
                    case "radio":
                    case "checkbox":
                      if (!field.checked) {
                        break;
                      }
                    // 执行默认操作
                    default:
                      if (field.name.length) {
                        if (output === "object") {
                          parts[field.name] = field.value
                        } else {
                          parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
                        }
                      }
                  }
                }
                if (output === "object") {
                  return parts;
                }
                return parts.join("&");
              }
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
  name: 'form-3',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.form-3
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
