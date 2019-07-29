<template>
  <div>
    <h1>SysPage1__</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SysPage1',
  mounted () {
    console.log('请求开始')
    axios.get('/api/data').then( res => {
      console.dir(res)
    })
  }
}
</script>
