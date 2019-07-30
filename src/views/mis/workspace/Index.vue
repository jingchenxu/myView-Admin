<template>
  <div class="index-container">
    <Row :gutter="15">
      <Col span="6">
      <Card :bordered="false">
        <p slot="title">绘制简单曲线</p>
        <base-diagram/>
      </Card>
      </Col>
      <Col span="6">
      <Card :bordered="false">
        <p slot="title">Borderless card</p>
        <p>Content of card</p>
        <p>Content of card</p>
        <p>Content of card</p>
      </Card>
      </Col>
      <Col span="6">
      <Card :bordered="false">
        <p slot="title">Borderless card</p>
        <p>Content of card</p>
        <p>Content of card</p>
        <p>Content of card</p>
      </Card>
      </Col>
      <Col span="6">
      <Card :bordered="false">
        <p slot="title">Borderless card</p>
        <p>Content of card</p>
        <p>Content of card</p>
        <p>Content of card</p>
      </Card>
      </Col>
      </Row>
      </br>
      <Row :gutter="15">
      <Col span="12">
      <Card :bordered="false">
        <p slot="title">Borderless card</p>
        <p>Content of card</p>
        <p>Content of card</p>
        <p>Content of card</p>
      </Card>
      </Col>
      <Col span="12">
      <Card :bordered="false">
        <p slot="title">Borderless card</p>
        <p>Content of card</p>
        <p>Content of card</p>
        <p>Content of card</p>
      </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import BaseDiagram from './components/BaseDiagram'

export default {
  name: 'Index',
  components: {
    BaseDiagram
  }
}
</script>

<style lang="less" scoped>
.index-container {
  padding: 15px;
}
</style>
