<template>
  <div class="es6-13">
    <Card shadow style="width:600px">
      <h3 slot="title">1.Promise 的含义</h3>
      <ul class="menu">
        <li>所谓 Promise，简单说就是一个容器，里面保存着一个异步操作的结果。</li>
        <li>从语法上说，Promise 是一个对象，从它可以获取异步操作的结果。</li>
        <li>
          Promise对象有以下两个特点：
          <ul class="menu">
            <li>
              对象的状态不受外界影响，只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。promise 对象的三个状态包括：
              <ul class="menu">
                <li>pending: 进行中。</li>
                <li>fulfilled：已成功。</li>
                <li>rejected：已失败。</li>
              </ul>
            </li>
            <li>一旦状态改变，就不会再变，任何时候都可以得到这个结果。状态变化的两种情况：
              <ul class="menu">
                <li>pending -> fulfilled（resolved 成功的结果）</li>
                <li>pending -> rejected（失败的结果）</li>
              </ul>
            </li>
          </ul>
        </li>
        <li>Promise 的缺点：当处于 pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。</li>
      </ul>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">2.基本用法</h3>
      <ul class="menu">
        <li>Promise 对象是一个构造函数，用来生成 Promise 实例。</li>
        <li>从语法上说，Promise 是一个对象，从它可以获取异步操作的结果。</li>
        <li></li>
        <li>Promise 的缺点：当处于 pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。</li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            const promise = new Promise(function(resolve, reject) {
              if (/* 异步操作成功 */){
                resolve(value);
              } else {
                reject(error);
              }
            });
          </code>
        </pre>
      </div>
      <ul class="menu">
        <li>Promise 构造函数接受一个函数作为参数，该函数的两个参数分别是 resolve 和 reject。</li>
        <li>resolve 函数的作用是，将 Promise 对象的状态从 pending 变为 resolved。在异步操作成功时调用，并将异步操作的结果，作为参数传递出去。</li>
        <li>reject 函数的作用是，将 Promise 对象的状态从 pending 变为 rejected，在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。</li>
        <li>Promise 实例生成以后，可以用 Promise.prototype 上的 then 方法分别指定 resolved 状态和 rejected 状态的回调函数。</li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            // 创建一个 promise 实例
            function getJSON() {
              return new Promise(function(resolve, reject) {
                // 发送一个jsonp请求
                jsonp(url, options, (err, data) => {
                  if (!err) {
                    resolve(data)
                  } else {
                    reject(err)
                  }
                })
              })
            }

            getJSON.then(function(value) {
              // success
            }, function(error) {
              // failure
            })
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">3.Promise.prototype.catch()</h3>
      <p>Promise.prototype.catch() 方法是.then(null, rejection) 或 .then(undefined, rejection) 的别名，用于指定发生错误时的回调函数。
        一般来说，不要在then()方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法。
      </p>
      <div v-highlight>
        <pre>
          <code>
            getJSON.then(function(data) {
              // success
            }).catch(function(error) {
              // error
            });
          </code>
        </pre>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'es6-13',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.es6-13
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
