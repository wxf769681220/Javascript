<template>
  <div class="bom-3">
    <div class="layout-content">
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">1.navigator对象的属性和方法</h3>
        <div>
          <table class="table-bordered">
            <thead>
              <tr class="bg-gray">
                <th>属性或方法</th>
                <th>描述</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-1">
                <td>appCodeName</td>
                <td>浏览器名称(通常都是mozilla,即使在非mozilla浏览器中也如此)</td>
              </tr>
              <tr class="bg-1">
                <td>appName</td>
                <td>完整的浏览器名称</td>
              </tr>
              <tr class="bg-2">
                <td>appMinorVersion</td>
                <td>次版本信息</td>
              </tr>
              <tr class="bg-2">
                <td>appVersion</td>
                <td>浏览器版本(一般不与实际版本对应)</td>
              </tr>
              <tr class="bg-2">
                <td>buildID</td>
                <td>浏览器编译版本</td>
              </tr>
              <tr class="bg-1">
                <td>plugins</td>
                <td>浏览器中安装的插件信息的数组</td>
              </tr>
              <tr class="bg-2">
                <td>userAgent</td>
                <td>浏览器用户代理字符串</td>
              </tr>
              <tr class="bg-1">
                <td>cookieEnabled</td>
                <td>表示cookie是否启用</td>
              </tr>
              <tr class="bg-1">
                <td>javaEnabled</td>
                <td>表示java是否启用</td>
              </tr>
              <tr class="bg-2">
                <td>mimeTypes</td>
                <td>在浏览器中注册的MIME类型数组</td>
              </tr>
              <tr class="bg-2">
                <td>onLine</td>
                <td>浏览器是否连接到了因特网</td>
              </tr>
              <tr class="bg-2">
                <td>platform</td>
                <td>浏览器所在的系统平台</td>
              </tr>
              <tr class="bg-2">
                <td>language</td>
                <td>浏览器主语言</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">2.navigator.userAgent</h3>
        <div>
          <p>使用navigator.userAgent判断当前浏览器类型。</p>
          <div v-highlight>
            <pre>
              <code>
                var browser = (function() {
                  var s = navigator.userAgent.toLowerCase()
                  var match = /(webkit)[ \/]([\w.]+)/.exec(s) ||
                  /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(s) ||
                  /(msie) ([\w.]+)/.exec(s) ||
                  !/compatible/.test(s) && /(mozilla)(?:.*? rv:([\w.+]))?/.exec(s) || []
                  return {
                    name: match[1] || '',
                    version: match[2] || '0'
                  }
                }())

                browser => {name: "webkit", version: "537.36"}
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">3.navigator.plugins</h3>
        <div>
          <p>使用navigator.plugins检测浏览器中是否安装了特定的插件。这个属性返回一个PluginArray类数组对象，每个数组项都包含以下属性：</p>
          <ul class="menu">
            <li>name：插件名。</li>
            <li>description：插件的描述。</li>
            <li>filename：插件的文件名。</li>
            <li>length：插件所处理的MIME类型数量。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                //检测插件（IE无效）
                function hasPlugins(name) {
                  name = name.toLowerCase();
                  for (var i = 0; i &lt; navigator.plugins.length; i++) {
                    if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
                      return true
                    }
                  }
                  return false
                }

                //检测Flash插件
                hasPlugins("Flash")
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">4.注册处理程序</h3>
        <div>
          <p>navigator.registerConentHandler()和navigator.registerProtocolHandler()方法，可以让一个站点指明它可以处理特定类型的信息。
            随着RSS阅读器和在线电子邮件程序的兴起，注册处理程序就为像使用桌面应用程序一样默认使用这些在线应用程序提供了一种方式。
          </p>
          <p>navigator.registerConentHandler()方法，它接收三个参数：要处理的MIME类型、可以处理该MIME类型的页面的URL及应用程序名称。</p>
          <div v-highlight>
            <pre>
              <code>
                //要将一个站点注册为处理RSS源的处理程序
                //RSS源的MIME类型
                var type = "application/rss+xml",

                //应该接收RSS源URL的URL（%s表示RSS源的URL,由浏览器自动插入）
                url = "http://www.example.com?feed=%s",

                //Web应用程序
                reader = "some Reader";

                navigator.registerConentHandler(type, url, reader);
              </code>
            </pre>
          </div>
          <p>navigator.navigator.registerProtocolHandler()方法，它接收三个参数：要处理的协议（ru :mailto或ftp）、处理该协议的页面的URL及应用程序名称。</p>
          <div v-highlight>
            <pre>
              <code>
                //要将一个应用程序注册为默认的邮件客户端
                var type = "mailto",
                url = "http://www.example.com?cmd=%s",
                app = "some mail client";
                navigator.registerProtocolHandler(type, url, app);
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">5.浏览器识别</h3>
        <div>
          <p>以下是完整的用户代理字符串检测脚本，包括检测呈现引擎、平台、Windows操作系统、移动设备和游戏系统。</p>
          <div v-highlight>
            <pre>
              <code>
                var client = function () {
                  //呈现引擎
                  var engine = {
                    ie: 0,
                    gecko: 0,
                    webkit: 0,
                    khtml: 0,
                    opera: 0,
                    //完整的版本号
                    ver: null
                  }

                  //浏览器类型
                  var browser = {
                    ie: 0,
                    firefox: 0,
                    chrome: 0,
                    safari: 0,
                    opera: 0,
                    konq: 0,
                    //具体的版本号
                    ver: null
                  }

                  //平台、设备和操作系统
                  var system = {
                    win: false,
                    mac: false,
                    x11: false,

                    // 移动设备
                    iphone: false,
                    ipod: false,
                    ipad: false,
                    ios: false,
                    android: false,
                    nokiaN: false,
                    winMobile: false,

                    //游戏系统
                    wii: false,
                    ps: false
                  }

                  //使用用户代理字符串,检测呈现引擎和浏览器
                  var ua = navigator.userAgent;

                  if (window.opera) {
                    engine.ver = browser.ver = window.opera.version();
                    engine.opera = browser.opera = parseFloat(engine.ver);
                  } else if (/AppleWebKit\/(\S+)/.test(ua)) {
                    engine.ver = RegExp["$1"];
                    engine.webkit = parseFloat(engine.ver);

                    //确定是Chrome还是Safari
                    if (/Chrome\/(\S+)/.test(ua)) {
                      browser.ver = RegExp["$1"];
                      browser.chrome = parseFloat(browser.ver);
                    } else if (/Version\/(\S+)/.test(ua)) {
                      browser.ver = RegExp["$1"];
                      browser.safari = parseFloat(browser.ver);
                    } else {
                      //近似的确定版本号
                      var safariVersion = 1;
                      if (engine.webkit &lt; 100) {
                        safariVersion = 1;
                      } else if (engine.webkit &lt;312) {
                        safariVersion = 1.2;
                      } else if (engine.webkit &lt; 412) {
                        safariVersion = 1.3;
                      } else {
                        safariVersion = 2;
                      }
                      browser.safari = browser.ver = safariVersion
                    }
                  } else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)) {
                    engine.ver = browser.ver = RegExp["$1"];
                    engine.khtml = browser.konq = parseFloat(engine.ver);
                  } else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)) {
                    engine.ver = RegExp["$1"];
                    engine.gecko = parseFloat(engine.ver);
                    //确定是不是Firefox
                    if (/Firefox\/(\S+)/.test(ua)) {
                      engine.ver = RegExp["$1"];
                      engine.firefox = parseFloat(engine.ver);
                    }
                  } else if (/MSIE ([^;]+)/.test(ua)) {
                    engine.ver = browser.ver = RegExp["$1"];
                    engine.ie = browser.ie = parseFloat(engine.ver);
                  }

                  //检测浏览器
                  browser.ie = engine.ie;
                  browser.opera = engine.opera;

                  //检测平台
                  var p = navigator.platform;
                  system.win = p.indexOf("Win") == 0;
                  system.mac = p.indexOf("Mac") == 0;
                  system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);

                  //检测windows操作系统
                  if (system.win) {
                    if (/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(ua)) {
                      if (RegExp["$1"] == "NT") {
                        switch (RegExp["$2"]) {
                          case "5.0":
                            system.win = "2000";
                            break;
                          case "5.1":
                            system.win = "XP";
                            break;
                          case "6.0":
                            system.win = "Vista";
                            break;
                          case "6.1":
                            system.win = "7";
                            break;
                          default:
                            system.win = "NT";
                        }
                      }
                    }
                  }

                  //移动设备
                  system.iphone = ua.indexOf("iPhone") > -1;
                  system.ipod = ua.indexOf("iPod") > -1;
                  system.ipad = ua.indexOf("iPad") > -1;
                  system.nokiaN = ua.indexOf("NokiaN") > -1;

                  //winows mobile
                  if (system.win == "CE") {
                    system.winMobile = system.win;
                  } else if (system.win == "Ph") {
                    if (/Windows Phone OS (\d+.\d+)/.test(ua)) {
                      system.win == "Phone";
                      system.winMobile = parseFloat(RegExp["$1"]);
                    }
                  }

                  //检测IOS版本
                  if (system.mac && ua.indexOf("Mobile" > -1)) {
                    if (/CPU (?:iPhone )?OS (\d+_\d+)/.test(ua)) {
                      system.ios == parseFloat(RegExp.$1.replace("_", "."));
                    } else {
                      //不能真正的检测出来,所以只能猜测
                      system.ios = 2
                    }
                  }

                  //检测Andriod
                  if (/Andriod (\d+\.\d+)/.test(ua)) {
                    system.andriod == parseFloat(RegExp.$1);
                  }

                  //游戏系统
                  system.wii = ua.indexOf("Wii") > -1;
                  system.ps = /playstation/i.test(ua);

                  return {
                    engine: engine,
                    browser: browser,
                    system: system
                  }
                }();
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
  name: 'bom-3',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.bom-3
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
