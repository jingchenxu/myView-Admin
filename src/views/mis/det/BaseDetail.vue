<template>
  <div class="base-detail">
    <Card>
      <h3>退款申请</h3>
      <Row>
        <Col :xs="24" :sm="24" :md="12" :lg="8">取货单号：1000000000</Col>
        <Col :xs="24" :sm="24" :md="12" :lg="8">状态：已取货</Col>
        <Col :xs="24" :sm="24" :md="12" :lg="8">销售单号：12341234</Col>
        <Col :xs="24" :sm="24" :md="12" :lg="8">子订单：32143214</Col>
      </Row>
      <Divider />
      <h3>用户信息</h3>
      <Row>
        <Col :xs="24" :sm="24" :md="12" :lg="8">用户姓名：myview admin</Col>
        <Col :xs="24" :sm="24" :md="12" :lg="8">联系电话：1810000000000</Col>
        <Col :xs="24" :sm="24" :md="12" :lg="8">常用快递：顺丰快递</Col>
        <Col :xs="24" :sm="24" :md="12" :lg="8">取货地址：这里显示的是详细的测试地址</Col>
        <Col :xs="24" :sm="24" :md="12" :lg="8">备注：无</Col>
      </Row>
      <Divider />
      <h3>退货商品</h3>
      <return-goods/>
      <h3>退货进度</h3>
      <return-goods/>
    </Card>
  </div>
</template>

<script>
import ReturnGoods from './components/ReturnGoods'

export default {
  name: 'BaseDetail',
  components: {
    ReturnGoods
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
@import '../../../theme.less';
.base-detail {
  min-height: 75vh;
  padding: 0 @default-gutter;
  margin-top: 44px;
  line-height: 40px;
}
</style>


