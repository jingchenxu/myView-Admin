<template>
  <div class="sys-page1-detail">
    <div class="action-items-container">
      <Form inline>
        <FormItem>
          <Button type="primary" icon="md-add" @click="handleAdd('searchParams')">新增</Button>
        </FormItem>
        <FormItem>
          <Button :disabled="!disabled" type="primary" icon="ios-create" @click="handleEdit()">修改</Button>
        </FormItem>
        <FormItem>
          <Button icon="md-checkmark" :disabled="disabled" type="primary" @click="handleSubmit">保存</Button>
        </FormItem>
        <FormItem>
          <Button icon="ios-arrow-back" type="primary" @click="handleBack">返回列表</Button>
        </FormItem>
      </Form>
    </div>
    <white-space/>
    <Form :ref="formRef" :model="form" :rules="rule" :label-width=80>
      <Row>
        <Col span="8">
          <FormItem label="日期" prop="date">
            <DatePicker type="date" :disabled="disabled" v-model="form.date" placeholder="请选择日期"></DatePicker>
          </FormItem>
        </Col>
        <Col span="8">
        <FormItem label="姓名" prop="name">
          <Input v-model="form.name" :disabled="disabled" placeholder="请输入姓名" />
        </FormItem>
        </Col>
        <Col span="8">
        <FormItem label="地址" prop="address">
          <Input v-model="form.address" :disabled="disabled" placeholder="请输入地址" />
        </FormItem>
        </Col>
      </Row>
    </Form>
  </div>
</template>

<script>
import SysUser from './beans/SysUser'
import { saveSysUser } from '../../../api/sysapi'
import getRules from './rules/syspage1rule'

const name = 'SysPage1Detail'

export default {
  name,
  data () {
    return {
      form: {},
      disabled: false,
      formRef: `${name}-formRef`,
      rule: getRules(),
      saveUrl: 'api/savesysuser',
      formInit: () => {
        return new SysUser()
      }
    }
  },
  mounted () {
    // console.dir(this.$parent)
  },
  methods: {
    handleBack () {
      this.$Modal.confirm({
          title: '确认返回列表页',
          content: '<p>表单页内容尚未保存，请确认是否返回列表页！</p>',
          onOk: () => {
            this.$parent.$parent.position = 'list'
            this.$parent.$parent.handleSearch()
          }
      });
    },
    handleAdd () {
      // TODO 重置表单
      this.disabled = false
      this.$refs[this.formRef].resetFields()
      // TODO 初始化数据
      this.form = this.formInit()
    },
    handleEdit (form = this.form) {
      console.dir(form)
      this.form = form
      this.disabled = false
    },
    handleDbclick (form = this.form) {
      this.disabled = true
      this.form = form
    },
    handleSubmit () {
      this.$axios.post(`${this.saveUrl}`, this.form).then(res => {
        if (res.success) {
          this.$Message.success(res.msg)
          this.disabled = true
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.sys-page1-detail {
}
</style>
