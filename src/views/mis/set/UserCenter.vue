<template>
  <div class="user-center">
    <Row :gutter="15">
      <Col span="6">
        <Card :bordered="false">
          <user-center-avator/>
          <p>交互专家</p>
          <p>蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</p>
          <p>江苏省 南京市</p>
          <Divider dashed />
          <user-center-tag/>
          <Divider dashed />
          <user-center-team/>
        </Card>
      </Col>
      <Col span="18">
        <Card :bordered="false">
          <Tabs value="name1">
            <TabPane label="文章" name="name1">
              <div class="article-conatiner">
                <article-item/>
                <article-item/>
                <article-item/>
                <article-item/>
                <article-item/>
                <article-item/>
                <article-item/>
                <article-item/>
                <article-item/>
                <article-item/>
                <article-item/>
                <article-item/>
                <article-item/>
                <article-item/>
                <article-item/>
                <article-item/>
                <article-item/>
                <article-item/>
                <article-item/>
                <article-item/>
              </div>
            </TabPane>
            <TabPane label="应用" name="name2">标签二的内容</TabPane>
            <TabPane label="项目" name="name3">标签三的内容</TabPane>
          </Tabs>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import UserCenterAvator from './components/UserCenterAvator'
import UserCenterTag from './components/UserCenterTag'
import UserCenterTeam from './components/UserCenterTeam'
import ArticleItem from './components/ArticleItem'

export default {
  name: 'UserCenter',
  components: {
    UserCenterAvator,
    UserCenterTag,
    UserCenterTeam,
    ArticleItem
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
@import '../../../theme.less';
.user-center {
  min-height: 75vh;
  padding: 0 @default-gutter;
  margin-top: 44px;
}
</style>
