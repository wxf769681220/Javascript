import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'

import 'highlight.js/styles/googlecode.css'

hljs.registerLanguage('javascript', javascript)

const Highlight = {}

Highlight.install = function (Vue, options) {
  Vue.directive('highlight', function (el) {
    const blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {
      hljs.highlightBlock(block)
    })
  })
}
export default Highlight
