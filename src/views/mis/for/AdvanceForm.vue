<template>
  <div class="advance-form">
    <mis-page-title title="高级表单" description="当一次性提交大量数据时，可使用高级表单。"/>
    <div class="advance-form-content">

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MisPageTitle from '../components/MisPageTitle'

@Component({
  name: 'AdvanceForm',
  components: {
    MisPageTitle
  }
})
export default class AdvanceForm extends Vue {

}
</script>

<style lang="less" scoped>
.advance-form {
  min-height: 75vh;
  margin-top: 44px;
  &-content {
    padding: 15px 15px;
  }
}
</style>




