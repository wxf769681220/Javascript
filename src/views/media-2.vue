<template>
  <div class="media-2">
    <div class="layout-content">
      <Card :dis-hover="true" shadow style="width:750px">
        <h3 slot="title">1.自定义媒体播放器</h3>
        <div>
          <p></p>
          <div v-highlight>
            <pre>
              <code>
                //html结构：
                &lt;div class="media-player">
                  &lt;div id="video">
                    &lt;video id="player" poster="preset.jpg" width="300" height="200">
                      &lt;source src="tifa.webm" type="video/webm; codecs='vp8, vorbis'" />
                      &lt;source src="tifa.ogv" type="video/ogg; codecs='theora, vorbis'" />
                      &lt;source src="tifa.mp4">
                      Video player not available
                    &lt;/video>
                  &lt;/div>
                  &lt;div class="controls">
                    &lt;input type="button" id="video-btn" value="play" />
                    &lt;span id="curtime">0&lt;/span>/&lt;span id="duration">0&lt;/span>
                  &lt;/div>
                &lt;/div>
              </code>
            </pre>
          </div>
          <div v-highlight>
            <pre>
              <code>
                //取得元素引用
                var player = document.getElementById("player")
                var btn = document.getElementById("video-btn")
                var curtime = document.getElementById("curtime")
                var duration = document.getElementById("duration")

                //更新播放时间
                duration.innerHTML = player.duration

                //为按钮添加事件处理程序
                EventUtil.addHandler(btn, 'click', function (event) {
                  // event = EventUtil.getEvent(event)
                  // var target = EventUtil.getTarget(event)
                  // console.log(target)
                  if (player.paused) {
                    player.play()
                    btn.value = "Pause"
                  } else {
                    player.pause()
                    btn.value = "Play"
                  }
                })

                //定时更新当前事件
                setInterval(function () {
                  curtime.innerHTML = player.currentTime
                }, 250)
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
  name: 'media-2',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.media-2
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
