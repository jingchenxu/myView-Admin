<template>
  <div class="user-setting">
    <Row :gutter="20">
      <Col span="8">
      <Card :bordered="false">
        <p slot="title"><Icon type="md-settings" />个人设置</p>
        <CellGroup>
          <Cell title="基本设置" label="个人账户信息设置" />
          <Cell title="安全设置" label="密码、邮箱等设置" />
          <Cell title="账号绑定" label="绑定第三方社交账户" />
          <Cell title="新消息通知" label="各种通知的设置" />
        </CellGroup>
      </Card>
      </Col>
      <Col span="16">
      <base-setting/>
      </Col>
    </Row>
  </div>
</template>

<script>
import BaseSetting from './subpages/BaseSetting'

export default {
  name: "UserSetting",
  components: {
    BaseSetting
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
@import "../../../theme.less";

.user-setting {
  min-height: 75vh;
  padding: 0 @default-gutter;
}
</style>


