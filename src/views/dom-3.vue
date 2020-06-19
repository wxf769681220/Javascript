<template>
  <div class="dom-3">
    <div class="layout-content">
      <Card dis-hover shadow style="width:500px">
        <h3 slot="title">1.Element类型</h3>
        <div>
          <p>Element类型用于表现HTML元素，提供了对元素标签名、子节点 及特性的访问。</p>
          <div v-highlight>
            <pre>
              <code>
                var el = document.getElementById("htmlId")

                el.nodeType       => 1
                el.nodeName       => 'HTML'
                el.nodeValue      => null

                //这样最好，适用于任何文档
                if (el.nodeName.toLowerCase === 'html') {
                  //do something
                }
              </code>
            </pre>
          </div>
          <div v-highlight>
            <pre>
              <code>
                //创建元素节点
                document.createElement('div')
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:650px">
        <h3 slot="title">2.元素特性</h3>
        <div>
          <p>所有HTML元素都包含下列标准的属性特性：</p>
          <ul class="menu">
            <li>id：元素在文档中的唯一标识符。</li>
            <li>className：css类名。</li>
            <li>title：有关元素的附加说明信息。</li>
            <li>lang：元素内容的语言代码，很少用。</li>
            <li>dir：语言方向。值为 ltr 或 rtl，很少用。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                &lt;div id="hook" class="div1 div2 div3" title="body div">&lt;/div>

                var el = document.getElementById('hook')
                el.id => word
                el.className => 'div1 div2 div3'
                el.title => 'body div'
              </code>
            </pre>
          </div>
          <div v-highlight>
            <pre>
              <code>
                //创建属性节点，不建议使用
                var attr = document.createAttribute('align')
                attr.value = 'left'
              </code>
            </pre>
          </div>
          <p>在操作类名时，需要通过className属性添加、删除和替换类名。由于className是一个字符串，任何操作都是对这个字符串的修改。
            HTML5新增classList属性是新集合类型DOMTokenList的实例。该属性具有的属性或方法：
            <ul class="menu">
              <li>length：列表长度。</li>
              <li>value：表示类名的字符串形式。</li>
              <li>add(str)：将给定字符串添加到列表中。若值已经存在，则不再添加。</li>
              <li>remove(str)：从列表中删除指定字符串。</li>
              <li>toggle(str)：若列表存在给定字符串，则删除；否则，添加。</li>
              <li>contains(str)：表示列表中是否存在给定字符串。若存在，则返回true；否则，返回false。</li>
            </ul>
          </p>
          <div v-highlight>
            <pre>
              <code>
                var el = document.getElementById('hook')
                el.classList => DOMTokenList[div1,div2,div3]

                //访问值
                el.classList[0]      => 'div1'
                el.classList.item(0) => 'div1'

                //属性
                el.classList.length => 3
                el.classList.value => 'div1 div2 div3'
              </code>
            </pre>
          </div>
          <p>在操作css样式时，需要通过style属性。style对象是CSSStyleDeclaration的实例。</p>
          <div v-highlight>
            <pre>
              <code>
                var el = document.getElementById('hook')
                el.style => CSSStyleDeclaration{}
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:900px">
        <h3 slot="title">3.操作元素特性</h3>
        <div>
          <p>操作元素特性方法有三个：getAttribute()、setAttribute() 和 removeAttribute()。这三个方法可以对任何特性使用。</p>
          <div v-highlight>
            <pre>
              <code>
                &lt;div id="hook" class="box1 box2" onclick="onBox" data-text="text" style="color: red">content&lt;/div>
              </code>
            </pre>
          </div>
          <p>getAttribute()方法，可以获取元素特性。对于在HTML元素上没有定义的特性，返回null。</p>
          <div v-highlight>
            <pre>
              <code>
                var box = document.getElementById("hook")

                //一般不建议使用
                box.getAttribute("id") => 'hook'
                box.getAttribute("class") => 'box1 box2'
                box.getAttribute("onclick") => 'onBox'
                box['data-text'] => 'text' //可以取得自定义特性
                box.getAttribute("title") => null

                //任何元素的所有特性,都可以通过DOM元素本身的属性来访问
                box.id => 'hook'
                box.className => 'box1 box2'
                box.onclick => 'onBox'
                box['data-text'] => undefined //一般无法取得自定义特性
                box.title => ''
                box.style.color => 'red'
              </code>
            </pre>
          </div>
          <p>setAttribute()方法，设置元素特性值。若特性已经存在，setAttribute()会以指定的值替换现在的值；若特性不存在，setAttribute()则创建该特性并设置相应的值。</p>
          <div v-highlight>
            <pre>
              <code>
                var box = document.getElementById("hook")

                //以指定的值替换现在的值,完全覆盖
                box.setAttribute('class', "box")
                box.setAttribute('style', "color:green;font-size:60px")

                //创建特性并设置相应的值
                box.setAttribute('title', 'body box')

                //任何元素的所有特性,都可以通过DOM元素本身的属性来设置
                box['data-text'] = 'text'
                box.style.color = 'green'
                box.style.fontSize = '60px'
              </code>
            </pre>
          </div>
          <p>removeAttribute()方法，移除元素特性。这个方法返回undefiend。</p>
          <div v-highlight>
            <pre>
              <code>
                var box = document.getElementById("hook")

                box.removeAttribute("data-text")
                box['data-text'] => undefined

                box.removeAttribute("id")
                box.removeAttribute("class")
                box.id => ''
                box.className => ''
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:740px">
        <h3 slot="title">3.attributes特性对象</h3>
        <div>
          <p>
            所有HTML元素都有一个attributes属性，。该属性中保存着一个NamedNodeMap对象，这是一个类数组对象，用于保存一组有序的元素特性。
            NamedNodeMap对象是基于DOM结构动态执行查询的结果，因此DOM结构的变化能够自动反映在NamedNodeMap对象中。NamedNodeMap对象有如下四个方法：
          </p>
          <ul class="menu">
            <li>getNamedItem(name)：返回nodeName属性等于name的节点。</li>
            <li>setNamedItem(node)：添加节点，以节点的nodeName属性为索引；（很少用）。</li>
            <li>removeNamedItem(name)：移除nodeName属性等于name的节点。它返回被移除的属性节点。</li>
            <li>item(pos): 返回位于数字pos位置的节点。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                  &lt;div id="hook" class="box1 box2" data-text="text">&lt;/div>
              </code>
            </pre>
          </div>
          <div v-highlight>
            <pre>
              <code>
                var box = document.getElementById("hook")

                //保存着一个动态的属性节点的集合
                box.attributes => NamedNodeMap{ 0: id, 1: class, 2: data-text}

                //以下三种访问方式都是等价的
                box.attributes[0]      => id=hook
                box.attributes['id']   => id=hook
                box.getNamedItem('id') => id=hook

                if (box.attributes[0].nodeType === 2) {
                  box.attributes[0].nodeName  => 'id'
                  box.attributes[0].nodeValue => 'hook'
                }

                /***** 添加 ********/
                //创建一个属性节点title,向NamedNodeMap中添加title
                var createAttr = document.createAttribute("title")
                box.attributes.setNamedItem(createAttr)
                box.attributes['title'].nodeValue => ''

                /***** 移除 ********/
                var res = box.attributes.removeNamedItem('title')
                res => title='' //removeAttribute()相区别
                box.attributes['title'].nodeValue => error

                /********位置*******/
                //返回NamedNodeMap集合中的最后一个属性节点
                box.attributes.item(box.attributes.length-1) => data-text="text"
              </code>
            </pre>
          </div>
          <p>当我们需要遍历元素特性时会用到attributes特性对象。</p>
          <div v-highlight>
            <pre>
              <code>
                  function outPutAttributes(el) {
                    var pairs = new Array()
                    var attrName
                    var attrValue
                    for (var i = 0, len = el.attributes.length; i &lt; len; i++) {
                      attrName = el.attributes[i].nodeName
                      attrValue = el.attributes[i].nodeValue
                      pairs.push(attrName + "=\"" + attrValue + "\"")
                    }
                    return pairs.join(" ")
                  }

                  outPutAttributes(box) => "id='hook' class='box1 box2' data-text='text'"
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
  name: 'dom-3',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-3
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
