<template>
  <div class="es6-19">
    <Card shadow style="width:800px">
      <h3 slot="title">1.module</h3>
      <ul class="menu">
        <li>在 ES6 之前，社区制定了一些模块加载方案，最主要的有 CommonJS（用于服务器） 和 AMD（用于浏览器） 两种。</li>
        <li>CommonJS 和 AMD 模块，都只能在运行时确定模块的依赖关系。比如，CommonJS 模块就是对象，输入时必须查找对象属性。</li>
        <li>ES6 模块的设计使得编译时就能确定模块的依赖关系，ES6 模块不是对象，而是通过 export 命令显式指定输出的代码，再通过 import 命令输入。</li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            // CommonJS模块
            // 实质是整体加载fs模块（即加载fs的所有方法），生成一个对象（_fs）
            // 然后再从这个对象上面读取 3 个方法
            // 这种加载称为“运行时加载”，因为只有运行时才能得到这个对象
            // 导致完全没办法在编译时做“静态优化”
            let { stat, exists, readfile } = require('fs');

            // 等同于
            let _fs = require('fs');
            let stat = _fs.stat;
            let exists = _fs.exists;
            let readfile = _fs.readfile;

            // ES6模块
            // 实质是从fs模块加载3个方法，其他方法不加载。
            // 这种加载称为“编译时加载”或者静态加载，
            // 即 ES6 可以在编译时就完成模块加载，效率要比 CommonJS 模块的加载方式高
            // 这也导致了没法引用 ES6 模块本身，因为它不是对象
            import { stat, exists, readFile } from 'fs';
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:800px">
      <h3 slot="title">2.严格模式</h3>
      <p>ES6 的模块自动采用严格模式，不管你有没有在模块头部加上"use strict"。</p>
      <div v-highlight>
        <pre>
          <code>
            /*
              变量必须声明后再使用
              函数的参数不能有同名属性，否则报错
              不能使用with语句
              不能对只读属性赋值，否则报错
              不能使用前缀 0 表示八进制数，否则报错
              不能删除不可删除的属性，否则报错
              不能删除变量delete prop，会报错，只能删除属性delete global[prop]
              eval不会在它的外层作用域引入变量
              eval和arguments不能被重新赋值
              arguments不会自动反映函数参数的变化
              不能使用arguments.callee
              不能使用arguments.caller
              禁止this指向全局对象
              不能使用fn.caller和fn.arguments获取函数调用的堆栈
              增加了保留字（比如protected、static和interface）
            */
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:800px">
      <h3 slot="title">3.export</h3>
      <p>
        一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，
        就必须使用 export 关键字输出该变量。下面是一个 JS 文件，里面使用 export 命令输出变量。
      </p>
      <div v-highlight>
        <pre>
          <code>
            export var a = 1;
            export var b = 2;
            export function f() {
              return 3;
            };

            // 等价于
            var a = 1;
            var b = 2;
            function f() {
              return 3;
            };

            export {a, b, fn }

            // 或者使用as关键字重命名
            export { a as aa, b as bb, f as ff }

            //////////// 错误写法 ////////////////
            export 1;

            var a = 2;
            export a;

            function f() {
              return 3;
            };
            export f;
          </code>
        </pre>
      </div>
      <p>export 语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。</p>
      <div v-highlight>
        <pre>
          <code>
            // 输出变量foo，值为bar，500 毫秒之后变成baz
            // CommonJS 模块输出的是值的缓存，不存在动态更新
            export var foo = 'bar';
            setTimeout(() => foo = 'baz', 500);
          </code>
        </pre>
      </div>
      <p>export命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错。</p>
      <div v-highlight>
        <pre>
          <code>
            function foo() {
              export default 'bar' // SyntaxError
            }
            foo()
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:800px">
      <h3 slot="title">4.import</h3>
      <p>使用 export 命令定义了模块的对外接口以后，其他 JS 文件就可以通过 import 命令加载这个模块。import 命令具有提升效果，会提升到整个模块的头部，首先执行。</p>
      <div v-highlight>
        <pre>
          <code>
            import { firstName } from './main.js';

            console.log(firstName)
          </code>
        </pre>
      </div>
      <p>如果想为输入的变量重新取一个名字，import 命令要使用 as 关键字，将输入的变量重命名</p>
      <div v-highlight>
        <pre>
          <code>
            import { firstName as surname } from './main.js';

            console.log(surname)
          </code>
        </pre>
      </div>
      <p>import命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口。</p>
      <div v-highlight>
        <pre>
          <code>
            import { firstName } from './main.js';

            firstName = "alex"; // Syntax Error

            // 如果firstName是一个对象，
            // 改写firstName的属性是允许的
            firstName.a = 1
          </code>
        </pre>
      </div>
      <p>由于 import 是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。</p>
      <div v-highlight>
        <pre>
          <code>
            // 报错
            import { 'first' + 'Name' } from './main.js';
          </code>
        </pre>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'es6-19',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.es6-19
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
