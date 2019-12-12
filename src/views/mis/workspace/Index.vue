<template>
  <div class="index-container">
    <Row :gutter="15">
      <Col span="6">
      <Card :bordered="false">
        <p slot="title">访问量</p>
        <h2>25848</h2>
        <span>日同比12.5% 周同比5%</span>
      </Card>
      </Col>
      <Col span="6">
      <Card :bordered="false">
        <p slot="title">销售额</p>
        <h2>¥12,000</h2>
      </Card>
      </Col>
      <Col span="6">
      <Card :bordered="false">
        <p slot="title">订单量</p>
        <h2>1,680</h2>
      </Card>
      </Col>
      <Col span="6">
      <Card :bordered="false">
        <p slot="title">新增用户</p>
        <h2>128位</h2>
      </Card>
      </Col>
      </Row>
      </br>
      <Row :gutter="15">
        <Col span="3">
          <Card>
            用户
          </Card>
        </Col>
        <Col span="3">
          <Card>
            用户
          </Card>
        </Col>
        <Col span="3">
          <Card>
            用户
          </Card>
        </Col>
        <Col span="3">
          <Card>
            用户
          </Card>
        </Col>
        <Col span="3">
          <Card>
            用户
          </Card>
        </Col>
        <Col span="3">
          <Card>
            用户
          </Card>
        </Col>
        <Col span="3">
          <Card>
            用户
          </Card>
        </Col>
        <Col span="3">
          <Card>
            用户
          </Card>
        </Col>
      </Row>
      </br>
      <Row>
        <Card :bordered="false">
          <p slot="title">访问量</p>
          <h2>128位</h2>
        </Card>
      </Row>
      </br>
      <Row :gutter="15">
      <Col span="12">
      <Card :bordered="false">
        <p slot="title">热门搜索</p>
        <p>Content of card</p>
        <p>Content of card</p>
        <p>Content of card</p>
      </Card>
      </Col>
      <Col span="12">
      <Card :bordered="false">
        <p slot="title">用户画像</p>
        <p>Content of card</p>
        <p>Content of card</p>
        <p>Content of card</p>
      </Card>
      </Col>
      <Col span="12">
      </Col>
    </Row>
  </div>
</template>

<script lang="ts">
import BaseDiagram from './components/BaseDiagram'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    [BaseDiagram.name]: BaseDiagram
  },
  name: 'Index'
})
export default class Index extends Vue { }
</script>

<style lang="less" scoped>
.index-container {
  padding: 0 15px;
  min-height: 75vh;
  margin-top: 44px;

  .ivu-card {
    min-height: 140px;
  }
}
</style>
