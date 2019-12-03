<template>
  <textarea id="myMarkdown">

  </textarea>
</template>

<script>
/* eslint-disable */
import SimpleMDE from 'simplemde'

console.dir(SimpleMDE.drawImage)

SimpleMDE.drawImage = (editor) => {
  console.dir('被触犯了')
}

export default {
  name: 'MyMarkdown',
  props: {
    value: {
      default: '尚未输入'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    option: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      markdown: null
    }
  },
  methods: {
    addEvents () {
      this.markdown.codemirror.on('change', () => {
        const value = this.markdown.value()
        console.log(value)
        if (this.localCache) localStorage.markdownContent = value
        this.$emit('input', value)
        this.$emit('on-change', value)
      })
      this.markdown.codemirror.on('focus', () => {
        this.$emit('on-focus', this.markdown.value())
      })
      this.markdown.codemirror.on('blur', () => {
        this.$emit('on-blur', this.markdown.value())
      })
    },
    createMarkdown () {
      const defaultConfig = {
        element: markdown,
        autofocus: true,
        autosave: {
        	enabled: true,
        	uniqueId: 'MyUniqueID',
        	delay: 1000
        },
        blockStyles: {
        	bold: '__',
        	italic: '_'
        },
        forceSync: true,
        // hideIcons: ["guide", "heading"],
        indentWithTabs: false,
        initialValue: 'this.value',
        insertTexts: {
        	horizontalRule: ['', '\n\n-----\n\n'],
        	// image: ["![](http://", ")"],
        	link: ['[', '](http://)'],
        	table: ['', '\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n']
        },
        lineWrapping: false,
        parsingConfig: {
        	allowAtxHeaderWithoutSpace: true,
        	strikethrough: false,
        	underscoresBreakWords: true
        },
        placeholder: 'Type here...',
        // previewRender: function(plainText) {
        // 	return customMarkdownParser(plainText); // Returns HTML from a custom parser
        // },
        // previewRender: function(plainText, preview) { // Async method
        // 	setTimeout(function(){
        // 		preview.innerHTML = customMarkdownParser(plainText);
        // 	}, 250);
        // 	return "Loading...";
        // },
        promptURLs: true,
        renderingConfig: {
        	singleLineBreaks: false,
        	codeSyntaxHighlighting: true
        },
        shortcuts: {
        	drawTable: 'Cmd-Alt-T'
        },
        showIcons: ['code', 'table'],
        spellChecker: false,
        status: false,
        status: ['autosave', 'lines', 'words', 'cursor'], // Optional usage
        status: ['autosave', 'lines', 'words', 'cursor', {
        	className: 'keystrokes',
        	defaultValue: function (el) {
        		this.keystrokes = 0
        		el.innerHTML = '0 Keystrokes'
        	},
        	onUpdate: function (el) {
        		el.innerHTML = ++this.keystrokes + ' Keystrokes'
        	}
        }], // Another optional usage, with a custom status bar item that counts keystrokes
        styleSelectedText: false,
        tabSize: 2,
        // toolbar: true,
        toolbarTips: true
      }
      const markdown = document.getElementById('myMarkdown')
      if (!this.markdown) {
        console.log(this.value)
        this.markdown = new SimpleMDE(Object.assign(defaultConfig, this.option))
        this.markdown.drawImage = () => {
          alert('show me')
        }
        this.addEvents()
        this.updateMarkdownStatus()
      }
    },
    updateMarkdownStatus () {
      console.dir(this.markdown)

      if (this.disabled) {
        // 编辑器切换到预览状态 禁用所有按钮
        this.markdown.togglePreview()
      } else {
        // 便捷器切换到编辑状态 可手动切换至预览状态
        this.markdown.togglePreview()
      }
    }
  },
  mounted () {
    this.createMarkdown()
  }
}
</script>

<style lang="less" scoped>
@import '~simplemde/dist/simplemde.min.css';
</style>
