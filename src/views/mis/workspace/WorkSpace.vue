<template>
  <div class="work-space">
    <mis-page-title title="工作台"/>
    <div class="work-space-content">
      <Row :gutter="16">
        <Col span="18">
          <Card :bordered="false">
            <p slot="title">我的项目</p>
            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          </Card>
          <white-space/>
          <Card :bordered="false">
            <p slot="title">动态</p>
            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          </Card>
        </Col>
        <Col span="6">
          <Card :bordered="false">
            <p slot="title">快捷操作</p>
            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          </Card>
          <white-space/>
          <Card :bordered="false">
            <p slot="title">代办事项</p>
            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          </Card>
          <white-space/>
          <Card :bordered="false">
            <p slot="title">小组成员</p>
            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
          </Card>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MisPageTitle from '../components/MisPageTitle'

@Component({
  name: 'WorkSpace',
  components: {
    MisPageTitle
  }
})
export default class WorkSpace extends Vue {

}
</script>

<style lang="less" scoped>
  .work-space {
    min-height: 75vh;
    margin-top: 44px;

    &-content {
      padding: 15px 15px;
    }
  }
</style>
