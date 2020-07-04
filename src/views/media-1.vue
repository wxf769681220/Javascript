<template>
  <div class="media-1">
    <div class="layout-content">
      <Card :dis-hover="true" shadow style="width:700px">
        <h3 slot="title">1.&lt;audio>和&lt;vedio>元素</h3>
        <div>
          <p>HTML5新增&lt;audio>和&lt;vedio>两个与媒体相关的标签，让开发人员不必依赖任何插件就能在网页上嵌入跨浏览器的音频和视频内容。这两个元素具有以下几个特性：</p>
          <ul class="menu">
            <li>src：指向要加载的媒体文件。</li>
            <li>poster：指定图像的URL可以在加载视频资源期间预先显示。</li>
            <li>controls：若标签中有此属性，额意味着浏览器应该显示UI控件。</li>
            <li>width或height：设置视频播放器尺寸。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                /**
                  * 嵌入视频内容 *
                  &lt;video id="myVideo">
                    * 指定多个不同的媒体来源 *
                    &lt;source src="tifa.webm" type="video/webm; codecs='vp8, vorbis'" />
                    &lt;source src="tifa.ogv" type="video/ogg; codecs='theora, vorbis'" />
                    &lt;source src="tifa.mp4">
                    * 在浏览器不支持媒体元素时显示以下文本内容 *
                    Video player not available
                  &lt;/video>

                  * 嵌入音频内容 *
                  &lt;audio id="myAudio">
                    &lt;source src="planet.ogg" type="audio/ogg" />
                    &lt;source src="planet.mp3" type="audio/mpeg" />
                    Audio player not available
                  &lt;/audio>
                **/
              </code>
            </pre>
          </div>
          <p>
            并不是所有的浏览器都支持&lt;audio>和&lt;vedio>元素的编解码器。JavaScript API为这两个媒体元素提供一个canPlayType()方法，该方法用于检测浏览器是否支持某种格式和编解码器。
            它接收一种格式/编解码器字符串，返回"probably", "maybe"或""（空字符串）。
          </p>
          <div v-highlight>
            <pre>
              <code>
                var video = document.getElementById("video")

                //很可能"maybe"
                if (video.canPlayType("video/mp4")) {
                  //...
                }

                //很可能"probably"
                if (video.canPlayType("video/webm; codecs=\"vp8, vorbis\"")) {
                  //...
                }
              </code>
            </pre>
          </div>
          <p>视频格式。</p>
          <table class="table-bordered">
            <thead>
              <tr class="bg-gray">
                <th>视频</th>
                <th>字符串</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-1">
                <td>H.264</td>
                <td>video/mp4; codecs="avc1.42E01E, mp4a.40.2"</td>
              </tr>
              <tr class="bg-1">
                <td>Theora</td>
                <td>video/ogg; codecs="theora"</td>
              </tr>
              <tr class="bg-1">
                <td>WebM</td>
                <td>video/webm; codecs="vp8, vorbis"</td>
              </tr>
            </tbody>
          </table>
          <br/>
          <p>音频格式。</p>
          <table class="table-bordered">
            <thead>
              <tr class="bg-gray">
                <th>音频</th>
                <th>数据类型</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-1">
                <td>AAC</td>
                <td>audio/mp4; codecs="mp4a.40.2"</td>
              </tr>
              <tr class="bg-1">
                <td>MP3</td>
                <td>audio/mpeg</td>
              </tr>
              <tr class="bg-1">
                <td>Vorbis</td>
                <td>audio/ogg; codecs="vorbis"</td>
              </tr>
              <tr class="bg-1">
                <td>WAV</td>
                <td>audio/wav; codecs="1"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
      <Card :dis-hover="true" shadow style="width:750px">
        <h3 slot="title">2.属性</h3>
        <div>
          <p>&lt;audio>和&lt;vedio>元素都提供了完善的javascript接口。以下列举两个元素共有的属性：</p>
          <table class="table-bordered">
            <thead>
              <tr class="bg-gray">
                <th>属性</th>
                <th>数据类型</th>
                <th>描述</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-1">
                <td>src</td>
                <td>字符串</td>
                <td>媒体文件来源</td>
              </tr>
              <tr class="bg-1">
                <td>currentSrc</td>
                <td>字符串</td>
                <td>当前播放的媒体文件的URL</td>
              </tr>
              <tr class="bg-2">
                <td>autoplay</td>
                <td>布尔值</td>
                <td>是否开启自动播放</td>
              </tr>
              <tr class="bg-1">
                <td>loop</td>
                <td>布尔值</td>
                <td>是否开启循环播放</td>
              </tr>
              <tr class="bg-1">
                <td>currentLoop</td>
                <td>整数</td>
                <td>视频已经循环的次数</td>
              </tr>
              <tr class="bg-2">
                <td>controls</td>
                <td>布尔值</td>
                <td>显示或隐藏浏览器UI控件</td>
              </tr>
              <tr class="bg-1">
                <td>muted</td>
                <td>布尔值</td>
                <td>是否开启静音</td>
              </tr>
              <tr class="bg-1">
                <td>volume</td>
                <td>浮点数</td>
                <td>当前音量，值为0.0~1.0</td>
              </tr>
              <tr class="bg-2">
                <td>start</td>
                <td>浮点数</td>
                <td>媒体文件中开始播放的位置，以秒表示</td>
              </tr>
              <tr class="bg-1">
                <td>videoWidth</td>
                <td>整数</td>
                <td>返回视频（不一定是元素）宽度。</td>
              </tr>
              <tr class="bg-1">
                <td>videoHeight</td>
                <td>整数</td>
                <td>返回视频（不一定是元素）高度。</td>
              </tr>
              <tr class="bg-2">
                <td>paused</td>
                <td>布尔值</td>
                <td>是否暂停</td>
              </tr>
              <tr class="bg-1">
                <td>currentTime</td>
                <td>浮点数</td>
                <td>已经播放的秒数</td>
              </tr>
              <tr class="bg-1">
                <td>duration</td>
                <td>浮点数</td>
                <td>媒体的总播放秒数</td>
              </tr>
              <tr class="bg-2">
                <td>played</td>
                <td>时间范围</td>
                <td>到目前为止已经播放的时间范围</td>
              </tr>
              <tr class="bg-2">
                <td>seekable</td>
                <td>时间范围</td>
                <td>可以搜索的时间范围</td>
              </tr>
              <tr class="bg-1">
                <td>defaultPlaybackRate</td>
                <td>浮点数</td>
                <td>默认的播放速度（只能由开发人员修改）。默认值1.0秒</td>
              </tr>
              <tr class="bg-1">
                <td>playbackRate</td>
                <td>浮点数</td>
                <td>当前的播放速度（用户可以修改）</td>
              </tr>
              <tr class="bg-2">
                <td>totalBytes</td>
                <td>整数</td>
                <td>当前资源所需的总字节数</td>
              </tr>
              <tr class="bg-2">
                <td>networkState</td>
                <td>整数</td>
                <td>当前媒体的网络连接状态。0表示空；1表示正在加载；2表示正在加载元数据；3表示已经加载了第一帧；4表示加载完成</td>
              </tr>
              <tr class="bg-2">
                <td>readyState</td>
                <td>整数</td>
                <td>媒体是否已经就绪（可以播放了）。0表示数据不可用；1表示可以显示当前帧；2表示可以开始播放；3表示媒体可以从开到尾播放</td>
              </tr>
              <tr class="bg-2">
                <td>ended</td>
                <td>布尔值</td>
                <td>媒体文件是否播放完成</td>
              </tr>
              <tr class="bg-2">
                <td>seeking</td>
                <td>布尔值</td>
                <td>播放器是否正移动到媒体文件中的新位置</td>
              </tr>
              <tr class="bg-1">
                <td>buffered</td>
                <td>时间范围</td>
                <td>已下载的缓冲的时间范围的对象</td>
              </tr>
              <tr class="bg-1">
                <td>bufferedBytes</td>
                <td>字节范围</td>
                <td>已下载的缓冲的字节范围的对象</td>
              </tr>
              <tr class="bg-1">
                <td>bufferingRate</td>
                <td>整数</td>
                <td>下载过程中每秒钟平均接收到的位数</td>
              </tr>
              <tr class="bg-1">
                <td>bufferingThrottled</td>
                <td>布尔值</td>
                <td>浏览器是否对缓冲进行了节流</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
      <Card :dis-hover="true" shadow style="width:720px">
        <h3 slot="title">3.事件</h3>
        <div>
          <p>媒体元素相关事件：</p>
          <table class="table-bordered">
            <thead>
              <tr class="bg-gray">
                <th>事件</th>
                <th>触发时机</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-2">
                <td>abort</td>
                <td>下载中断</td>
              </tr>
              <tr class="bg-1">
                <td>canplay</td>
                <td>可以播放时（readyState值为2）</td>
              </tr>
              <tr class="bg-1">
                <td>canplaythrough</td>
                <td>播放可继续，且应该不会中断（readyState值为3）</td>
              </tr>
              <tr class="bg-1">
                <td>canshowcurrentframe</td>
                <td>当前帧已经下载完成（readyState值为1）</td>
              </tr>
              <tr class="bg-2">
                <td>dataunavailable</td>
                <td>因为没有数据而不能播放（readyState值为0）</td>
              </tr>
              <tr class="bg-2">
                <td>durationchange</td>
                <td>duration属性值变化</td>
              </tr>
              <tr class="bg-1">
                <td>emptied</td>
                <td>网络连接关闭</td>
              </tr>
              <tr class="bg-1">
                <td>empty</td>
                <td>发生错误阻止了媒体下载</td>
              </tr>
              <tr class="bg-2">
                <td>ended</td>
                <td>媒体已播放到了末尾，播放停止</td>
              </tr>
              <tr class="bg-2">
                <td>error</td>
                <td>下载期间发生网络错误</td>
              </tr>
              <tr class="bg-1">
                <td>load</td>
                <td>所有媒体已加载完成（已废弃，使用canplaythrough代替）</td>
              </tr>
              <tr class="bg-1">
                <td>loadeddata</td>
                <td>媒体的第一帧已加载完成</td>
              </tr>
              <tr class="bg-1">
                <td>loadedmetadata</td>
                <td>媒体的元数据已加载完成</td>
              </tr>
              <tr class="bg-1">
                <td>loadstart</td>
                <td>下载已开始</td>
              </tr>
              <tr class="bg-2">
                <td>pause</td>
                <td>播放已暂停</td>
              </tr>
              <tr class="bg-1">
                <td>play</td>
                <td>媒体已接收到指令开始播放</td>
              </tr>
              <tr class="bg-1">
                <td>playing</td>
                <td>媒体已实际开始播放</td>
              </tr>
              <tr class="bg-2">
                <td>progress</td>
                <td>正在下载</td>
              </tr>
              <tr class="bg-2">
                <td>ratechange</td>
                <td>媒体的播放速度改变了</td>
              </tr>
              <tr class="bg-1">
                <td>seeked</td>
                <td>搜索结束</td>
              </tr>
              <tr class="bg-1">
                <td>seeking</td>
                <td>正移动到新位置</td>
              </tr>
              <tr class="bg-2">
                <td>stalled</td>
                <td>浏览器尝试下载，但未接收到数据</td>
              </tr>
              <tr class="bg-2">
                <td>timeupdate</td>
                <td>currentTime被以不合理或意外的方式更新</td>
              </tr>
              <tr class="bg-2">
                <td>volumechange</td>
                <td>volume属性值或muted属性值已改变</td>
              </tr>
              <tr class="bg-2">
                <td>waiting</td>
                <td>播放暂停，等待下载更多数据</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'media-1',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.media-1
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
