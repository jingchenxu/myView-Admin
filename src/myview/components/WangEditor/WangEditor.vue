<template>
  <div id="wangEditor">

  </div>
</template>

<script>
import WangEditor from 'wangeditor'

export default {
  name: 'WangEditor',
  props: {
    value: {

    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    disabled: {
      handler (val) {
        setTimeout(() => {
          if (val) {
            this.editor.$textElem.attr('contenteditable', false)
          } else {
            this.editor.$textElem.attr('contenteditable', true)
          }
        }, 500)
      },
      immediate: true
    }
  },
  data () {
    return {
      editor: null
    }
  },
  mounted () {
    this.editor = new WangEditor('#wangEditor')
    this.editor.create()
  }
}
</script>
