<template>
  <div class="sys-page1-detail">
    <div class="action-items-container">
      <Form inline>
        <FormItem>
          <Button type="primary" @click="handleBack">返回列表</Button>
        </FormItem>
      </Form>
    </div>
    <white-space/>
    <Form :model="form" :label-width=80>
      <Row>
        <Col span="8">
        <FormItem label="测试1" prop="test1">
          <Input v-model="form.test1" :disabled="disabled" placeholder="请输入测试1" />
        </FormItem>
        </Col>
        <Col span="8">
        <FormItem label="测试1" prop="test1">
          <Input v-model="form.test1" :disabled="disabled" placeholder="请输入测试1" />
        </FormItem>
        </Col>
        <Col span="8">
        <FormItem label="测试1" prop="test1">
          <Input v-model="form.test1" :disabled="disabled" placeholder="请输入测试1" />
        </FormItem>
        </Col>
        <Col span="8">
        <FormItem label="测试1" prop="test1">
          <Input v-model="form.test1" :disabled="disabled" placeholder="请输入测试1" />
        </FormItem>
        </Col>
        <Col span="8">
        <FormItem label="测试1" prop="test1">
          <Input v-model="form.test1" :disabled="disabled" placeholder="请输入测试1" />
        </FormItem>
        </Col>
        <Col span="8">
        <FormItem label="测试1" prop="test1">
          <Input v-model="form.test1" :disabled="disabled" placeholder="请输入测试1" />
        </FormItem>
        </Col>
        <Col span="8">
        <FormItem label="测试1" prop="test1">
          <Input v-model="form.test1" :disabled="disabled" placeholder="请输入测试1" />
        </FormItem>
        </Col>
        <Col span="8">
        <FormItem label="测试1" prop="test1">
          <Input v-model="form.test1" :disabled="disabled" placeholder="请输入测试1" />
        </FormItem>
        </Col>
      </Row>
    </Form>
  </div>
</template>

<script>
export default {
  name: 'SysPage1Detail',
  data () {
    return {
      form: {},
      disabled: false
    }
  },
  mounted () {
    console.dir(this.$parent)
  },
  methods: {
    handleBack () {
      this.$parent.$parent.position = 'list'
    }
  }
}
</script>

<style lang="less" scoped>
.sys-page1-detail {
}
</style>
