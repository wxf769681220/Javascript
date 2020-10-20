<template>
  <div class="es6-18">
    <Card shadow style="width:600px">
      <h3 slot="title">1.class的继承</h3>
      <p>Class 可以通过 extends 关键字实现继承，这比 ES5 的通过修改原型链实现继承，要清晰和方便很多。</p>
      <div v-highlight>
        <pre>
          <code>
            class Point {}
            class ColorPoint extends Point {}
          </code>
        </pre>
      </div>
      <p>constructor方法和 toString 方法之中，都出现了super关键字，它在这里表示父类的构造函数，用来新建父类的 this 对象。</p>
      <div v-highlight>
        <pre>
          <code>
            class ColorPoint extends Point {
              constructor(x, y, color)
                // 调用父类的constructor(x, y)
                // 获取this对象，若不使用super方法
                // 子类就得不到this对象，从而报错
                super(x, y);
                this.color = color;
              }

              toString() {
                // 调用父类的toString()
                return this.color + ' ' + super.toString();
              }
            }
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">2.super 关键字</h3>
      <p>super 作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次 super 函数。作为函数时，super() 只能用在子类的构造函数之中，用在其他地方就会报错。</p>
      <div v-highlight>
        <pre>
          <code>
            class A {}

            class B extends A {
              constructor() {
                super();
              }

              super(); // 报错
            }
          </code>
        </pre>
      </div>
      <p>super 作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。</p>
      <div v-highlight>
        <pre>
          <code>
            class A {
              p() {
                return 2;
              }
            }

            class B extends A {
              constructor() {
                super();
                console.log(super.p()); => 2
              }
            }

            let b = new B();
          </code>
        </pre>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'es6-18',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.es6-18
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
