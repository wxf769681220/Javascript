<template>
  <div class="api-3">
    <Card shadow style="width:620px">
      <h3 slot="title">1.File API</h3>
      <div>
        <p>File API 为客户端访问计算机中的文件，并更好地对这些文件执行操作提供了一种安全的方式。</p>
        <div v-highlight>
          <pre>
            <code>
              // &lt;input type="file" id="myFile" accept="" />

              // 读取本地文件
              var filesList = document.getElementById("myFile")
              EventUtil.addHandler(filesList, 'change', function (event) {
                var target = EventUtil.getTarget(event),
                files = target.files,
                i = 0,
                len = files.length;

                while (i &lt; len) {
                  console.log(files[i].name + "-" + files[i].type + "-" +
                  files[i].size + "-" + files[i].lastModifiedDate);
                  i++;
                }

                console.log(files) => //FileList类数组对象
              })
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:800px">
      <h3 slot="title">2.FileReader类型</h3>
      <div>
        <p>FileReader 类型实现的是一种异步文件读取机制。它与 XMLHttpRequest 很像，区别是它读取的文件系统，而不是远程服务器。FileReader 类型提供以下几个方法：</p>
        <ul class="menu">
          <li>readAsText(file, encoding)：以纯文本形式读取文件，将读取到的文本保存在 result 属性中。第二个参数用于指定编码类型（可选）。</li>
          <li>readAsDataURL(file)：读取文件并将文件以数据 URI 的形式保存在 result 属性中。</li>
          <li>readAsBinaryString(file)：读取文件并将一个字符串保存在 result 中，字符串中的每个字符表示一个字节。</li>
          <li>readAsArrayBuffer(file)：读取文件并将一个包含文件内容的 ArrayBuffer 保存在 result 属性中。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              var filesList = document.getElementById("myFile")

              EventUtil.addHandler(filesList, 'change', function (event) {
                var target = EventUtil.getTarget(event),
                files = target.files;

                // 实例化对象
                var reader = new FileReader();
                reader.readAsDataURL(files[0]);
              })
            </code>
          </pre>
        </div>
        <p>由于读取过程是异步的，因此 FileReader 也提供了以下几个事件：</p>
        <ul class="menu">
          <li>progress：表示是否又读取了新数据。</li>
          <li>error：是否发生了错误。</li>
          <li>load：是否已经读完了整个文件。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
               /*
                * var filesList = document.getElementById("myFile")
                * var output = document.getElementById("output")
                * var progress = document.getElementById("progress")
                */

              EventUtil.addHandler(filesList, 'change', function (event) {
                var target = EventUtil.getTarget(event),
                  files = target.files,
                  info = "",
                  type = "default",
                  reader = new FileReader();

                if (/image/.test(files[0].type)) {
                  reader.readAsDataURL(files[0]);
                  type = "image";
                } else {
                  reader.readAsText(files[0]);
                  type = "text";
                }

                reader.onerror = function() {
                // 相关错误信息将保存到fileReader的error属性中，
                // error属性中只包含一个code错误码属性，若其值为：
                // 1：表示未找到文件
                // 2：表示安全性错误
                // 3：表示读取中断
                // 4：表示文件不可读
                // 5：表示编码错误
                  output.innerHTML = "Could not read file, error code is " + reader.error.code;
                }

                // 追踪读取的字节数
                reader.onprogress = function(event) {
                  if (event.lengthComputable) {
                    progress.innerHTML = event.loaded + "/" + event.total;
                  }
                }

                reader.onload = function(event) {
                  var html = "";
                  switch (type) {
                    case "image":
                      html = "&lt;img src=\"" + reader.result + "\">";
                      break;
                    case "text":
                      html = reader.result;
                      break;
                    default:
                      //...
                  }
                  output.innerHTML = html;
                }
              })
            </code>
          </pre>
        </div>
        <p>
          若想中断读取过程，则可以使用 abort() 方法，这样就会触发以个 abort() 事件。在触发 load、error 或 abort() 事件之后，会触发另一个事件 loadend 事件，loadend 事件发生意味着已经读取完整个文件，
          或读取时发生了错误，或读取过程被中断。
        </p>
        <div v-highlight>
          <pre>
            <code>
              reader.abort()

              reader.onloadend = function(event) {
                //event
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:650px">
      <h3 slot="title">3.读取部分内容</h3>
      <div>
        <p>
          File 对象支持一个 slice() 方法，在 firefox 中的实现叫 mozSlice()，在 chrome 中的实现叫 webkitSlice()。slice() 方法接收两个参数：起始字节和要读取的字节数。
          这个方法返回一个 Blob 的实例，Blob 是 File 类型的父类型。
        </p>
        <div v-highlight>
          <pre>
            <code>
              // 在不同实现中使用slice()方法
              function blobSlice(blob, startByte, length) {
                if (blob.slice) {
                  return blob.slice(startByte, length);
                } else if (blob.webkitSlice) {
                  return blob.webkitSlice(startByte, length);
                } else if (blob.mozSlice) {
                  return blob.mozSlice(startByte, length);
                } else {
                  return null;
                }
              }
            </code>
          </pre>
        </div>
        <p></p>
        <div v-highlight>
          <pre>
            <code>
               /*
                * var filesList = document.getElementById("myFile")
                * var output = document.getElementById("output")
                */

              EventUtil.addHandler(filesList, 'change', function (event) {
                var target = EventUtil.getTarget(event),
                  files = target.files,
                  reader = new FileReader()
                  blob = blobSlice(files[0], 0, 32);

                if (blob) {
                  reader.readAsText(blob);
                  reader.onerror = function() {
                    output.innerHTML = "Could not read file, error code is " + reader.error.code;
                  }
                  reader.onload = function() {
                    output.innerHTML = reader.result;
                  }
                } else {
                  console.log("your browser doesn't support slice().")
                }
              })
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:680px">
      <h3 slot="title">4.blob URL</h3>
      <div>
        <p>blob URL：指的是引用保存在 file 或 blob 中数据的 URL，它不必把文件内容读取到 javascript 而直接使用文件内容。为此，只要在需要文件内容的地方提供 blob URL 即可。</p>
        <p>创建 blob URL，可以使用 window.URL.createObjectURL() 方法，并传入 File 对象或 blob 对象。chrome 中的实现叫 window.webkitURL.createObjectURL()。</p>
        <div v-highlight>
          <pre>
            <code>
              // 在不同实现中创建blob URL
              // 该函数返回一个字符串，指向一个内存地址
              // 若不再使用这个引用地址，最好释放它占用的内存
              function createObjectURL(blob) {
                if (window.URL) {
                  return window.URL.createObjectURL(blob);
                } else if (window.webkitURL) {
                  return window.webkitURL.createObjectURL(blob);
                } else {
                  return null;
                }
              }

              /***************************************************/
              // 提供两个释放内存的方法（兼容chrome）
              function revokeObjectURL(url) {
                if (window.URL) {
                  window.URL.revokeObjectURL(url);
                } else if (window.webkitURL) {
                  window.webkitURL.revokeObjectURL(url);
                }
              }
              var url = createObjectURL(blob)
              revokeObjectURL(url)
              url => Error
            </code>
          </pre>
        </div>
        <p></p>
        <div v-highlight>
          <pre>
            <code>
               /*
                * var filesList = document.getElementById("myFile")
                * var output = document.getElementById("output")
                */

              EventUtil.addHandler(filesList, 'change', function (event) {
                var target = EventUtil.getTarget(event),
                  files = target.files,
                  reader = new FileReader(),
                  url = createObjectURL(files[0]);

                if (url) {
                  if (/image/.test(files[0].type)) {
                    output.innerHTML = "&lt;img src=\"" + url + "\" />";
                  } else {
                    output.innerHTML = "Not an image";
                  }
                } else {
                  output.innerHTML = "your browser doesn't support object URLs";
                }

                // 释放内存
                revokeObjectURL(url);
              })
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">5.读取被拖放的文件</h3>
      <div>
        <p>
          结合 HTML5 提供的拖放 API。将一张图片、一个连接或一个文件，从桌面拖放到浏览器中会触发拖放事件的 drop 事件，并且可以在 event.dataTransfer.files中
          读取到被放置文件，此时它就是一个 File 对象。
        </p>
        <div v-highlight>
          <pre>
            <code>
              var filesList = document.getElementById("myFile")
              var output = document.getElementById("output")

              function handleEvent(event) {
                var info = "",
                files,
                i,
                len;

                // 自定义有效的放置目标
                // 取消默认行为
                EventUtil.preventDefault(event);

                if (event.type === "drop") {
                  // 读取被拖放的文件
                  files = event.dataTransfer.files;
                  console.log(files)
                  i = 0;
                  len = files.length;
                  while (i &lt; len) {
                    info = files[i].name + "/" + files[i].type + "/" + files[i].size;
                    i++;
                  }
                  output.innerHTML = info;
                }
              }

              EventUtil.addHandler(filesList, 'dragenter', handleEvent)
              EventUtil.addHandler(filesList, 'dragover', handleEvent)
              EventUtil.addHandler(filesList, 'drop', handleEvent)
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:740px">
      <h3 slot="title">6.使用XHR上传文件</h3>
      <div>
        <p>通过 File API 可以获取文件内容，把文件内容方到 send() 方法，再通过 POST 请求，就能实现上传。以上做法只能上传的是文件内容，服务器需要收集内容，再把它保存到另一个文件中。</p>
        <p>通过 FormData 类型，我们可以将文件像表单一样提交给服务器。</p>
        <div v-highlight>
          <pre>
            <code>
              var filesList = document.getElementById("myFile")

              function handleEvent(event) {
                var files,
                data,
                xhr,
                i,
                len;

                EventUtil.preventDefault(event);

                if (event.type === "drop") {
                  // 创建一个FormData对象
                  data = new FormData();

                  // 读取被拖放的文件
                  files = event.dataTransfer.files;
                  i = 0;
                  len = files.length;

                  while (i &lt; len) {
                    // 将获取到的文件作为表单的主体内容，待发送给服务器
                    data.append("file" + i, files[i]);
                    i++;
                  }

                  //HTTP请求
                  var xhr = new XMLHttpRequest();
                  xhr.open("POST", "example.php", true);
                  xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                      if (xhr.status === 200 && xhr.status &lt; 300 || xhr.status === 304) {
                        console.log(xhr.responseText);
                      } else {
                        console.log("Request was unsuccessful：" + xhr.status);
                      }
                    }
                  }
                  xhr.send(data);
                }
              }

              EventUtil.addHandler(filesList, 'dragenter', handleEvent);
              EventUtil.addHandler(filesList, 'dragover', handleEvent);
              EventUtil.addHandler(filesList, 'drop', handleEvent);
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
  name: 'api-3',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.api-3
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
