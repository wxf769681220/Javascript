<template>
  <div class="api-2">
    <Card shadow style="width:500px">
      <h3 slot="title">1.Geolocation API 地理定位</h3>
      <div>
        <p>Geolocation API在浏览器中的实现是 navigator.geolocation 对象，该对象包含以下三个方法：getCurrentPositon()、watchPosition() 和 clearWatch()。</p>
        <div v-highlight>
          <pre>
            <code>
              navigator.geolocation
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:1000px">
      <h3 slot="title">2.getCurrentPositon()方法</h3>
      <div>
        <p>getCurrentPositon()方法：调用此方法会触发请求用户共享地理定位信息的对话框。</p>
        <div v-highlight>
          <pre>
            <code>
              var Pos = navigator.geolocation

              Pos.getCurrentPosition(arg1, arg2, arg3)

              // 第一个参数：表示成功的回调函数
              function arg1(position) {
                // 以十进制数表示维度
                position.coords.latitude

                // 以十进制数表示经度
                position.coords.longitude

                // 经纬度坐标的经度，以米为单位
                position.coords.accuracy

                // 以米为单位的海拔高度，若没有相关数据则为null
                position.coords.altitude

                // 海拔高度的经度，以米为单位，数值越高越不精确
                position.coords.accuracy

                // 指南针的方向，0°表示正北，若没有检测到数据则为NaN
                position.coords.heading

                // 每秒移动多少米，若没有检测到数据则为null
                position.coords.speed

                // 在地图上绘制用户的地理位置
                drawMapCenteredAt(position.coords.latitude, position.coords.longitude)
              }

              // 第二个参数（可选）：失败的回调函数
              function arg2(error) {
                // 保存着解释为什么会出错的文本信息
                error.message

                // 保存着一个数值，表示错误的类型
                // 1：表示用户拒绝共享
                // 2：表示位置无效
                // 3：超时
                error.code
              }

              /**
               * 第三个参数（可选）：选项对象
               * enableHighAccuracy：是否必须尽可能使用最准确的位置信息，一般设置为false
               * 若设置为true，则需要更长的时间，在移动设备上还是导致消耗更多的电量
               * timeout：等待位置信息的最长时间（以毫秒数表示）
               * maximumAge：上一次取得的坐标信息的有效时间（以毫秒数表示，若时间到了则重新取得新坐标信息）
               * 若不需要频繁更新用户的位置信息，则可以设置为Infinity
               */
              var arg3 = {
                enableHighAccuracy: false,
                timeout: 5000,
                maximumAge: 25000
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">3.watchPosition()方法</h3>
      <div>
        <p>watchPosition() 方法：该方法接收的参数与 getCurrentPositon() 方法完全相同。实际上该方法与定时调用 getCurrentPositon() 方法的效果是一样的。
          在第一次调用 watchPosition() 方法后会取得当前位置，执行成功回调函数与错误回调函数。然后 watchPosition() 就地等待系统发出位置已改变的信号（它不会自己轮询位置）。</p>
        <div v-highlight>
          <pre>
            <code>
              var Pos = navigator.geolocation

              // 返回一个数值标识符，用于跟踪监控的操作
              var watchId = Pos.watchPosition(arg1, arg2, arg3)

              // 取消监控（基于watchPosition()的返回值）
              // 与使用setTimeout()和clearTimeout()类似
              clearWatch(watchId);
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
  name: 'api-2',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.api-2
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
