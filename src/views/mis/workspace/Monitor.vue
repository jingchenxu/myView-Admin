<template>
  <div class="monitor-container">
    <Row :gutter="15">
      <Col span="12">
        <Card :bordered="false">
          <p slot="title">活动实时交易情况</p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
      </Col>
      <Col span="12">
        <Card :bordered="false">
          <p slot="title">活动情况预测</p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
      </Col>
    </Row>
    <br>
    <Row :gutter="15">
      <Col span="8">
        <Card :bordered="false">
          <p slot="title">活动情况预测</p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
      </Col>
      <Col span="8">
        <Card :bordered="false">
          <p slot="title">活动情况预测</p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
      </Col>
      <Col span="8">
        <Card :bordered="false">
          <p slot="title">活动情况预测</p>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
const name = 'monitor'
export default {
  name,
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.monitor-container {
  padding: 0 15px;
  min-height: 75vh;
  margin-top: 44px;
}
</style>
